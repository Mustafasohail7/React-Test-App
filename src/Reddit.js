import React, { useState } from 'react';
import axios from 'axios';

function Reddit() {
    let [posts,setPosts] = useState([]);
    React.useEffect(() => {
        axios.get('https://www.reddit.com/r/me_irl.json').then(res => {
            const newPosts = res.data.data.children.map(obj => obj.data);
            setPosts(newPosts);
        }); 
    }, []);
    return (
        <div align="left">
            <h2 align="center"><a href="https://www.reddit.com/r/me_irl/">r/me_irl</a></h2>
            <h3 align="center">(Getting title, user and score of posts from a subreddit on Reddit.com)</h3>
            <ul>
                {posts.map (post => (
                    <li key={post.id}>Title: {post.title}<br/>Posted by: {post.author_fullname}<br/>Score: {post.score}</li>
                ))}
            </ul>
        </div>
    )
}

export default Reddit;