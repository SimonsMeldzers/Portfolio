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

import smIvona from '@/img/sites/ivona/sm.png'
import mdIvona from '@/img/sites/ivona/md.png'
import xlIvona from '@/img/sites/ivona/xl.png'

import linkIcon from '@/img/icons/link.png'

import Image from 'next/image';
import Link from 'next/link';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


export default function Projects() {
  const { t } = useTranslation()

  return (
    <div className="projects" id='projects'>
        <div className="p-container">
            <ProjectsItem 
                title={t("p-realtor")}
                text={t("p-realtor-text")}
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
                title={t("p-gift")}
                text={t("p-gift-text")}
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
                title={t("p-wood")}
                text={t("p-wood-text")}
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
                title={t("p-car")}
                text={t("p-car-text")}
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