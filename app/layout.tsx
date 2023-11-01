import './globals.css';
import { Inter, Poppins } from 'next/font/google'
import type { Metadata } from 'next';
import { Footer, Navbar, ScrollToTopButton } from '@/components';
import Provider from '@/components/Provider';
import { AOSInit } from '@/utils/aos';


export const metadata: Metadata = {
  title: 'Vasco Saraiva - Web Developer Portfolio',
  description: 'Welcome to my portfolio. I am a web developer based in Portugal with experience both in frontend and backend development.',
}

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "600"],
  variable: "--font-poppins",
})



const RootLayout = ({ children }: { children: React.ReactNode }) => {

  
  return (
    <html lang="en" suppressHydrationWarning={true} style={{scrollBehavior:'smooth'}}>
      <body className={`${poppins.variable} ${inter.variable} relative bg-main-100`}>
        <Provider>
          <AOSInit />
          <Navbar />
          {children}
          <Footer />
          <ScrollToTopButton />
        </Provider>
      </body>
    </html>
  );

}

export default RootLayout;