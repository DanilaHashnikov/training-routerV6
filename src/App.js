import './App.css';
import {Routes, Route} from 'react-router-dom'
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Singlepage from "./pages/Singlepage";
import Homepage from "./pages/HomePage";
import Notfoundpage from "./pages/Notfoundpage";
import Editpage from "./pages/Editpage";
import Loginpage from "./pages/Loginpage";

import Layout from "./components/Layout";
import Createblog from "./pages/Createblog";
import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="about" element={<Aboutpage/>}/>
                    <Route path="blog" element={<Blogpage/>}/>
                    <Route path="blog/:id" element={<Singlepage/>}/>
                    <Route path="blog/:id/editpage" element={<Editpage/>}/>
                    <Route path="blog/createblog" element={
                        <RequireAuth>
                            <Createblog/>
                        </RequireAuth>
                    }/>
                    <Route path="login" element={<Loginpage/>}/>
                    <Route path="*" element={<Notfoundpage/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
