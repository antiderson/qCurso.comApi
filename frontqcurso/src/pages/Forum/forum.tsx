import { CadastrarForum } from "../../Components/FormForum/CadastarForum";
import HeaderConte from "../../Components/HeaderConte/headerConte";
import { ListaForum } from "../../Components/listForum/ListForum";


export default function Forum() {
    return (
        <>
            <HeaderConte />
            <div className="container fluid">
                {/* <h1 className="text-dark">Postagens</h1> */}
                {/* <ListaPosts /> */}
                <ListaForum />
                {/* <CadastrarForum /> */}

                {/* e tambem a barra lateral */}
            </div>
        </>

    )
}