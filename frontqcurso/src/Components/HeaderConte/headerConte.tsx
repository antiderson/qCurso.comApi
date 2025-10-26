import { Link } from "react-router-dom";
import { Button, XStack, YStack } from "tamagui";
// import LogoBranca from '../../assets/logoTrans.png';
 import LogoBranca from '../../assets/logo_Black.svg';
import bannerHeader from '../../assets/banner-header.png'
import styles from './index.module.css';

export default function HeaderConte() {

    //const createQuestion = () => {
    //    navigate('/create-question');
    //}
    return (
        <>
            <YStack 
                style={{
                    backgroundImage: `url(${bannerHeader})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '35vh'
                }} display="flex" justifyContent="space-around" width="100%" mt='-80px' alignItems="center">
                <XStack w='100%' alignItems="center" justifyContent="space-around" mt='40px'>
                <img src={LogoBranca} alt="logo do projeto" style={{ width: "300px", height: "70px" }} />
                    <XStack w="30%" justifyContent="space-between" className={styles.lista}>
                        <Link className={styles.ItemList} to={'/'}>Inicío</Link>
                        <Link className={styles.ItemList} to={''}>Docs</Link>
                        <Link className={styles.ItemList} to={'/forum'}>Fórum</Link>
                        <Link className={styles.ItemList} to={'/posts'}>Blog</Link>
                    <XStack w="30%" justifyContent="space-between" >
                        {/* <Button color="#292929"borderColor="#292929" borderRadius='$10' transparent={true} className={styles.login}>Criar</Button> */}
                        {/* <Button>theme</Button> */} 
                            <Link to="/create-question">
                                <Button color="#292929" borderColor="#292929" borderRadius='$10' transparent={true} className={styles.login}>
                                    Criar
                                </Button>
                            </Link>
                    </XStack>
                    </XStack>
                </XStack>

                <input className={styles.inputHeader} 
                placeholder="Pesquisar"
                type="text" />
            </YStack>
        </>
    )
}
