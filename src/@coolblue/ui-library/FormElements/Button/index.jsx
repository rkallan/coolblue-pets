import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Loading from "@coolblue/ui-library/Loading";
import styles from "./resources/styles/button.module.scss";

const Icons = loadable(() => import(/* webpackChunkName: "Icons" */ "@coolblue/ui-library/Icons"), {
    fallback: <Loading />,
});

function Button({ children, type, disabled }) {
    const onClickHandlerButton = (event) => {
        if (disabled) return;
        const { currentTarget } = event || {};

        currentTarget.blur();
    };

    return (
        <button className={styles.container} type={type} disabled={disabled} onClick={onClickHandlerButton}>
            <div className={styles.unit} variant="loading">
                <Icons icon="check" variant="small" svgProps={undefined} noContainer={undefined} />
                <span>Loading</span>
            </div>
            <div className={styles.unit}>{children}</div>
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
