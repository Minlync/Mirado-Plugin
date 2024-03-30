import React from 'react';
import CompanionWindow from 'mirador/dist/es/src/containers/CompanionWindow';
import PropTypes from 'prop-types';

export default function CustomSidePanel(props) {
    const { id, windowId, title } = props;

    return (
        <CompanionWindow
            title={ title }
            windowId={ windowId }
            id={ id }
        >
            <h1>Story Behind this patinting</h1>
            <p>Artist:Vincent Van Gogh</p>
            <p>Date:1888 </p>
            <p>Medium:Oil On Canvas </p>
            <p>Vincent Van Gogh’s Self-Portrait Dedicated to Paul Gauguin, painted in 1888, depicts the artist with a monastic severity. 
                The portrait measures 24 x 19-11/16 inches and is oil on canvas. 
                Van Gogh chose to represent himself with pale, ghostly features. 
                The painting was created during his time in Arles as he sought to establish an artistic community. </p>
        </CompanionWindow>
    )
}

// Declares prop to be a specific type:
CustomSidePanel.propTypes = {
    title: PropTypes.string,
  };
// Specifies the default values for props:
CustomSidePanel.defaultProps = {
    title: 'change',
};
