import { Outlet } from 'react-router-dom';
import CustomLink from "./CustomLink";

export default function Layout(props) {
    return (
        <>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>



            <Outlet/>

            <footer>2022</footer>
        </>
    )
}