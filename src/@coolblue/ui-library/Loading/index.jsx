import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./resources/styles/loading.module.scss";

function Loading({ delay, text, minHeight, textColor }) {
    const [showLoadingIndicator, setLoadingIndicatorVisibility] = useState(false);
    const [totalDots] = useState(() => 5);
    const [animationDuration] = useState(() => totalDots * 0.15);
    const [variant] = useState(() => [minHeight && "min-height", textColor && `color-${textColor}`]);

    useEffect(() => {
        const timer = setTimeout(() => setLoadingIndicatorVisibility(true), delay);

        return () => {
            clearTimeout(timer);
        };
    });

    if (showLoadingIndicator)
        return (
            <div className={styles.container} variant={variant.join(" ")}>
                <span className={styles.text}>{text}</span>

                {Array.from({ length: totalDots }, (_, index) => {
                    const key = index;
                    const style = { animationDelay: `${0.15 * index}s`, animationDuration: `${animationDuration}s` };
                    return <span key={key} className={styles.dots} style={style} />;
                })}
            </div>
        );

    return null;
}

Loading.defaultProps = {
    delay: 100,
    text: "Loading",
    minHeight: true,
    textColor: "bowk",
};

Loading.propTypes = {
    delay: PropTypes.number,
    text: PropTypes.string,
    minHeight: PropTypes.bool,
    textColor: PropTypes.string,
};

export default Loading;
