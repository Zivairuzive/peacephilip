'use client'

import { useState, useContext } from 'react'
import {
  Dialog,
  PopoverGroup,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { pathContext } from '../context'
import { motion, AnimatePresence } from 'motion/react'
import { companyName } from '../data/siteData'


const siteLinks = {
  home: '/',
  services: '/services',
  about: '/about',
  contact:'/contact'

}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const logo_src:string = '/peace_logo.jpg';

type HeaderProps = {
  url:string;
}

// Animation helpers to reduce redundancy
const fadeIn = (delay = 0, y = 0, x = 0, duration = 0.6) => ({
  initial: { opacity: 0, y, x },
  animate: { opacity: 1, y: 0, x: 0 },
  transition: { delay, duration }
});

const scaleIn = (delay = 0, duration = 0.4, scale = 0.8) => ({
  initial: { opacity: 0, scale },
  animate: { opacity: 1, scale: 1 },
  transition: { delay, duration }
});

export default function Header(prop:HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {pathValue} = useContext(pathContext);
  const active = (link:string)=> {return link === pathValue && 'border-b-1 border-sky-900 bg-sky-900 text-white'};
  
  // Prevent open redirect vulnerability by validating internal links
  const safeHref = (href: string) => {
    if (!href.startsWith('/')) return '/';
    return href;
  };

  const navLinks = [
    { href: siteLinks.home, label: "Home", delay: 0.4 },
    { href: siteLinks.services, label: "Services", delay: 0.5 },
    { href: siteLinks.about, label: "About Us", delay: 0.6 },
    { href: siteLinks.contact, label: "Contact Us", delay: 0.7 }
  ];

  return (
    <motion.header 
      className="bg-white shadow-md z-40"
      {...fadeIn(0, -100, 0, 0.6)}
      transition={{ ...fadeIn().transition, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-2 px-3 sm:px-20 z-40" aria-label="Global">
        <motion.div 
          className="flex lg:flex-1" 
          {...fadeIn(0.2, 0, -50)}
        >
          <Link href={safeHref(siteLinks.home)} className="-m-1.5 p-1.5 group">
            <span className="sr-only text-xs">{companyName}</span>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Image className="h-20 w-auto" src= {logo_src}
                width={700} height={500} alt="" />
            </motion.div>
          </Link>
          <motion.div  className='flex items-center justify-center' {...fadeIn(0.4, 20)}>
            <div>
              <h1 className='italic text-sky-900 font-bold text-xs'>{companyName}</h1>
              <p className='text-xs opacity-75 text-black italic'>Building tomorrow communities today</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex lg:hidden"
          {...scaleIn(0.3)}
        >
          <motion.button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </motion.div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navLinks.map(link => (
            <motion.div key={link.href} {...fadeIn(link.delay, -20)}>
              <Link href={safeHref(link.href)}
                className={`text-sm leading-6 font-semibold hover:text-white
                  rounded text-sky-900 p-2 hover:bg-sky-900
                  ${active(link.href)} transition-all duration-300 ease-in-out group relative overflow-hidden`
                }>
                <motion.span className="relative z-10"  whileHover={{ x: 2 }} >
                  {link.label}
                </motion.span>
                <motion.div className="absolute inset-0 bg-sky-900 rounded" initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }} transition={{ duration: 0.3 }} style={{ originX: 0 }} />
              </Link>
            </motion.div>
          ))}
        </PopoverGroup>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <motion.div  className="fixed inset-0 z-10 bg-black/50" initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenuOpen(false)}/>
            <motion.div
              className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/20"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}>
              <motion.div  className="flex items-center justify-between"
                {...fadeIn(0.1, -20)} >
                <Link href={safeHref(siteLinks.home)} className="-m-1.5 p-1.5">
                  <span className="sr-only">{companyName}</span>
                  <Image className="h-16 w-auto" src={logo_src} alt=""
                    width={700} height={1500}/>
                </Link>
                <motion.button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </motion.div>
              <motion.div className="mt-6 flow-root"
                {...fadeIn(0.2)}>
                <div className="-my-6 divide-y divide-gray-500/10">
                  <motion.div className="space-y-2 py-6"{...fadeIn(0.3, 20)}>
                    {navLinks.map((link, index) => (
                      <motion.div key={link.href}{...fadeIn(0.4 + index * 0.1, 0, 20, 0.3)}>
                        <Link href={safeHref(link.href)}
                          className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-sky-900 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)} >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.header>
  )
}