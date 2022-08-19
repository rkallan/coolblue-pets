import styles from "./resources/styles/icons.module.scss";
import { ReactComponent as Check } from "./resources/svg/check.svg";
import { ReactComponent as Close } from "./resources/svg/close.svg";
import { ReactComponent as Alert } from "./resources/svg/alert.svg";
import { ReactComponent as ArrowDown } from "./resources/svg/arrow-down.svg";
import { ReactComponent as ArrowLeft } from "./resources/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "./resources/svg/arrow-right.svg";
import { ReactComponent as ArrowUp } from "./resources/svg/arrow-up.svg";
import { ReactComponent as Chat } from "./resources/svg/chat.svg";
import { ReactComponent as Circle } from "./resources/svg/circle.svg";
import { ReactComponent as Clock } from "./resources/svg/clock.svg";
import { ReactComponent as Confirm } from "./resources/svg/confirm.svg";
import { ReactComponent as Email } from "./resources/svg/email.svg";
import { ReactComponent as Help } from "./resources/svg/help.svg";
import { ReactComponent as Hint } from "./resources/svg/hint.svg";
import { ReactComponent as Home } from "./resources/svg/home.svg";
import { ReactComponent as Loading } from "./resources/svg/loading.svg";
import { ReactComponent as Logout } from "./resources/svg/logout.svg";
import { ReactComponent as Password } from "./resources/svg/password.svg";
import { ReactComponent as Phone } from "./resources/svg/phone.svg";
import { ReactComponent as Search } from "./resources/svg/search.svg";
import { ReactComponent as Submit } from "./resources/svg/submit.svg";
import { ReactComponent as Trash } from "./resources/svg/trash.svg";
import { ReactComponent as User } from "./resources/svg/user.svg";
import { ReactComponent as SendEmail } from "./resources/svg/send-email.svg";
import { ReactComponent as SendIMMessage } from "./resources/svg/send-message.svg";

const icons = {
    check: (props) => <Check className={styles.icon} {...props} />,
    close: (props) => <Close className={styles.icon} {...props} />,
    alert: (props) => <Alert className={styles.icon} {...props} />,
    arrowDown: (props) => <ArrowDown className={styles.icon} {...props} />,
    arrowLeft: (props) => <ArrowLeft className={styles.icon} {...props} />,
    arrowRight: (props) => <ArrowRight className={styles.icon} {...props} />,
    arrowUp: (props) => <ArrowUp className={styles.icon} {...props} />,
    chat: (props) => <Chat className={styles.icon} {...props} />,
    circle: (props) => <Circle className={styles.icon} {...props} />,
    clock: (props) => <Clock className={styles.icon} {...props} />,
    confirm: (props) => <Confirm className={styles.icon} {...props} />,
    email: (props) => <Email className={styles.icon} {...props} />,
    help: (props) => <Help className={styles.icon} {...props} />,
    hint: (props) => <Hint className={styles.icon} {...props} />,
    home: (props) => <Home className={styles.icon} {...props} />,
    loading: (props) => <Loading className={styles.icon} {...props} />,
    logout: (props) => <Logout className={styles.icon} {...props} />,
    password: (props) => <Password className={styles.icon} {...props} />,
    phone: (props) => <Phone className={styles.icon} {...props} />,
    search: (props) => <Search className={styles.icon} {...props} />,
    submit: (props) => <Submit className={styles.icon} {...props} />,
    trash: (props) => <Trash className={styles.icon} {...props} />,
    user: (props) => <User className={styles.icon} {...props} />,
    sendEmail: (props) => <SendEmail className={styles.icon} {...props} />,
    sendIMMessage: (props) => <SendIMMessage className={styles.icon} {...props} />,
    fallback: (props) => <SendIMMessage className={styles.icon} {...props} />,
};

export default icons;
