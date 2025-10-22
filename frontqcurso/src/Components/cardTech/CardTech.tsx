import { Button, XStack } from "tamagui";
import styles from "./index.module.css";
import { Stack } from "../../Model/enum/Stack";

interface CardTechProps {
    title: string;
    icon: string;
    postNumber: number;
    link: string;
}

function  clickToCard(link: string) {
    window.open("/" + link, "_self");
}

const CardTech: React.FC<CardTechProps> = ({ title, icon, postNumber, link }) => {
    return (
        <div onClick={() => clickToCard(link)}>
            <XStack className={styles.card}>
                <div className="card__icon">
                    <img src={icon} alt="icon" />
                </div>
                <div className="card__content">
                    <h3>{title}</h3>
                    <p>{postNumber} posts</p>
                </div>
            </XStack>
        </div>
    )
}

const StackCards: React.FC = () => {
    const stacks = Object.values(Stack).filter((value) => typeof value === 'string');

    return (
        <div className={styles.all}>
            <div className={styles.grid}>
                {stacks.map((stack) => (
                    <CardTech
                        key={stack}
                        title={stack.toString()}
                        icon={`./icons/${stack}.svg`} 
                        postNumber={10} 
                        link={`/${stack}`} 
                    />
                ))}
            </div>
            <div className={styles.btnEnd}>
                <Button>
                    Mostrar Todos
                </Button>
            </div>
        </div>
    );
};

export default StackCards;
