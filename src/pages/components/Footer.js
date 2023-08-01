import React from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function Footer() {
    const handleScroll = () => {
        const targetElement = document.getElementById('banner');
        if (targetElement) {
          // Get the element's current position relative to the viewport
          const elementRect = targetElement.getBoundingClientRect();
      
          // Calculate the target scroll position, adding 20 pixels to the current top position
          const targetScrollPosition = window.scrollY + elementRect.top - 80;
      
          // Scroll to the adjusted position using scrollBy
          window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth',
          });
        }
      };
  return (
    <div className="footer">
        <div className="f-container">
            <div className="f-copyright">
                <Typography> Copyright 2023 © All rights reserved </Typography>
            </div>
            <div className="f-to-top">
                <IconButton onClick={handleScroll}> <KeyboardDoubleArrowUpIcon /> </IconButton>
            </div>
            <div className="f-designed-by">
                <Typography> Designed and developed by 
                    <Tooltip title="E-mail: simons.meldzers@gmail.com">
                        <span className='f-designed-by-name'>Simon Meldzer</span>
                    </Tooltip>
                </Typography>
            </div>
        </div>
    </div>
  )
};

export default Footer;