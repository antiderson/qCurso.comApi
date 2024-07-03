import {YStack } from "tamagui";
import HeaderConte from "../../Components/HeaderConte/headerConte";
import styles from './index.module.css';


export default function Forum() {
    return (
        <>
            <HeaderConte />
            <YStack className={styles.mainCont}>
                <h1>teste</h1>
                <h1>teste2</h1>
            </YStack>
        </>

    )
}