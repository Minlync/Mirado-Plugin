import React from 'react';
// import IconButton from '@material-ui/core/IconButton';
import { IconButton } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import Brightness2Icon from '@mui/icons-material/Brightness2';

export default function CustomBranding({ targetProps: { t, variant, ...ContainerProps } }) {
  //i added it to adjust my icon postion inside of the windows frame
  const style = {
    position: 'absolute', 
    top: '320px', 
    left: '12px', 
  };
  return (
    <div {...ContainerProps}style={style}>
      { variant === 'wide' && (
      <div>
        <Typography align="center" component="p" variant="h3">{t('mirador')}</Typography>
      </div>
      )}
      <Typography align="center">
        <IconButton
          component="a"
          href="https://google.com"
          target="_blank"
          rel="noopener"
        >
            <Brightness2Icon />
        </IconButton>
      </Typography>
    </div>
  );
}