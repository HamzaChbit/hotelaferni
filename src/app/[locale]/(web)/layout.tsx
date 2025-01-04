
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
  title: 'Hotel Aferni',
  description: 'Hotel Aferni offers excellent value for money, with competitive prices and a wide range of amenities. The hotel is strategically located in the heart of Agadir, in the historic and touristy neighborhood of Talborjt. It is surrounded by two large squares, a beautiful pedestrian street leading to the sea.',
  keywords: [
    // English
    "Hotel Aferni",
    "Aferni Hotel",
    "Aferni",
    "Agadir",
    "best hotel",
    "hotel",
    "Hotel",
    "affordable accommodation",
    "vacation destination",
    "Morocco",
    "book now",
    "beachfront hotel",
    "Agadir hotel",
    "holiday experience",
    "travel",
    "explore",
    "discover",
    "family-friendly",
    "activities",
    "entertainment",
    "affordable luxury",
    "comfortable rooms",
    "5-star service",
    "relaxation",
    "hospitality",
    "comfort",
    "leisure",
    "dining options",
    "local attractions",
    "cultural experiences",
    "shopping",
    "nightlife",
    "excursions",
    "tourist spots",
    "memorable stay",
    "oceanfront retreat",
    "spacious suites",
    "modern amenities",
    "friendly staff",
    "business travel",
    "honeymoon destination",
    "destination wedding",
    "romantic getaway",
    "family vacation",
    "summer holiday",
    "winter escape",
    "unforgettable experience",
    // French
    "Hôtel Aferni",
    "Aferni",
    "Agadir",
    "meilleur hôtel",
    "hôtel",
    "Hôtel Aferni Agadir",
    "hébergement abordable",
    "destination de vacances",
    "Maroc",
    "réservez maintenant",
    "hôtel en bord de mer",
    "expérience de vacances",
    "voyage",
    "explorer",
    "découvrir",
    "convivial pour les familles",
    "activités",
    "divertissement",
    "luxe abordable",
    "chambres confortables",
    "service 5 étoiles",
    "détente",
    "hospitalité",
    "confort",
    "loisirs",
    "options de restauration",
    "attractions locales",
    "expériences culturelles",
    "shopping",
    "vie nocturne",
    "excursions",
    "sites touristiques",
    "séjour mémorable",
    "retraite en bord de mer",
    "suites spacieuses",
    "équipements modernes",
    "personnel amical",
    "voyage d'affaires",
    "destination de lune de miel",
    "mariage de destination",
    "escapade romantique",
    "vacances en famille",
    "vacances d'été",
    "évasion hivernale",
    "expérience inoubliable"
  ],
  icons: {
    icon: ['/favicon.ico?v=1'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  authors: [{ name: "Hotel Aferni" }],
  creator: "Hotel Aferni",
  publisher: "Hotel Aferni",
  manifest: '/site.webmanifest',
  metadataBase: new URL("https://hotelaferni.vercel.app/"),
  twitter: {
    card: "summary_large_image"
  },
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
          <meta name="msvalidate.01" content="A42745912D5B69F1E1F1C11B485912B2" />
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