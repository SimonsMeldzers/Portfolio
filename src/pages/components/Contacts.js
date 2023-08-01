import React, { useRef, useState } from 'react'

import { TextField, TextareaAutosize, Typography } from '@mui/material';

import emailjs from '@emailjs/browser';
import MailCanvas from './canvas/Mail';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function Contacts() {
  const { t } = useTranslation()

  const [isHovered, setIsHovered] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rudh4kl', 'template_2z4jm29', form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contacts' id='contacts'>
      <div className="c-container">

        <div className="c-text-container">
          <Typography onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="c-sub-title" component='a' href="#contacts">
              {t("c-sub-title")}
              <span style={isHovered ? {display: "flex", marginLeft: "5px"} : {display: "none"}}>#</span>
           </Typography>
          <Typography className='c-title' variant='h3' component="h2"> {t("c-title")} </Typography>
          <Typography className='c-text'> {t("c-text")} </Typography>
        </div>
        <div className="c-form-container">
          <form className="c-form" ref={form} onSubmit={sendEmail}>
          <Typography className='c-form-title'> {t("c-email")} </Typography>
            <TextField autoComplete='off' required type='email' className='c-form-email'/> 
            <Typography className='c-form-title'> {t("c-area")} </Typography>
            <TextareaAutosize required className='c-form-message' /> 
            <button className="c-button" type='submit'>
              <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
              </span>
              <span className="button-text">{t("c-button")}</span>
            </button>
          </form>
          <div className="c-3d">
            <MailCanvas />
          </div>
        </div>

      </div>
    </div>
  )
}

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

export default Contacts;