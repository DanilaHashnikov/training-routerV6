import {Link, useMatch} from "react-router-dom";

export default function CustomLink(props) {
    const match = useMatch(props.to);
    return(
        <Link to={props.to} style={{color: match ? "red" : ""}} {...props}>
            {props.children}
        </Link>
    );
}