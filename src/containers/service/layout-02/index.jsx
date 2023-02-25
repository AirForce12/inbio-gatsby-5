import React from "react";
import PropTypes from "prop-types";
import ServiceCard from "@components/service-card/layout-02";
import { ItemType } from "@utils/types";

const ServiceArea = ({ data }) => {
    return (
        <div className="row mt--50">
            <div className="col-12 text-center">
                {data?.title && (
                    <h6 className="title color-lightn mb--30">{data.title}</h6>
                )}
            </div>
            {data?.items?.map((item) => (
                <div className="col-lg-6 mb_sm--30 mb_md--30" key={item.id}>
                    <ServiceCard
                        title={item.title}
                        desc={item.description}
                        icon={item.icon}
                    />
                </div>
            ))}
        </div>
    );
};

ServiceArea.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ServiceArea;
