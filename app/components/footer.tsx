import Image from 'next/image';
import Link from 'next/link';
import { socialLinks, contactInfo } from '../data/siteData';



const usefulLinks = [
    {
        href: '/privacy',
        label: 'Privacy Policy',
    },
    {
        href: '/gallery',
        label: 'Gallery- coming soon',
    },
];

export default function Footer() {
    return (
        <div>
            <div className="h-42 bg-white text-white border-t-2">
                <div className="max-w-7xl m-auto grid grid-cols-3 gap-3">
                    <div className='grid grid-rows-2'>
                        <div className='h-30 relative sm:mb-5 sm:h-46 '>
                            <Image className='w-auto absolute py-5 rounded-md'
                                width={700} height={700} alt='company logo' src='/hydra-logo.jpg' />
                        </div>
                        <div className='text-sky-700 sm:mt-10 italic text-xs font-semibold px-2'>
                            <p>Building tomorrow, communities today</p>
                        </div>
                    </div>
                    <div className='py-5'>
                        <p className='text-black font-bold text-xs sm:text-sm'>Connect With Us</p>
                        <div className='links flex mt-5'>
                            {socialLinks.map((link, idx) =>
                                link.href ? (
                                    <div key={link.alt} className={idx === 1 ? 'px-5' : ''}>
                                        <Link href={link.href}>
                                            <Image className='sm:w-12' src={link.src} width={25} height={25} alt={link.alt} />
                                        </Link>
                                    </div>
                                ) : (
                                    <div key={link.alt} className={idx === 1 ? 'px-5' : ''}>
                                        <Image className='sm:w-12' src={link.src} width={25} height={25} alt={link.alt} />
                                    </div>
                                )
                            )}
                        </div>
                        {contactInfo.map(info => (
                            <div key={info.label} className='text-black text-sm font-semibold mt-5'>
                                <h3>{info.label}</h3>
                                <p className='text-xs text-sky-700'>{info.value}</p>
                            </div>
                        ))}
                    </div>
                    <div className='py-5'>
                        <p className='text-black font-bold text-xs sm:text-sm'>Useful Links</p>
                        <div className='grid grid-cols mt-2'>
                            {usefulLinks.map((link, idx) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sky-700 text-xs hover:underline font-semibold${idx === 1 ? ' mt-1' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-20 bg-sky-900 flex justify-center'>
                <div className='max-w-7xl m-auto flex'>
                    <div className='copyright text-white flex-1/2'>
                        <span className='text-xs'>&copy; {new Date().getFullYear()} {} - All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    )
}