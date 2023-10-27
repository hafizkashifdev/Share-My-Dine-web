import React from 'react'
import ApplicationForm from './application-form/application-form'
import HeroSectionReusable from '../hero-section-reusable/hero-section-reuseable'
import gif from '../../assets/images/work/3.png'
import WorkBanner from './work-banner/work-banner'
import { Box } from '@mui/material'

function WorkComponent() {
  const paraMessage = `With the current unemployment rate at 3.7% and 
    household debt levels at £1,831.9 billion, Share My Dine 
    offers opportunities for individuals to start 
    their own home-based business in the food industry, creating 
    economic value and reducing unemployment rates. `
  return (
    <>
      <HeroSectionReusable
        heading={"What does it take to be our most loved host? <span class='primary-color' >Apply</span> and find out!"}
        gifTitle={"Work with Us"}
        gifImage={gif}
        para={paraMessage}
      />
      <ApplicationForm />
      <Box sx={{ marginTop: '150px', marginBottom: '150px' }}>
        <WorkBanner />
      </Box>
    </>
  )
}

export default WorkComponent