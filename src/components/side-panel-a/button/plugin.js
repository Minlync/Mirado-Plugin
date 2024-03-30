import React from 'react';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const CustomButton = () => (
  <span id="custom-side-panel-a-button"> <AutoStoriesIcon /> </span>
);
CustomButton.value = 'CustomKey1';

export default {
  target: 'WindowSideBarButtons',
  mode: 'add',
  component: CustomButton,
};