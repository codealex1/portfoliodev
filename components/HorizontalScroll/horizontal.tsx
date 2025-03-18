
"use client";
import React, { useRef } from 'react'
import './horizontal.css';
import Accueil from '../Section/Accueil';
import About from '../Section/About';
import Project from '../Section/Project';
import {motion , useScroll , useTransform} from 'framer-motion';

import './horizontal.css';

const HorizontalScroll = () => {

  const  targetRef = useRef(null);
  const {scrollYProgress} = useScroll({target : targetRef});
  const  x = useTransform(scrollYProgress , [0,1] , ['0%' , '-67%']);

  return (
    <div className='carousel' ref={targetRef}>
        <div className='contentContainer'>
          <motion.div className='sections' style={{x}}>
              <div className='sectionItem'>
                <Accueil/>
              </div>
              <div className='sectionItem'>
               <About/>
              </div> 
              <div className='sectionItem'>
                <Project/>
              </div> 
              
          </motion.div>
            
        </div>

    </div>
  )
}

export default HorizontalScroll