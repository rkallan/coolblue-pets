import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./resources/styles/container.module.scss";

function Container({
    children,
    variant,
    textColor,
    fullWidth,
    containerElementTag,
    classNameContainer,
    noUnitElement,
    unitElementTag,
    classNameUnit,
}) {
    const [containerVariant] = useState(() =>
        `${variant} ${textColor !== "default" ? `text-color-${textColor}` : ""} ${fullWidth ? `full-width` : ""}`.trim()
    );
    const [containerClassName] = useState(() => [styles.container, classNameContainer].join(" "));
    const [unitClassName] = useState(() => [styles.unit, classNameUnit].join(" "));
    const [ContainerElementTag] = useState(() => containerElementTag);
    const [UnitElementTag] = useState(() => unitElementTag);

    if (noUnitElement) {
        return (
            <ContainerElementTag className={containerClassName} variant={containerVariant}>
                {children}
            </ContainerElementTag>
        );
    }

    return (
        <ContainerElementTag className={containerClassName} variant={containerVariant}>
            <UnitElementTag className={unitClassName}>{children}</UnitElementTag>
        </ContainerElementTag>
    );
}

Container.defaultProps = {
    children: undefined,
    variant: "white",
    textColor: "default",
    fullWidth: false,
    containerElementTag: "section",
    classNameContainer: undefined,
    noUnitElement: false,
    unitElementTag: "section",
    classNameUnit: undefined,
};

Container.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.string,
    textColor: PropTypes.string,
    fullWidth: PropTypes.bool,
    containerElementTag: PropTypes.string,
    classNameContainer: PropTypes.string,
    noUnitElement: PropTypes.bool,
    unitElementTag: PropTypes.string,
    classNameUnit: PropTypes.string,
};

export default Container;
