import React from 'react'

import { Button, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';

import LinkedIn from '@/img/icons/linkedin-dark.png';
import GitHub from '@/img/icons/github-dark.png';
import Link from 'next/link';

import LaptopCanvas from './canvas/Laptop';

function Banner() {

    const handleClick = () => {
        const targetElement = document.getElementById('contacts');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      };

  return (
    <div className='banner'>
        <div className="b-container">
            <div className="b-sub-container">
                <Typography className='b-intro'>
                    Hi, I&apos;m Simon, a freelance
                </Typography>
                <Typography className='b-title' variant='h1' >
                    Full Stack developer & UI/UX designer
                </Typography>
                <Button onClick={handleClick} className='b-button' variant='contained'> <span> Get in touch </span> <EastIcon sx={{ml: 1, color: "#F9F9F9", fontSize: 16}}/> </Button>
                
                <div className='b-socials-container'>
                    <div className="b-socials-links">
                        <a target="_blank" href='https://www.linkedin.com/in/simons-meldzers-230158283/'>
                            <Image
                            className='b-linkedin'
                                src={LinkedIn}
                                alt='LinkedIn'
                            />
                        </a>
                        <a target="_blank" href='https://github.com/SimonsMeldzers'>
                            <Image
                            className='b-github'
                                src={GitHub}
                                alt='GitHub'
                            />
                        </a>
                    </div>
                </div>
            </div>         
            <div className='b-3d-container'>
                <span className='b-shadow'></span>
                <LaptopCanvas/>
            </div>

        </div>
    </div>
  )
}

export default Banner;