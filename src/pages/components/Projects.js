import { Typography } from '@mui/material';
import React from 'react';

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

import Image from 'next/image';

export default function Projects() {
  return (
    <div className="projects">
        <div className="p-container">
            <ProjectsItem 
                title="Realtors’ website"
                text="This website was designed for a local realtor company that offers it’s 
                clients a large variety of real estate. The website needed to be modern, responsive, 
                and fast, to ensure great user experience, resulting in increased chance of a client."
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
        </div>
    </div>
  )
};


const ProjectsItem = ({title, text, skills, sites}) => {

    return(
        <div className="p-item">
            <Typography className='p-title' variant='h3' component='h2'>
                {title}
            </Typography>
            <Typography> 
                {text}
            </Typography>
            <div className="p-skills">
                {skills.map((img, index) => {
                    return <Image className='p-skill' src={img} alt={index} key={index}/>
                })}
            </div>
            <div className="p-collage">
                <div className="p-collage-container">

                    <Image src={sites[2]} className="project-xl" alt="erker-xl"/>
                    <Image src={sites[1]} className="project-md" alt="erker-md"/>
                    <Image src={sites[0]} className="project-sm" alt="erker-sm"/>

                    <span className="p-cicrcle-1"></span>
                    <span className="p-cicrcle-2"></span>

                </div>
            </div>
        </div>
    )
}