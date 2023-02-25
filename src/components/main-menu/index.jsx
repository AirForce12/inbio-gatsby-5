import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import cn from "clsx";
import Icon from "@ui/icon";
import { MenuType } from "@utils/types";

const MainMenu = ({ menus, className, navId }) => {
    return (
        <nav
            id={navId}
            className={cn("mainmenu-nav navbar-example2", className)}
        >
            <ul className="primary-menu nav nav-pills">
                {menus.map(({ id, text, path, icon }) => (
                    <li key={id} className="nav-item">
                        <Link
                            activeClass="active"
                            className="nav-link smoth-animation"
                            href={`#${path}`}
                            to={path}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            {icon && <Icon name={icon} />}
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

MainMenu.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.shape(MenuType)).isRequired,
    navId: PropTypes.string,
    className: PropTypes.string,
};

MainMenu.defaultProps = {
    navId: "sideNav",
};

export default MainMenu;
