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

    const ContainerChild = () => {
        if (noUnitElement) return children;

        return <UnitElementTag className={unitClassName}>{children}</UnitElementTag>;
    };

    return (
        <ContainerElementTag className={containerClassName} variant={containerVariant}>
            <ContainerChild />
        </ContainerElementTag>
    );
}

Container.defaultProps = {
    children: undefined,
    variant: "white",
    textColor: "default",
    fullWidth: false,
    containerElementTag: "div",
    classNameContainer: undefined,
    noUnitElement: false,
    unitElementTag: "div",
    classNameUnit: undefined,
};

Container.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(["white", "red", "blue", "yellow", "black", "transparent"]),
    textColor: PropTypes.string,
    fullWidth: PropTypes.bool,
    containerElementTag: PropTypes.oneOf(["article", "div", "section", "header", "footer", "main"]),
    classNameContainer: PropTypes.string,
    noUnitElement: PropTypes.bool,
    unitElementTag: PropTypes.oneOf(["article", "div", "section", "header", "footer", "main"]),
    classNameUnit: PropTypes.string,
};

export default Container;
