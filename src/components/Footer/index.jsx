import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";
import styles from "./resources/styles/footer.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@coolblue/ui-library/Container"), {
    fallback: <Loading />,
});

function Footer() {
    return <Container classNameContainer={styles.container} containerElementTag="footer" noUnitElement variant="blue" />;
}

export default Footer;
