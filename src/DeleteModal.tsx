import * as React from 'react';

export const DeleteModal = ({ removeComment, closeModal }) => {
    function onDelete() {
        removeComment();
        closeModal();
    }
    
    return (
        <div className="modal">
            <h1>Delete Comment</h1>
            <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
            <div className="modal-buttons">
                <button onClick={closeModal}>NO, CANCEL</button>
                <button onClick={onDelete}>YES, DELETE</button>
            </div>
        </div>
    )
}