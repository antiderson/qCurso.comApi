import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../tamagui.config'
import Post from './Components/PostComponent/postComponent.tsx'
import Usuario from './Components/UsuarioComponent/usuario'
import Home from './pages/Home/home'
import Login from './pages/autenticacao/Login/login.tsx'
import Register from './pages/autenticacao/Register/register.tsx'
import Forum from './pages/Forum/forum.tsx'

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
        },{
            path: "/forum",
            element: <Forum/>
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