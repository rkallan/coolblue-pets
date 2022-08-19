import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { getType } from "@coolblue/js-helpers";

function NavigationLink({ children, to, onClick, setTabIndex = false, ...props }) {
    const location = useLocation();
    const { pathname, hash, search } = location;
    const resolved = useResolvedPath(to);
    const isActive = !!useMatch({ path: resolved.pathname, end: true });
    const [state, setState] = useState(() => {
        return {
            referer: { pathname, hash, search },
        };
    });

    const onClickHandlerNavLink = (event) => {
        if (isActive) {
            event.preventDefault();
            return;
        }
        event.currentTarget.blur();

        if (onClick && getType(onClick) === "function") onClick(event);
    };

    useEffect(() => {
        const newStateObject = { referer: { pathname, hash, search } };
        setState(() => newStateObject);
    }, [pathname, hash, search]);

    return (
        <NavLink
            onClick={onClickHandlerNavLink}
            to={to}
            state={state}
            {...props}
            variant={isActive ? "is-active" : undefined}
            tabIndex={setTabIndex && isActive ? -1 : 0}
        >
            {children}
        </NavLink>
    );
}

NavigationLink.defaultProps = {
    setTabIndex: false,
    onClick: () => undefined,
};

NavigationLink.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    to: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    setTabIndex: PropTypes.bool,
};

export default NavigationLink;
