import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";
import styles from "./resources/styles/petsResults.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@coolblue/ui-library/Container"), {
    fallback: <Loading />,
});

function PetsResults() {
    return (
        <Container classNameContainer={styles.container} containerElementTag="article" noUnitElement fullWidth variant="white">
            <div className={styles.unit}>
                <h2>Results</h2>
            </div>
            <section className={styles.unit}>Result items</section>
        </Container>
    );
}

export default PetsResults;
