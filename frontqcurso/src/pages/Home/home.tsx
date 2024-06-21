import "./styles.css"
import Header from "../../Components/Header/header"
import { YStack } from "tamagui"
// import fundoHome from "../../assets/fundoHome.png"
import fundoHome from "../../assets/fundoHome.png"

import SearchList from "../../Components/search&List/Search&List"


export default function Home() {
    return (
        <>
        <YStack style={{
            backgroundImage: `url(${fundoHome})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh'
        }}>
        <Header />
        <SearchList/>
        </YStack>
        </>
    )
}