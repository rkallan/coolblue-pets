import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";
import styles from "./resources/styles/pets.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@coolblue/ui-library/Container"), {
    fallback: <Loading />,
});

function Pets() {
    return (
        <Container classNameContainer={styles.container} containerElementTag="section" noUnitElement variant="white">
            <div className={styles.unit}>
                <h1>Pets</h1>
            </div>
        </Container>
    );
}

export default Pets;
