import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";
import styles from "./resources/styles/logo.module.scss";

const Icons = loadable(() => import(/* webpackChunkName: "Icons" */ "@coolblue/ui-library/Icons"), {
    fallback: <Loading />,
});

const NavigationLink = loadable(() => import(/* webpackChunkName: "NavigationLink" */ "@coolblue/ui-library/NavigationLink"), {
    fallback: <Loading />,
});

function Logo() {
    return (
        <NavigationLink className={styles.container} to="/pets">
            <Icons icon="petIcon" noContainer />
        </NavigationLink>
    );
}

export default Logo;
