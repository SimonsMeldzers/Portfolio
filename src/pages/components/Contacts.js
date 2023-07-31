import React, { useRef, useState } from 'react'

import { FormControl, Input, InputLabel, TextField, TextareaAutosize, Typography } from '@mui/material';

import emailjs from '@emailjs/browser';

  

function Contacts() {
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
    <div className='contacts' id='scrollTo'>
      <div className="c-container">

        <div className="c-text-container">
          <Typography onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="c-sub-title" component='a' href="#contacts">
              Contacts
              <span style={isHovered ? {display: "flex", marginLeft: "5px"} : {display: "none"}}>#</span>
           </Typography>
          <Typography className='c-title' variant='h3' component="h2"> Get in touch </Typography>
          <Typography className='c-text'> Make a request for your own personalized website or a collaboration offer. </Typography>
        </div>
        <div className="c-form-container">
          <form className="c-form" ref={form} onSubmit={sendEmail}>
          <Typography className='c-form-title'> Email </Typography>
            <TextField autoComplete='off' required type='email' className='c-form-email'/> 
            <Typography className='c-form-title'> How can I help? </Typography>
            <TextareaAutosize required className='c-form-message' /> 
            <button className="c-button" type='submit'>
              <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
              </span>
              <span className="button-text">Submit form</span>
            </button>
          </form>
          <div className="c-3d">

          </div>
        </div>

      </div>
    </div>
  )
}

export default Contacts;