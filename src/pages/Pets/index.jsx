import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";
import heroData from "./resources/data/hero";
import styles from "./resources/styles/pets.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@coolblue/ui-library/Container"), {
    fallback: <Loading />,
});

const Hero = loadable(() => import(/* webpackChunkName: "Hero" */ "@coolblue/ui-library/Hero"), {
    fallback: <Loading />,
});

const Button = loadable(() => import(/* webpackChunkName: "Button" */ "@coolblue/ui-library/FormElements/Button"), {
    fallback: <Loading />,
});

const PetsSearch = loadable(() => import(/* webpackChunkName: "Container" */ "features/pets/PetsSearch"), {
    fallback: <Loading />,
});

const PetsResults = loadable(() => import(/* webpackChunkName: "Container" */ "features/pets/PetsResults"), {
    fallback: <Loading />,
});

function Pets() {
    return (
        <Container classNameContainer={styles.container} containerElementTag="section" noUnitElement variant="white">
            <div className={styles.unit}>
                <h1>Pets</h1>
            </div>
            <PetsSearch />
            <PetsResults />
            <Hero image={heroData.image} imageSource={heroData.imageSource}>
                <h2 className={styles.title}>{heroData.title}</h2>
                <p className={styles.text}>{heroData.text}</p>
                <div className={styles.button}>
                    <Button variant="small white">{heroData.button}</Button>
                </div>
            </Hero>
        </Container>
    );
}

export default Pets;
