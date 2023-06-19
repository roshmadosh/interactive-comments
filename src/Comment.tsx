import * as React from 'react';
import { CommentType } from './useComments';

export const Comment = ({ comment, isReply }: { comment: CommentType, isReply: boolean }) => {
    

    return (
        <div className={`comment ${isReply ? 'reply' : ''}`}>
            <article>
                <div className="comment-score">
                    <button>+</button>
                    <p className='score'>{comment.score}</p>
                    <button>-</button>
                </div>
                <div className="content-container">
                    <div className="header">
                        <img src={`${comment.user.image.png}`} alt="user image" />
                        <span className="username">{comment.user.username}</span>
                        <span className="createdAt">{comment.createdAt}</span>
                    </div>
                    <p className="content">{comment.content}</p>
                </div>
            </article>
            {comment.replies.map(reply => 
                <Comment 
                    comment={reply} 
                    isReply={true} />)}
        </div>

    )
}