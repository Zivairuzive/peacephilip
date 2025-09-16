'use client'

import { useState, useContext } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { pathContext } from '../context'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const siteLinks = {
  home: '/',
  services: '/services',
  about: '/about',
  contact:'/contact'

}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const logo_src:string = '/hydra-logo.jpg';
const company: string = 'Hydravex Engineeering';

type HeaderProps = {
  url:string;
}

export default function Header(prop:HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {pathValue} = useContext(pathContext);
  const active = (link:string)=> {return link === pathValue && 'border-b-1 border-sky-900 bg-sky-900 text-white'};
  
  return (
    <motion.header 
      className="bg-white shadow-md z-40"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-2 px-3 sm:px-20 z-40" aria-label="Global">
        <motion.div 
          className="flex lg:flex-1" 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Link href={siteLinks.home} className="-m-1.5 p-1.5 group">
            <span className="sr-only text-xs">{company}</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                className="h-16 w-auto"
                src= {logo_src}
                width={700}
                height={1500}
                alt="" 
              />
            </motion.div>
          </Link>
          <motion.div 
            className='flex items-center justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div>
              <h1 className='italic text-sky-900 font-bold text-xs'>{company}</h1>
              <p className='text-xs opacity-75 text-black italic'>Building tomorrow communities today</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex lg:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </motion.div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href={siteLinks.home} 
            className={`text-sm leading-6 font-semibold hover:text-white
            rounded text-sky-900 p-2 hover:bg-sky-900
            ${active(siteLinks.home)} transition-all duration-300 ease-in-out group relative overflow-hidden`
            }>
            <motion.span
              className="relative z-10"
              whileHover={{ x: 2 }}
            >
              Home
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-sky-900 rounded"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href={siteLinks.services} 
            className={`text-sm leading-6 font-semibold text-sky-900
              p-2 hover:bg-sky-900 hover:text-white rounded 
              ${active(siteLinks.services)} transition-all duration-300 ease-in-out group relative overflow-hidden`
              }>
            <motion.span
              className="relative z-10"
              whileHover={{ x: 2 }}
            >
              Services
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-sky-900 rounded"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href={siteLinks.about} 
            className={`text-sm leading-6 font-semibold hover:text-white
             rounded text-sky-900 p-2 ${active(siteLinks.about)}
             transition-all duration-300 ease-in-out hover:bg-sky-900 group relative overflow-hidden`
             }>
            <motion.span
              className="relative z-10"
              whileHover={{ x: 2 }}
            >
              About Us
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-sky-900 rounded"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link href={siteLinks.contact} 
            className={`text-sm font-semibold leading-6 hover:text-white 
              rounded hover:bg-sky-900 text-sky-900 p-2 
              ${active(siteLinks.contact)} transition-all duration-300 ease-in-out group relative overflow-hidden`
              }>
            <motion.span
              className="relative z-10"
              whileHover={{ x: 2 }}
            >
              Contact Us
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-sky-900 rounded"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </Link>
        </motion.div>
        </PopoverGroup>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <motion.div 
              className="fixed inset-0 z-10 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <motion.div 
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <Link href={siteLinks.home} className="-m-1.5 p-1.5">
                  <span className="sr-only">{company}</span>
                  <Image
                    className="h-16 w-auto"
                    src={logo_src}
                    alt=""
                    width={700}
                    height={1500}
                  />
                </Link>
                <motion.button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </motion.div>
              <motion.div 
                className="mt-6 flow-root"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div className="-my-6 divide-y divide-gray-500/10">
                  <motion.div 
                    className="space-y-2 py-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {[
                      { href: siteLinks.home, label: "Home" },
                      { href: siteLinks.services, label: "Services" },
                      { href: siteLinks.about, label: "About Us" },
                      { href: siteLinks.contact, label: "Contact Us" }
                    ].map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-sky-900 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
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