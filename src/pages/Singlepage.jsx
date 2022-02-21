import {Link, useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const  Singlepage = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    const goBack = () => navigate(-1 );
    const goHome = () => navigate('/', {replace: true})

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <div>{post.body}</div>
                    <Link to={`editpage`}>Edit page</Link>
                    <div>
                        <button onClick={goBack}>go back</button>
                        <button onClick={goHome}>go home</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Singlepage