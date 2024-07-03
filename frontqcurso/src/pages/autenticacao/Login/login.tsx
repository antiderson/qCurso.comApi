import { Button, H3, Input, Label, Checkbox, Stack, XStack, YStack } from "tamagui"
import styles from "./index.module.css"
import { Link } from "react-router-dom"
import fundoAuth from '../../../assets/fundoAuth.jpg'
import { useEffect, useState } from "react"

const frases = [
    " é mais que Blog!",
    " é mais que educação!",
    " é mais que um site!",
    " é mais que um fórum!"
];

const CardFrase: React.FC = () => {
    const [atualFrase, setAtualFrase] = useState<string>(frases[0]);

    useEffect(() => {
        const Interval = setInterval(() => {
            setAtualFrase(prevFrase => {
                const index = frases.indexOf(prevFrase);
                const proxFrase = (index + 1) % frases.length;
                return frases[proxFrase];
            });
        }, 3000);

        return () => clearInterval(Interval);
    }, []);

    return (
        <YStack bg="#fff" w="60%" h="40%" className={styles.card} align="center">
            <p className={styles.frase}>
                <span style={{ fontWeight: 'bold' }}>qCurso</span> {atualFrase}
            </p>
        </YStack>
    )
};

export default function Login() {
    return (
        <XStack className={styles.container} style={{
            backgroundImage: `url(${fundoAuth})`,
            alignItems: "center"
        }}>
            <YStack className={styles.banner}>
                <YStack style={{ alignItems: 'center'}} className={styles.fundo} h="96%">
                    <CardFrase />
                </YStack>
                <p className={styles.teste}>Membro novo por aqui? <Link style={{ textDecoration: "underline", color: "inherit" }} to={"/register"}>Registrar</Link></p>
            </YStack>
            <YStack style={{
                padding: "2rem",
                backgroundColor: '#FFFFFF',
                height: "70vh",
                width: "60vh",
                borderRadius: "0 20px 20px 0"
            }} >
                <Stack space="$5" padding="$4">
                    <H3 size={1} fontSize="$7" fontFamily={"$body"} fontWeight="500">Login</H3>
                    <YStack>
                        <Label htmlFor="email" fontSize="$2">EMAIL OU NOME DE USUARIO</Label>
                        <Input id="email" placeholder="Email ou Nome de usuario" style={{ borderRadius: "0px", backgroundColor: "white", border: 'none', borderBottom: '1px solid #E9E9E9' }} />
                        <Label htmlFor="password" fontSize="$2">PASSWORD</Label>
                        <Input id="password" placeholder="Password" type="password" style={{ borderRadius: "0px", backgroundColor: "white", border: 'none', borderBottom: '1px solid #E9E9E9' }} />
                    </YStack>
                    <XStack alignItems="center" space="$4">
                        <Checkbox size="$3" />
                        <Checkbox.Indicator>
                            {/* <Check /> */}
                        </Checkbox.Indicator>
                        <Label>
                            Manter conectado
                        </Label>
                    </XStack>
                    <Button fontSize="$4" padding="$3" bg="#222" color="#fff" unstyled style={{ border: 'none', borderRadius: '10px' }} >Login</Button>
                    <H3 fontSize="$2" textAlign="right">
                        <a href="/forgot-password" style={{ textDecoration: "underline", color: "inherit" }}>Esqueceu a senha?</a>
                    </H3>
                    <H3 fontSize="$2" size={1} fontFamily={"$body"} textAlign="left">Conectar com:</H3>
                    <XStack justifyContent="space-around">
                        <Button>Google</Button>
                        <Button>Facebook</Button>
                        <Button>Twitter</Button>
                    </XStack>
                </Stack>
            </YStack>
        </XStack >
    )
}