import * as React from 'react';
import { useComments } from './useComments';
import { Comment } from './Comment';
import { CommentPost } from './CommentPost';


export const CommentList = () => {
    const [comments, currentUser, setComments] = useComments();

    return (
        <ul className='comment-list'>
            {comments.map(comment => 
                <Comment
                    activeUser={currentUser}
                    comment={comment} 
                    degree={0}
                    isReply={false}
                />)} 
            <CommentPost activeUser={currentUser} postType='SEND'/>
        </ul>
    )
}