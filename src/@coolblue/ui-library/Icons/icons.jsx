import styles from "./resources/styles/icons.module.scss";
import { ReactComponent as ArrowRight } from "./resources/svg/arrow-right.svg";
import { ReactComponent as ArrowDown } from "./resources/svg/chevron-down.svg";
import { ReactComponent as Clock } from "./resources/svg/clock.svg";
import { ReactComponent as Confettie } from "./resources/svg/confettie.svg";
import { ReactComponent as Heart } from "./resources/svg/heart.svg";
import { ReactComponent as Home } from "./resources/svg/home.svg";
import { ReactComponent as Menu } from "./resources/svg/menu.svg";
import { ReactComponent as PetIcon } from "./resources/svg/pet-icon.svg";
import { ReactComponent as Pin } from "./resources/svg/pin.svg";
import { ReactComponent as Search } from "./resources/svg/search.svg";

const icons = {
    arrowRight: (props) => <ArrowRight className={styles.icon} {...props} />,
    arrowDown: (props) => <ArrowDown className={styles.icon} {...props} />,
    clock: (props) => <Clock className={styles.icon} {...props} />,
    confettie: (props) => <Confettie className={styles.icon} {...props} />,
    heart: (props) => <Heart className={styles.icon} {...props} />,
    home: (props) => <Home className={styles.icon} {...props} />,
    menu: (props) => <Menu className={styles.icon} {...props} />,
    petIcon: (props) => <PetIcon className={styles.icon} {...props} />,
    pin: (props) => <Pin className={styles.icon} {...props} />,
    search: (props) => <Search className={styles.icon} {...props} />,
    fallback: (props) => <Pin className={styles.icon} {...props} />,
};

export default icons;
