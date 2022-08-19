import { useState, useEffect } from "react";
import loadable from "@loadable/component";
import Loading from "@coolblue/ui-library/Loading";
import { ucFirst } from "@coolblue/js-helpers";
import styles from "./resources/styles/inputTypeRadio.module.scss";

const Icons = loadable(() => import(/* webpackChunkName: "MainRoutes" */ "@coolblue/ui-library/Icons"), {
    fallback: <Loading />,
});

function InputTypeRadio({ id, title, name, value, defaultValue, disabled, readOnly, clearValue, updateValue }) {
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
                type="radio"
                defaultChecked={isChecked}
                disabled={disabled}
                readOnly={readOnly}
            />
            <label className={styles.label} htmlFor={`${name}-${id}`}>
                <div className={styles.radio}>
                    <Icons icon="check" svgProps={undefined} noContainer={undefined} variant="full-width" />
                </div>
                {!!title && <div className={styles.text}>{ucFirst(title)}</div>}
            </label>
        </div>
    );
}

export default InputTypeRadio;
