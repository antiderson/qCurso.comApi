import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/home.tsx';
import Forum from './pages/Forum/forum.tsx';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Usuario from './Components/UsuarioComponent/usuario.tsx';
import Post from './Components/PostComponent/post.tsx';
import Login from './pages/Login/login.tsx';
import Register from './pages/Register/register.tsx';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: "/usuarios",
        element: <Usuario />,
    },
    {
        path: "/posts",
        element: <Post />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: '/forum',
        element: <Forum />,
    }

    // errorElement: <Error />     **criar tela de erro
    // action: () => <Home />,

])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        {/* <Home /> */}
    </React.StrictMode>,
)