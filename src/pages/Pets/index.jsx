/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo } from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";
import { useGetAllPetsQuery, petsApi } from "features/pets/petsApi";
import heroData from "./resources/data/hero";
import styles from "./resources/styles/pets.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@coolblue/ui-library/Container"), {
    fallback: <Loading />,
});

const Hero = loadable(() => import(/* webpackChunkName: "Hero" */ "@coolblue/ui-library/Hero"), {
    fallback: <Loading />,
});

const NavigationLink = loadable(() => import(/* webpackChunkName: "NavigationLink" */ "@coolblue/ui-library/NavigationLink"), {
    fallback: <Loading />,
});

const Button = loadable(() => import(/* webpackChunkName: "Button" */ "@coolblue/ui-library/FormElements/Button"), {
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
        </Container>
    );
}

export default Pets;
