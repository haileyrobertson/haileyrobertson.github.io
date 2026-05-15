import React from "react"
import AboutContainer from "./about/about-container" 
import Landing from "../about/landing/landing-container" 
import { GutterLeft, GutterRight } from "../about/gutter/gutter" 

import "./about.css"

const AboutLayout = () => ( 
  <>
    <Landing />
    <div className="about__layout">
      <GutterLeft />
      <div className="about__inner">
        <AboutContainer /> 
      </div>
      <GutterRight />
    </div>
  </>
)

export default AboutLayout