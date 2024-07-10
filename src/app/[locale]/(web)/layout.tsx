
import type { Metadata } from "next";

import "./globals.css";
import { Poppins } from 'next/font/google';

import { ClerkProvider } from "@clerk/nextjs";
import 'aos/dist/aos.css';
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import Toast from "@/components/Tosat/Toast";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {NextIntlClientProvider, useLocale} from 'next-intl';
import { getMessages } from "next-intl/server";


export const metadata: Metadata = {
  title: 'HÔTEL Aferni',
  description: 'Hotel Aferni offers excellent value for money, with competitive prices and a wide range of amenities. The hotel is strategically located in the heart of Agadir, in the historic and touristy neighborhood of Talborjt. It is surrounded by two large squares, a beautiful pedestrian street leading to the sea.',
  keywords: ["Hotel Aferni", "Aferni Hotel", "Aferni", "Agadir", "best hotel", "hotel", "Hotel"],
  icons: {
    icon: ['/favicon.ico?v=1'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  authors: [{ name: "Hotel Aferni" }],
  creator: "Hotel Aferni",
  publisher: "Hotel Aferni",
  openGraph: {
    title: 'Hotel Aferni',
    description: 'Hotel Aferni offers excellent value for money, with competitive prices and a wide range of amenities...',
    url: "https://hotelaferni.vercel.app/",
    siteName: "Hotel Aferni",
    type: "website",
  },
};
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
});
export default  async function  RootLayout({
  children,  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {

  const messages = await getMessages();


  return (  
     <ClerkProvider>
    <html lang={locale} >
    <head>
          <meta property="og:title" content='HÔTEL Aferni' />
          <meta property="og:description" content='Hotel Aferni offers excellent value for money, with competitive prices and a wide range of amenities. The hotel is strategically located in the heart of Agadir, in the historic and touristy neighborhood of Talborjt. It is surrounded by two large squares, a beautiful pedestrian street leading to the sea.' />
          <meta name="google-site-verification" content="EDDMP4ieAceYdfxZQLRcWHVGF2eSANX6v8VPv1YoM1I" />
          <meta name="robots" content="HOTEL, Aferni, Aferni, Hotel Aferni, Hotel Agadir" />
          <meta property="og:url" content={'https://hotelaferni.vercel.app/'} />
        </head>
      <body className={poppins.className}>
      <NextIntlClientProvider messages={messages}>
        
   
      <ThemeProvider>
      <Toast />
  

    <main className='font-normal 

 '>
     
      <Header  params={{
                  locale: locale
                }}/>  

        {children}
        <Footer/>   
       
  
           </main>
     
   
        </ThemeProvider>
        </NextIntlClientProvider>
        </body>
    </html> 
    </ClerkProvider>
  );
}