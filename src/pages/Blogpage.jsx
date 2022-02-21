import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function Blogpage(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    })

    return (
        <>
            <Link to="/blog/createblog">create blog</Link>
            {posts.map((post) => (<Link key={post.id} to={`/blog/${post.id}`}><li>{post.title}</li></Link>))}
        </>
    );
}