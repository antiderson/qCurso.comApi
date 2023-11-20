
import Header from "../Header/header";
import ListaUsuarios from "../../pages/Home/ListaUsuarios";
// import './style.css'


export default function Usuario() {
    return (
        <>
            <Header/>
            <div className="container fluid">
                <h1 className="text-dark">Usúarios</h1>
                 <ListaUsuarios />
            </div>
        </>

    ) 
}
