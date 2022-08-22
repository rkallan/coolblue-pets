import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";
import { useGetAllPetsQuery } from "features/pets/petsApi";
import styles from "./resources/styles/pets.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@coolblue/ui-library/Container"), {
    fallback: <Loading />,
});

const PetsSearch = loadable(() => import(/* webpackChunkName: "PetsSearch" */ "features/pets/PetsSearch"), {
    fallback: <Loading />,
});

const PetsResults = loadable(() => import(/* webpackChunkName: "PetsResults" */ "features/pets/PetsResults"), {
    fallback: <Loading />,
});

const PetsHero = loadable(() => import(/* webpackChunkName: "PetsHero" */ "features/pets/PetsHero"), {
    fallback: <Loading />,
});

const PetsCategories = loadable(() => import(/* webpackChunkName: "PetsCategories" */ "features/pets/PetsCategories"), {
    fallback: <Loading />,
});

function Pets() {
    useGetAllPetsQuery();

    return (
        <Container classNameContainer={styles.container} containerElementTag="section" noUnitElement variant="white">
            <div className={styles.unit}>
                <h1>Pets</h1>
            </div>
            <PetsSearch />
            <PetsResults />
            <PetsHero />
            <PetsCategories />
        </Container>
    );
}

export default Pets;
