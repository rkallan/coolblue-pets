import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";
import styles from "./resources/styles/hero.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@coolblue/ui-library/Container"), {
    fallback: <Loading />,
});

function Hero({ children, image, imageSource }) {
    return (
        <Container classNameContainer={styles.container} containerElementTag="section" noUnitElement fullWidth variant="transparent">
            <figure className={styles.unit} variant="image">
                <picture className={styles.item}>
                    {imageSource?.length &&
                        imageSource.map(({ id, url, size }) => {
                            return <source key={id} srcSet={url} media={`(min-width: ${size}px)`} />;
                        })}
                    <img className={styles.image} src={image} alt="" />
                </picture>
            </figure>
            <section className={styles.unit} variant="content">
                {children}
            </section>
        </Container>
    );
}

export default Hero;
