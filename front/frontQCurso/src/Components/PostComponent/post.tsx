import Header from "../Header/header";
import ListaPosts from "../../pages/Home/ListaPosts";
// import './style.css'


export default function Post() {
    return (
        <>
            <Header/>
            <div className="container fluid">
                 <h1 className="text-dark">Postagens</h1>  
                <ListaPosts />
            </div>
        </>

    )
}
