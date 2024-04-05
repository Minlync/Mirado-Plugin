import React from 'react';
import CompanionWindow from 'mirador/dist/es/src/containers/CompanionWindow';
import PropTypes from 'prop-types';
import Selector from '../../Selector';

export default function CustomSidePanel(props) {
    const { id, windowId, title } = props;

    return (
        <CompanionWindow
            title={ title }
            windowId={ windowId }
            id={ id }
        >
            <Selector />
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
