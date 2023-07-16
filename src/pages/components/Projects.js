import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import reactLogo from '@/img/skills/react.png'
import nextLogo from '@/img/skills/nextjs.png'
import sanityLogo from '@/img/skills/sanity.png'
import muiLogo from '@/img/skills/mui.png'
import i18nLogo from '@/img/skills/i18n.png'
import fbLogo from '@/img/skills/fb.png'
import bootstrapLogo from '@/img/skills/bootstrap.png'
import stripeLogo from '@/img/skills/stripe.png'

import smErker from '@/img/sites/erker/sm.png'
import mdErker from '@/img/sites/erker/md.png'
import xlErker from '@/img/sites/erker/xl.png'

import smBabybox from '@/img/sites/babybox/sm.png'
import mdBabybox from '@/img/sites/babybox/md.png'
import xlBabybox from '@/img/sites/babybox/xl.png'

import smInin from '@/img/sites/inin/sm.png'
import mdInin from '@/img/sites/inin/md.png'
import xlInin from '@/img/sites/inin/xl.png'

import xsIvona from '@/img/sites/ivona/xs.png'
import smIvona from '@/img/sites/ivona/sm.png'
import mdIvona from '@/img/sites/ivona/md.png'
import xlIvona from '@/img/sites/ivona/xl.png'

import linkIcon from '@/img/icons/link.png'

import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="projects">
        <div className="p-container">
            <ProjectsItem 
                title="Realtors’ website"
                text="This website was designed for a local realtor company that offers it’s 
                clients a large variety of real estate. The website needed to be modern, responsive, 
                and fast, to ensure great user experience, resulting in increased chance of a client."
                link="https://erker.vercel.app/"
                skills={
                    [
                        nextLogo,
                        muiLogo,
                        sanityLogo,
                        i18nLogo,
                    ]
                }
                sites={
                    [
                        smErker,
                        mdErker,
                        xlErker,
                    ]
                }
            />
            <ProjectsItem 
                title="Kids’ gift boxes"
                text="“Soft, clean, and simple” were words that had to be in mind when designing this e-commerce website. The overall esthetic had to be neutral yet bright for a potential client to show interest in buying the products.  "
                link="https://baby-box.netlify.app/"
                skills={
                    [
                        nextLogo,
                        muiLogo,
                        sanityLogo,
                        stripeLogo,
                    ]
                }
                sites={
                    [
                        smBabybox,
                        mdBabybox,
                        xlBabybox,
                    ]
                }
            />
            <ProjectsItem 
                title="Custom wooden houses"
                text="Client wanted a very simple, multilingual, informative website. Although the project ended up being rushed, the final product delivered an easy to navigate webpage, with a unique design for the industry."
                link="https://www.ininestate.com/"
                skills={
                    [
                        nextLogo,
                        muiLogo,
                        i18nLogo,
                    ]
                }
                sites={
                    [
                        smInin,
                        mdInin,
                        xlInin,
                    ]
                }
            />
            <ProjectsItem 
                title="A car rental and repair shop"
                text="A platforms that allows it’s users to explore the variety of services this company provides, as well as reserve a specific rental. Meanwhile from the admin’s perspective, website allows to add, edit, delete cars, manage reserved cars, and much more."
                link="https://ivonaplus.netlify.app/"
                skills={
                    [
                        reactLogo,
                        bootstrapLogo,
                        fbLogo,
                    ]
                }
                sites={
                    [
                        smIvona,
                        mdIvona,
                        xlIvona,
                    ]
                }
            />
        </div>
    </div>
  )
};


const ProjectsItem = ({ title, text, skills, sites, link }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(null);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div className="p-item">
        <Link target="_blank" className="p-link" href={link}>
          <Typography
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="p-title"
            variant="h3"
            component="h2"
          >
            {windowWidth && windowWidth <= 900 && (
              <Image src={linkIcon} className="p-link-icon" alt="Link Icon" />
            )}
            { isHovered ? <Image alt="Link Icon" src={linkIcon} className='p-link-icon'/> : null }
            {title}
          </Typography>
        </Link>
        <Typography className='p-text'>{text}</Typography>
        <div className="p-skills">
          {skills.map((img, index) => {
            return <Image className="p-skill" src={img} alt={index} key={index} />;
          })}
        </div>
        <div className="p-collage">
          <div className="p-collage-container">
            <Image href="/" src={sites[2]} className="project-xl" alt="erker-xl" />
            <Image href="/" src={sites[1]} className="project-md" alt="erker-md" />
            <Image href="/" src={sites[0]} className="project-sm" alt="erker-sm" />
            <span className="p-cicrcle-1"></span>
            <span className="p-cicrcle-2"></span>
          </div>
        </div>
      </div>
    );
  };