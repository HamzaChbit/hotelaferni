"use client"
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import {  BsTelephoneOutbound } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';



const Footer = () => {
  const t = useTranslations('Footer');
  const locale = useLocale()
  return (
    <footer className='mt-16 '>
      <div className='container mx-auto px-4'>
        <Link href='/' className='font-black text-tertiary-dark' title='Home'>
          Hotel Aferni
        </Link>

        <h3 className='font-semibold text-[40px] py-6'>Contact</h3>

        <div className='flex flex-wrap gap-16 items-center justify-between'>
          <div className='flex-1'>
            <p> AV. General Kettani, Agadir, Morocco </p>
      
            <div className='flex items-center'>
              <BsTelephoneOutbound />
              <p className='ml-2'>+212 5 28 84 07 30</p>
            </div>
       
          </div>

          <div className='flex-1 md:text-right'>
        
            <Link href={`/${locale}/contact`} className='pb-4 hover:text-black' title='CONTACT'>{t("getintouch")}</Link>
            <p className='pb-4'>{t("privacy")}</p>
     
          </div>

          <div className='flex-1 md:text-right'>
          <p className='pb-4'>{t("service")}</p>
            <p>{t("customer")}</p>
          </div>
        </div>
      </div>

     
      <div className="mt-1 py-3 border-t bg-tertiary-dark border-gray-100 pt-2">
    <div className="flex justify-center items-center gap-14">
        <p className="text-xs text-white">{t("copyright")}</p>
        <Link href="https://www.linkedin.com/in/hamza-1dz4/" title="Visit Hamza's LinkedIn Profile" target="_blank" className="flex justify-start ">
            <FaLinkedin size={20} className=' border-0' />
        </Link>
    </div>
</div>
    </footer>
         
  );
};

export default Footer;