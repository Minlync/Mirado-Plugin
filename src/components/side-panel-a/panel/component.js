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
            <h1>This is a work in progress</h1>
            <p>°˖✧◝(⁰▿⁰)◜✧˖°</p>
            <p>What does this panel look like with more text?</p>
            <p>It seemed like it should have been so simple. 
                There was nothing inherently difficult with getting the project done. 
                It was simple and straightforward enough that even a child should have been able to complete it on time, 
                but that wasn't the case. The deadline had arrived and the project remained unfinished.</p>
        </CompanionWindow>
    )
}

// Declares prop to be a specific type:
CustomSidePanel.propTypes = {
    title: PropTypes.string,
  };
// Specifies the default values for props:
CustomSidePanel.defaultProps = {
    title: 'Unnamed Panel Title',
};
