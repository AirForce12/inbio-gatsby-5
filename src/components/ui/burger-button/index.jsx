import React from "react";
import PropTypes from "prop-types";
import { Menu } from "react-feather";
import cn from "clsx";

const BurgerButton = ({ className, onClick }) => {
    return (
        <button className={cn(className, "hamberger-menu")} onClick={onClick}>
            <Menu size={32} />
        </button>
    );
};

BurgerButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default BurgerButton;
