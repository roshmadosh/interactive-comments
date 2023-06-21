import * as React from 'react';
import { User, CommentType } from './useComments';
import { CommentPost, PostType } from './CommentPost';

type CommentProps  = {
    comment: CommentType, 
    degree: number,
    isReply: boolean,
    activeUser: User,
}

export const Comment = ({ comment, degree, isReply, activeUser}: CommentProps) => {
    const [isPosting, setIsPosting] = React.useState(false);
    const isUserComment = activeUser.username === comment.user.username;
    function onAction(e) {
        setIsPosting(true);
    }

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
                            {isUserComment ? 
                                <span className="you">you</span> : <></>}
                            <span className="createdAt">{comment.createdAt}</span>
                        </div>
                            {activeUser.username !== comment.user.username ? 
                                <button className="comment-button reply-button" onClick={onAction}>
                                    <img src="images/icon-reply.svg" alt="reply icon" />
                                    <p>Reply</p>
                                </button> :
                                (<div className="active-buttons">
                                    <button className="comment-button delete-button" onClick={onAction}>
                                        <img src="images/icon-delete.svg" alt="delete icon" />
                                        <p>Delete</p>
                                    </button>
                                    <button className="comment-button edit-button" onClick={onAction}>
                                        <img src="images/icon-edit.svg" alt="edit icon" />
                                        <p>Edit</p>
                                    </button>
                                 </div>)}
                        </div>
                    <p className="content">{comment.content}</p>
                </div>
            </article>
            {isPosting ? <CommentPost activeUser={activeUser} postType={isUserComment ? 'EDIT' : 'REPLY'} />: <></>}
            {comment.replies.map(reply => 
                <Comment 
                    activeUser={activeUser}
                    comment={reply} 
                    degree={degree + 1}
                    isReply={true} />)}
        </div>

    )
}