import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";
import styles from "./resources/styles/petsSearch.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@coolblue/ui-library/Container"), {
    fallback: <Loading />,
});

function PetsSearch() {
    return (
        <Container classNameContainer={styles.container} containerElementTag="section" noUnitElement fullWidth variant="white">
            <div className={styles.unit}>Inputfield Search</div>
            <div className={styles.unit}>Filter options</div>
        </Container>
    );
}

export default PetsSearch;
