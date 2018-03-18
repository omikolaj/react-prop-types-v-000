// Code Goes Here

import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
    render(){

    }
}

Order.defaultProprs = {
    cone: true,
    size: 'regular'
}

Order.propTypes = {
    cone: PropTypes.bool,
    size: PropTypes.string,
    scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
    orderInto: PropTypes.shape({
        customerName: PropTypes.string.isRequired,
        orderedAt: PropTypes.number.sRequired
    }).isRequired
};