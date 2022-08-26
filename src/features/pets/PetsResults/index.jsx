import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";
import Fuse from "fuse.js";
import { useGetAllPetsQuery } from "features/pets/petsApi";
import { getPetsSearchValue } from "features/pets/petsSelector";
import { Loading } from "@coolblue/ui-library";
import styles from "./resources/styles/petsResults.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@coolblue/ui-library/Container"), {
    fallback: <Loading />,
});

const Button = loadable(() => import(/* webpackChunkName: "Button" */ "@coolblue/ui-library/FormElements/Button"), {
    fallback: <Loading />,
});

const NavigationLink = loadable(() => import(/* webpackChunkName: "NavigationLink" */ "@coolblue/ui-library/NavigationLink"), {
    fallback: <Loading />,
});

function PetsResults() {
    const { data } = useGetAllPetsQuery() || {};
    const value = useSelector(getPetsSearchValue);
    const [searchData, setSearchData] = useState((data && Object.values(data)) || []);

    const searchItem = useCallback(
        (query) => {
            if (!query) {
                setSearchData(Object.values(data));
                return;
            }
            const fuse = new Fuse(Object.values(data), {
                keys: ["name"],
            });
            const result = fuse.search(query);
            const finalResult = result.map(({ item }) => item);
            setSearchData(finalResult);
        },
        [data]
    );

    useEffect(() => {
        if (data) searchItem(value);
    }, [searchItem, value, data]);

    return (
        <Container classNameContainer={styles.container} containerElementTag="article" noUnitElement fullWidth variant="white">
            <div className={styles.unit} variant="title">
                <h2>Results</h2>
            </div>
            <section className={styles.unit} variant="result">
                {searchData?.map(({ id, imageUrl, name }) => {
                    return (
                        <article key={id} className={styles.item}>
                            <NavigationLink className={styles.link} to="#">
                                <figure className={styles.image}>
                                    <img src={imageUrl} alt="" />
                                </figure>
                                <div className={styles.title}>{name}</div>
                                <div className={styles.button}>
                                    <Button variant="small">View</Button>
                                </div>
                            </NavigationLink>
                        </article>
                    );
                })}
            </section>
        </Container>
    );
}

export default PetsResults;
