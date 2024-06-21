import ListaPosts from "../listPost/ListaPost";
import HeaderConte from "../HeaderConte/headerConte";
// import './style.css'


export default function PostComponent() {
    return (
        <>
            <HeaderConte />
            <div className="container fluid">
                <h1 className="text-dark">Postagens</h1>
                <ListaPosts />
                {/* e tambem a barra lateral */}
            </div>
        </>

    )
}