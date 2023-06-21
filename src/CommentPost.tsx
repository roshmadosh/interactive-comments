import * as React from 'react';
import { User } from './useComments';

export type CommentPostProps = {
    activeUser: User,
    postType: PostType
}
export type PostType = 'REPLY' | 'EDIT' | 'SEND';

export const CommentPost = ({ activeUser, postType }: CommentPostProps) => {

    return (
        <div className="comment-post">
            <img className="post-image" src={activeUser.image.png} alt="active user profile pic" />
            <input 
                name="comment-post" 
                id="comment-post-ta" 
                cols="30" rows="10"
                placeholder="Add a comment..."></input>
            <button type="submit">{postType}</button>
        </div>
    );
}