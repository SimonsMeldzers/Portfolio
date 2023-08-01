import React, { useRef, useState } from "react";

import {
  Collapse,
  IconButton,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import Fade from '@mui/material/Fade';

import emailjs from "@emailjs/browser";
import MailCanvas from "./canvas/Mail";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function Contacts() {
  const { t } = useTranslation();

  const [showPopUp, setShowPopUp] = useState(true);
  const [showPopUpError, setShowPopUpError] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [fromName, setFromName] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const PopUp = () => {
    const [open, setOpen] = useState(true);

    return (
      <Collapse in={open}>
        <Fade in={showPopUp}>
          <Alert
            className="c-alert"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
             {t("c-success")}🎉
          </Alert>
        </Fade>
      </Collapse>
    );
  };
  const PopUpError = () => {
    const [open, setOpen] = useState(true);

    return (
      <Collapse in={open}>
        <Fade in={showPopUpError}>
          <Alert
            severity="error"
            className="c-alert"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {t("c-error")}😕
          </Alert>
        </Fade>
      </Collapse>
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_rudh4kl', 'template_2z4jm29', form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        setShowPopUp(true); // Show the pop-up after successful submission
        setFromName('');    // Clear the form field for from_name
        setMessage('');     // Clear the form field for message
      }, (error) => {
        setShowPopUpError(true);
      });
  };

  return (
    <div className="contacts" id="contacts">
      <div className="c-container">
        <div className="c-text-container">
          <Typography
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="c-sub-title"
            component="a"
            href="#contacts"
          >
            {t("c-sub-title")}
            <span
              style={
                isHovered
                  ? { display: "flex", marginLeft: "5px" }
                  : { display: "none" }
              }
            >
              #
            </span>
          </Typography>
          <Typography className="c-title" variant="h3" component="h2">
            {" "}
            {t("c-title")}{" "}
          </Typography>
          <Typography className="c-text"> {t("c-text")} </Typography>
        </div>
        <div className="c-form-container">
          <form className="c-form" ref={form} onSubmit={sendEmail}>
            <Typography className="c-form-title"> {t("c-email")} </Typography>
            <TextField
              autoComplete="off"
              required
              type="email"
              name="from_name"
              className="c-form-email"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
            />
            <Typography className="c-form-title"> {t("c-area")} </Typography>
            <TextareaAutosize
              required
              name="message"
              className="c-form-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="c-button" type="submit">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">{t("c-button")}</span>
            </button>
            {showPopUp && <PopUp />}
            {showPopUpError && <PopUpError />}
          </form>
          <div className="c-3d">
            <MailCanvas />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default Contacts;
