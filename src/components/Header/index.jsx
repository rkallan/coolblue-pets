import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";
import styles from "./resources/styles/header.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@coolblue/ui-library/Container"), {
    fallback: <Loading />,
});

function Header() {
    return (
        <Container classNameContainer={styles.container} containerElementTag="header" variant="yellow">
            Header
        </Container>
    );
}

export default Header;
