import React from "react";
import cn from "clsx";
import PropTypes from "prop-types";

const OffcanvasBody = ({ children, className }) => {
    return <div className={cn(className, "content")}>{children}</div>;
};

OffcanvasBody.propTypes = {
    className: PropTypes.node,
    children: PropTypes.node.isRequired,
};

export default OffcanvasBody;
