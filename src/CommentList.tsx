import * as React from 'react';
import { useComments } from './useComments';
import { Comment } from './Comment';
import { CommentPost } from './CommentPost';


export const CommentList = ({ activeUsername }) => {
    const [comments, currentUser, setComments] = useComments();

    return (
        <ul className='comment-list'>
            {comments.map(comment => 
                <Comment
                    activeUsername={activeUsername}
                    comment={comment} 
                    degree={0}
                    isReply={false}
                />)} 
            <CommentPost activeUser={currentUser} />
        </ul>
    )
}