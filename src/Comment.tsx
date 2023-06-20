import * as React from 'react';
import { CommentType } from './useComments';

type CommentProps  = {
    comment: CommentType, 
    degree: number,
    isReply: boolean,
    activeUsername: string;
}

export const Comment = ({ comment, degree, isReply, activeUsername }: CommentProps) => {

    return (
        <div className={`comment ${isReply ? 'reply' : ''} ml-${degree}`}>
            <article>
                <div className="comment-score">
                    <button>+</button>
                    <p className='score'>{comment.score}</p>
                    <button>-</button>
                </div>
                <div className="content-container">
                    <div className="header-section">
                        <div className="header">
                            <img src={`${comment.user.image.png}`} alt="user image" />
                            <span className="username">{comment.user.username}</span>
                            {activeUsername == comment.user.username ? 
                                <span className="you">you</span> : <></>}
                            <span className="createdAt">{comment.createdAt}</span>
                        </div>
                            {activeUsername !== comment.user.username ? 
                                <button className="comment-button reply-button">
                                    <img src="images/icon-reply.svg" alt="reply icon" />
                                    <p>Reply</p>
                                </button> :
                                (<div className="active-buttons">
                                    <button className="comment-button delete-button">
                                        <img src="images/icon-delete.svg" alt="delete icon" />
                                        <p>Delete</p>
                                    </button>
                                    <button className="comment-button edit-button">
                                        <img src="images/icon-edit.svg" alt="edit icon" />
                                        <p>Edit</p>
                                    </button>
                                 </div>)}
                        </div>
                    <p className="content">{comment.content}</p>
                </div>
            </article>
            {comment.replies.map(reply => 
                <Comment 
                    activeUsername={activeUsername}
                    comment={reply} 
                    degree={degree + 1}
                    isReply={true} />)}
        </div>

    )
}