import PropTypes from "prop-types";
import React from 'react';

const ContactInfoItem = ({data}) => {
    return (
        <div className="contact-info">
            <div className="info text-center mx-auto">
                <h4 className="title">{data.title}</h4>
                <span className="info-text" dangerouslySetInnerHTML={{__html: data.info}}/>
            </div>
        </div>
    )
}

ContactInfoItem.propTypes = {
    data: PropTypes.object
};

export default ContactInfoItem;
