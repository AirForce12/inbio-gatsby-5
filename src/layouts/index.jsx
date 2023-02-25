import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import ScrollToTop from "@ui/scroll-to-top";
import SEO from "@components/seo";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/css/swiper.css";
import "@assets/scss/style.scss";
import "aos/dist/aos.css";
import Client from "./client";

const Layout = ({ children, color, className, pageTitle }) => {
    return (
        <>
            <SEO
                bodyClass={cn(`template-color-${color} spybody`, className)}
                titleTemplate={pageTitle}
            />
            <Client />
            {children}
            <ScrollToTop />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    pageTitle: PropTypes.string,
};

Layout.defaultProps = {
    color: 1,
};

export default Layout;
