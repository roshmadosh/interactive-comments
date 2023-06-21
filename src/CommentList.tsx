import * as React from 'react';
import { useComments } from './useComments';
import { Comment } from './Comment';
import { CommentPost } from './CommentPost';
import { DeleteModal } from './DeleteModal';


export const CommentList = () => {
    const [comments, currentUser, deleteComment] = useComments();
    const [deleteId, setDeleteId] = React.useState(-1);

    function removeComment() {
        deleteComment(null, comments, deleteId);
    }

    return (
        <>
            <ul className='comment-list'>
                {comments.map(comment => 
                    <Comment
                        activeUser={currentUser}
                        comment={comment} 
                        degree={0}
                        setDeleting={setDeleteId}
                        isReply={false}
                    />)} 
                <CommentPost activeUser={currentUser} postType='SEND'/>
            </ul>
            {deleteId != -1 && 
                <DeleteModal closeModal={() => setDeleteId(-1)} removeComment={removeComment}/>}
        </>
    )
}