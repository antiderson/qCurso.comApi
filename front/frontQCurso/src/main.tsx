import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/home.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Usuario from './Components/UsuarioComponent/usuario.tsx';
import Post from './Components/PostComponent/post.tsx';



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