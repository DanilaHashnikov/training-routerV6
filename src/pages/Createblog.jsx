import {useAuth} from "../hook/useAuth";
import {useNavigate} from "react-router-dom";

export default function Createblog(props) {
    const {signout} = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        signout(() => navigate('/', {replace: true}));
    }
    return (
        <div>
            <h1>Createblog</h1>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    );
}
