import { CadastrarForum } from "../../Components/FormForum/CadastarForum";
import HeaderConte from "../../Components/HeaderConte/headerConte";
export default function CriarForum() {
    return (
        <>
            <HeaderConte />
            <div className="container fluid">
                <CadastrarForum />
            </div>
        </>
    )
}