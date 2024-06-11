'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "react-scroll-to-top";
import { useTranslations } from 'next-intl';
import { motion, useScroll } from "framer-motion"




const ClientComponent = () => {
  const t = useTranslations('IndexPage');
  useEffect(() => {
    AOS.init();
  }, []);
  const {scrollYProgress}=useScroll()
  return (

<>


    <section className='flex px-4 md:pt-10 pt-2 items-center gap-12 container mx-auto text-white h-[50vh]  '>
      <div className='pt-10 w-full h-full flex justify-center items-center flex-col text-center  '  data-aos="fade-down">
       <div className='opacity-100'>
 
    <h1 className='font-heading mb-6 mt-6'>{t('title')}</h1>
    
    <div className='flex items-center justify-center'>
      <div className='w-12 h-0.5 bg-white mt-4' >

      </div>
      <h2 className='font-bold md:font-normal md:text-xl text-md  mb-6 mx-1'>{t('description')} </h2>
      <div className='w-12 h-0.5 bg-white mt-4' >

</div>
      
     
    </div>
   
  </div>

      </div>

      <ScrollToTop smooth className='flex justify-center items-center 'color='#b48a3c'/>
    </section>

</>

  );
};

export default ClientComponent;