import * as React from 'react';
import { CommentType } from './useComments';

type CommentProps  = {
    comment: CommentType, 
    degree: number,
    isReply: boolean,
}

export const Comment = ({ comment, degree, isReply }: CommentProps) => {

    return (
        <div className={`comment ${isReply ? 'reply' : ''} ml-${degree}`}>
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
                    degree={degree + 1}
                    isReply={true} />)}
        </div>

    )
}