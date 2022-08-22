import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";
import data from "./resources/data";
import styles from "./resources/styles/petsHero.module.scss";

const NavigationLink = loadable(() => import(/* webpackChunkName: "NavigationLink" */ "@coolblue/ui-library/NavigationLink"), {
    fallback: <Loading />,
});

const Hero = loadable(() => import(/* webpackChunkName: "Hero" */ "@coolblue/ui-library/Hero"), {
    fallback: <Loading />,
});

const Button = loadable(() => import(/* webpackChunkName: "Button" */ "@coolblue/ui-library/FormElements/Button"), {
    fallback: <Loading />,
});

function PetsHero() {
    const { url, image, imageSource, title, text, button } = data;
    return (
        <div className={styles.container}>
            <NavigationLink className={styles.link} to={url}>
                <Hero image={image} imageSource={imageSource}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>
                    <div className={styles.button}>
                        <Button variant="small white">{button}</Button>
                    </div>
                </Hero>
            </NavigationLink>
        </div>
    );
}

export default PetsHero;
