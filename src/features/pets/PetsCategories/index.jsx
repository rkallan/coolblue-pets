import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";
import categories from "./resources/data";
import styles from "./resources/styles/petsCategories.module.scss";

const NavigationLink = loadable(() => import(/* webpackChunkName: "NavigationLink" */ "@coolblue/ui-library/NavigationLink"), {
    fallback: <Loading />,
});

const Icons = loadable(() => import(/* webpackChunkName: "Icons" */ "@coolblue/ui-library/Icons"), {
    fallback: <Loading />,
});

function PetsCategories() {
    return (
        <article className={styles.container}>
            <div className={styles.unit}>
                <h2>Categories</h2>
            </div>
            <nav className={styles.unit}>
                <ul className={styles.list}>
                    {categories.map(({ id, title, icon }) => {
                        return (
                            <li key={id} className={styles.item}>
                                <NavigationLink className={styles.link} to="#">
                                    <div className={styles.icon}>
                                        <Icons icon={icon} variant="large" />
                                    </div>
                                    <div className={styles.title}>{title}</div>
                                </NavigationLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </article>
    );
}

export default PetsCategories;
