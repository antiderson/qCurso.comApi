import { YStack } from "tamagui";
import HeaderConte from "../../Components/HeaderConte/headerConte";
import styles from './index.module.css';
import { ListaPosts } from "../../Components/listPost/ListaPost";


export default function Forum() {
    return (
        <>
            <HeaderConte />
            <div className="container fluid">
                {/* <h1 className="text-dark">Postagens</h1> */}
                <ListaPosts />
                {/* e tambem a barra lateral */}
            </div>
        </>

    )
}