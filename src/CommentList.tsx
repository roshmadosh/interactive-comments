import * as React from 'react';
import { useComments } from './useComments';
import { Comment } from './Comment';


export const CommentList = () => {
    const [comments, setComments] = useComments();

    return (
        <ul className='comment-list'>
            {comments.map(comment => 
                <Comment
                    comment={comment} 
                    degree={0}
                    isReply={false}
                />)} 
        </ul>
    )
}