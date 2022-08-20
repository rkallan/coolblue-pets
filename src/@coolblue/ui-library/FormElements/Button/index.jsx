import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Loading from "@coolblue/ui-library/Loading";
import { getType } from "@coolblue/js-helpers";
import styles from "./resources/styles/button.module.scss";

const Icons = loadable(() => import(/* webpackChunkName: "Icons" */ "@coolblue/ui-library/Icons"), {
    fallback: <Loading />,
});

function Button({ children, type, disabled, customOnClickHandler, variant }) {
    const onClickHandlerButton = (event) => {
        if (disabled) return;

        const { currentTarget } = event || {};

        currentTarget.blur();

        if (getType(customOnClickHandler) === "function") customOnClickHandler(event);
    };

    return (
        <button className={styles.container} type={type} disabled={disabled} onClick={onClickHandlerButton} variant={variant}>
            <div className={styles.unit} variant="content">
                {children}
            </div>
            <div className={styles.unit} variant="icon">
                <Icons icon="arrowRight" variant="small" />
            </div>
        </button>
    );
}

Button.defaultProps = {
    type: "button",
    disabled: false,
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    disabled: PropTypes.bool,
};

export default Button;
