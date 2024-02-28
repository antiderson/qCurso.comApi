import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../tamagui.config'
import Post from './Components/PostComponent/post'
import Usuario from './Components/UsuarioComponent/usuario'
import Home from './pages/Home/home'
import Login from './pages/Login/login.tsx'
import Register from './pages/Register/register.tsx'

export default function App() {
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
        }

        // errorElement: <Error />     **criar tela de erro
        // action: () => <Home />,
    ])


    return (
        <TamaguiProvider config={tamaguiConfig}>
            <RouterProvider router={router} />
        </TamaguiProvider>
    )
}