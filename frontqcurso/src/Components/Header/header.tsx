import { Link } from "react-router-dom";
import { Button, XStack } from "tamagui";
import LogoBranca from '../../assets/logoTrans.png';
import styles from './index.module.css';

export default function Header() {
    return (
        <>
            <XStack display="flex" justifyContent="space-around" width="100%" mt='20px' h={'8%'} alignItems="center">
                <img src={LogoBranca} alt="logo do projeto" style={{ width: "300px", height: "70px" }} />
                <XStack w='30%' alignItems="center">
                    <XStack w="80%" justifyContent="space-between" className={styles.lista}>
                        <Link className={styles.ItemList} to={'/'}>Inicío</Link>
                        <Link className={styles.ItemList} to={''}>Docs</Link>
                        <Link className={styles.ItemList} to={'/forum'}>Fórum</Link>
                        <Link className={styles.ItemList} to={'/posts'}>Blog</Link>
                    </XStack>
                    <XStack w="30%" justifyContent="space-between" >
                        <Button color="white" fontSize='$6' borderColor="#fff" borderRadius='$10' transparent={true} className={styles.login}>Login</Button>
                        <Button>theme</Button>
                    </XStack>
                </XStack>
            </XStack>
        </>
    )
}
