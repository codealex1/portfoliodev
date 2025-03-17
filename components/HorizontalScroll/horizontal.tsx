
"use client";
import React, { useRef } from 'react'
import './horizontal.css';
import Section1 from '../Section/SectionScroll';
import Section2 from '../Section/SectionScroll2';
import Section3 from '../Section/SectionScroll3';
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
                <Section1/>
              </div>
              <div className='sectionItem'>
               <Section2/>
              </div> 
              <div className='sectionItem'>
                <Section3/>
              </div> 
              
          </motion.div>
            
        </div>

    </div>
  )
}

export default HorizontalScroll