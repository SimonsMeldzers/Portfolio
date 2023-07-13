import React from 'react'

import { Button, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';

import LinkedIn from '@/img/icons/linkedin-dark.png';
import GitHub from '@/img/icons/github-dark.png';
import Waves from '@/img/waves.svg';
import Link from 'next/link';

import LaptopCanvas from './canvas/Laptop';

function Banner() {
  return (
    <div className='banner'>
        <div className="b-container">
            <div className="b-sub-container">
                <Typography className='b-intro'>
                    Hi, I&apos;m Simon, a freelance
                </Typography>
                <Typography className='b-title' variant='h1' >
                    Full Stack developer & UI/UX <br/> designer
                </Typography>
                <Button className='b-button' variant='contained'> <span> Get in touch </span> <EastIcon sx={{ml: 1}}/> </Button>
                
                <div className='b-socials-container'>
                    <Typography className='b-socials-text'> Reach out on my socials. </Typography>
                    <div className="b-socials-links">
                        <Link href='https://www.linkedin.com/in/simons-meldzers-230158283/'>
                            <Image
                            className='b-linkedin'
                                src={LinkedIn}
                                alt='LinkedIn'
                            />
                        </Link>
                        <Link href='https://github.com/SimonsMeldzers'>
                            <Image
                            className='b-github'
                                src={GitHub}
                                alt='GitHub'
                            />
                        </Link>
                    </div>
                </div>
            </div>         
                <div className='b-3d-container'>
                    <LaptopCanvas />
                </div>
        </div>
    </div>
  )
}

export default Banner;