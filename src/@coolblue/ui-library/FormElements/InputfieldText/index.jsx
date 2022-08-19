import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import loadable from "@loadable/component";
import { getType, isElementValid, validations, clearEmptyCharsOnBothEnds } from "@coolblue/js-helpers";
import Loading from "@coolblue/ui-library/Loading";
import styles from "./resources/styles/inputfieldText.module.scss";

const Icons = loadable(() => import(/* webpackChunkName: "Icons" */ "@coolblue/ui-library/Icons"), {
    fallback: <Loading />,
});

function InputfieldText({
    id,
    title,
    name,
    defaultValue,
    type,
    readOnly,
    disabled,
    required,
    validationTypes,
    autoComplete,
    max,
    min,
    step,
    clearValue,
    customOnChangeHandler,
}) {
    const [inputValue, setInputValue] = useState(() => defaultValue);
    const [containerVariant, setContainerVariant] = useState(() => undefined);
    const [containerState, setContainerState] = useState(() => (required ? "isEmpty" : "isValid"));
    const [iconValidated, setIconValidated] = useState(() => undefined);
    // const [icon, setIcon] = useState((): string | undefined => undefined);
    const [inputState, setInputState] = useState(() => (required ? "isEmpty" : "isValid"));
    const [titleVariant, setTitleVariant] = useState(() => (defaultValue ? "legend" : "placeholder"));
    const [inputId] = useState(() => `${name}-${id}`);

    const getValue = ({ value, valueAsNumber }) => {
        if ([NaN, Infinity].includes(valueAsNumber)) return clearEmptyCharsOnBothEnds(value);

        return valueAsNumber;
    };

    const getElementState = ({ value }) => {
        const valueIsEmpty = validations.isEmpty(value);
        if (valueIsEmpty && !required) return "isValid";
        if (valueIsEmpty && required) return "isEmpty";

        const elememtState = isElementValid(validationTypes, value);

        return elememtState;
    };

    const onChangeHandler = (event) => {
        const { value, valueAsNumber } = event.currentTarget;
        const valueCorrected = getValue({ value, valueAsNumber });
        const elementState = getElementState({ value: valueCorrected });

        setInputValue(value);
        setInputState(elementState);
        if (customOnChangeHandler && getType(customOnChangeHandler) === "function") customOnChangeHandler(valueCorrected);
    };

    const onFocusHandler = () => {
        setTitleVariant("legend focussed");
        setContainerState("isFocussed");

        setIconValidated(() => undefined);
    };

    const onBlurHandler = (event) => {
        const { value, valueAsNumber } = event.currentTarget;
        const valueCorrected = getValue({ value, valueAsNumber });

        setInputValue(() => 1);
        setTimeout(() => {
            setInputValue(() => valueCorrected);
        }, 1);

        const variant = valueCorrected || valueCorrected === 0 ? "legend" : "placeholder";
        const elementState = getElementState({ value: valueCorrected });

        setTitleVariant(variant);
        setContainerState(elementState);

        if (required) {
            setIconValidated(() => (elementState === "isValid" ? "check" : "alert"));
        }
    };

    useEffect(() => {
        let ignore = false;
        const variantValue = [disabled ? "disabled" : undefined, readOnly ? "read-only" : undefined].join(" ").trim() || undefined;

        if (!ignore) setContainerVariant(variantValue);

        return () => {
            ignore = true;
        };
    }, [disabled, readOnly]);

    useEffect(() => {
        let ignore = false;
        if (clearValue && !ignore) setInputValue(defaultValue || "");

        return () => {
            ignore = true;
        };
    }, [clearValue, defaultValue]);

    return (
        <section className={styles.container} state={type === "hidden" ? "hidden" : undefined}>
            <article className={styles.label} variant={titleVariant}>
                <label htmlFor={inputId} className={styles.title}>
                    {title}
                </label>
            </article>
            <fieldset className={styles.fieldset} variant={containerVariant} state={containerState}>
                <legend className={styles.title} variant={titleVariant}>
                    {title}
                </legend>
                <div className={styles.inputContainer}>
                    <input
                        id={inputId}
                        className={styles.input}
                        name={name}
                        type={type}
                        value={inputValue}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        autoComplete={autoComplete}
                        min={type === "number" ? min : undefined}
                        max={type === "number" ? max : undefined}
                        step={type === "number" ? step || 1 : undefined}
                        onChange={onChangeHandler}
                        onFocus={onFocusHandler}
                        onBlur={onBlurHandler}
                        data-required={required || undefined}
                        data-validation-types={getType(validationTypes) === "object" ? JSON.stringify(validationTypes) : undefined}
                        state={inputState}
                    />
                </div>
            </fieldset>
            <div className={styles.iconValidated} state={[iconValidated ? "visible" : "hidden", containerState].join(" ")}>
                {!!iconValidated && (
                    <>
                        <Icons icon={iconValidated} svgProps={undefined} noContainer={undefined} variant="normal" />
                        <span className={styles.text}>{iconValidated === "isValid" ? "correct" : "errror"}</span>
                    </>
                )}
            </div>
        </section>
    );
}

InputfieldText.defaultProps = {
    defaultValue: "",
    type: "text",
    readOnly: false,
    disabled: false,
    required: false,
    validationTypes: undefined,
    autoComplete: "off",
    max: undefined,
    min: undefined,
    step: 1,
    clearValue: false,
    customOnChangeHandler: undefined,
};

InputfieldText.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    type: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    validationTypes: PropTypes.shape({}),
    autoComplete: PropTypes.oneOf(["on", "off"]),
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    clearValue: PropTypes.bool,
    customOnChangeHandler: PropTypes.func,
};

export default InputfieldText;
