import React from 'react'
import {AboutContactBody} from "@/components/sections/contact-body"
import {AboutContactHeader} from "@/components/sections/contact-header"
import { FaqSection } from '@/components/sections/faq'

const Contact = () => {
  return (
    <>
       <AboutContactHeader/> 
       <AboutContactBody/> 
       <FaqSection/>
    </>
  )
}

export default Contact