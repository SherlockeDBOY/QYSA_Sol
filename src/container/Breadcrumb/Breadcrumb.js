import PropTypes from "prop-types";
import React from 'react';

const Breadcrumb = ({title, image, position, size}) => {
    const publicUrl = process.env.PUBLIC_URL;
    return (
        <div className="page-title-section section section-padding-top overlay-two" style={{backgroundImage: `url(${publicUrl}/${image})`, backgroundPosition: `${position}`, backgroundSize: `${size}`}}>
            <div className="page-title">
                <div className="container">
                    <h1 className="title">{title}</h1>
                </div>
            </div>
        </div>
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string,
    position: PropTypes.string,
    size: PropTypes.string,
    content: PropTypes.string,
    contentTwo: PropTypes.string,
    image: PropTypes.string
};

export default Breadcrumb;
