import { Button, H1, H6, Input, Text, XStack, YStack } from "tamagui";

export default function SearchList() {
    return (
        <>
            <YStack alignItems="center" mt="10%">
                <H1 size={"$10"} color="$white1" fontFamily={'Roboto'}>Como podemos te ajudar?</H1>
                <H6 color="$white1" mt="1%">Digite palavras chave sobre temas que deseja pesquisar</H6>
                <Input mt="2%"size="$5" w="30%" borderRadius="50px"
                    placeholder="Buscar">
                </Input>
                <XStack mt="3%" alignItems="center">
                <H6 color="$white1" >Pesquisas sugeridas:</H6>
                <Button >
                    <Text>React.js</Text>
                </Button>
                    <Button>
                        <Text>CSS</Text>
                    </Button>
                    <Button>
                        <Text>Vue</Text>
                    </Button>
                </XStack>
            </YStack>
        </>
    )
}