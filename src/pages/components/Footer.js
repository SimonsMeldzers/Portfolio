import React from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


function Footer() {
    const { t } = useTranslation()

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
                <Typography> {t("f-copyright")} </Typography>
            </div>
            <div className="f-to-top">
                <IconButton onClick={handleScroll}> <KeyboardDoubleArrowUpIcon /> </IconButton>
            </div>
            <div className="f-designed-by">
                <Typography> {t("f-designed")}
                    <Tooltip title="E-mail: simons.meldzers@gmail.com">
                        <span className='f-designed-by-name'>{t("f-designed-name")}</span>
                    </Tooltip>
                </Typography>
            </div>
        </div>
    </div>
  )
};

export async function getStaticProps(context) {
    // extract the locale identifier from the URL
    const { locale } = context
  
    return {
      props: {
        // pass the translation props to the page component
        ...(await serverSideTranslations(locale)),
      },
    }
  };

export default Footer;