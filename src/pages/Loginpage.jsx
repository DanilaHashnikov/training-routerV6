import {useNavigate, useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

export default function Loginpage() {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const user = form.user.value
        signin(user, () => navigate(fromPage, {replace: true}));

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Log in</h2>
            <label>
                Имя:
                <input name="user" type="text"/>
            </label>
            <input type="submit" value="Отправить" />
        </form>
    )
}