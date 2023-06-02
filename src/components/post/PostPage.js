import React from 'react';
import Profile from '../profile/Profile';
import Post from './Post';


function PostPage() {
    return (
        <div className="row with-vertical-line">
            <div className="col-4 vertical-line">
                <Profile />
            </div>
            <div className="col-8 my-4">
                <h5 style={{ borderBottom: "2px solid #E25540", textAlign: "right", color: "#E25540" }}>Publicaciones</h5>
                <div className="row my-4">
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default PostPage;