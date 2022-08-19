import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Loading from "@coolblue/ui-library/Loading";
import { ucFirst } from "@coolblue/js-helpers";
import styles from "./resources/styles/checkbox.module.scss";

const Icons = loadable(() => import(/* webpackChunkName: "Icons" */ "@coolblue/ui-library/Icons"), {
    fallback: <Loading />,
});

function Checkbox({ id, title, name, value, defaultValue, disabled, readOnly, clearValue, updateValue }) {
    const [isChecked, setIsChecked] = useState(() => value);

    useEffect(() => {
        if (clearValue) setIsChecked(defaultValue);
    }, [clearValue, defaultValue]);

    useEffect(() => {
        if (updateValue) setIsChecked(value);
    }, [updateValue, value]);

    return (
        <div className={styles.container}>
            <input
                id={`${name}-${id}`}
                className={styles.input}
                name={name}
                type="checkbox"
                defaultChecked={isChecked}
                disabled={disabled}
                readOnly={readOnly}
            />
            <label className={styles.label} htmlFor={`${name}-${id}`}>
                <div className={styles.checkbox}>
                    <Icons icon="check" variant="full-width" />
                </div>
                {!!title && <div className={styles.text}>{ucFirst(title)}</div>}
            </label>
        </div>
    );
}

Checkbox.defaultProps = {
    value: false,
    defaultValue: false,
    disabled: false,
    readOnly: false,
    clearValue: false,
    updateValue: false,
};

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    defaultValue: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    clearValue: PropTypes.bool,
    updateValue: PropTypes.bool,
};

export default Checkbox;
