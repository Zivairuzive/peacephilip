import Image from 'next/image';
import Link from 'next/link'
/**
 * 
 * footer items:
 *  - logo
 *  - useful links
 *  - featured images
 */


export default function Footer(){
    const company:string = 'Hydravex Engineering';
    return (
        <div className=''>
            <div className="h-42 bg-white text-white border-t-2">
                <div className="max-w-7xl m-auto grid grid-cols-3 gap-3">
                <div className='grid grid-rows-2'>
                    <div className='h-30 relative sm:mb-5 sm:h-46 '>
                        
                            <Image className='w-auto absolute py-5 rounded-md'
                            width={700}
                            height={700}
                            alt='company logo'
                            src='/hydra-logo.jpg'
                            />
                    
                    </div>
                    <div className='text-sky-700 sm:mt-10 italic text-xs font-semibold px-2'>
                        <p>Building tomorrow, communities today</p>
                    </div>
                </div>
                <div className='py-5'>
                    <p className='text-black font-bold text-xs sm:text-sm'>Connect With Us</p>
                    <div className=' links flex mt-5 '>
                        <div className=''>
                        <Link href={`https://www.facebook.com/share/BGRpkiB8ZuUvRReR/?mibextid=LQQJ4d`}>
                            <Image className='sm:w-12'
                            src={'/facebook.svg'}
                            width={25}
                            height={25}
                            alt=""
                            />
                        </Link>
                        </div>
                        <div className='px-5'>
                            <Image className='sm:w-12' 
                            src={'/linkedin.svg'}
                            width={25}
                            height={25}
                            alt=""
                            />
                        </div>
                        <div >
                            <Link href={`https://www.instagram.com/p/C9FltsRNR1y/?hl=en`}>
                                <Image className='sm:w-12' 
                                src={'/instagram.svg'}
                                width={25}
                                height={25}
                                alt=""
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='text-black text-sm font-semibold mt-5'>
                        <h3 >Address</h3>
                        <p className='text-xs text-sky-700'>85 Gaydon Road, Harare, Zimbabwe</p>
                    </div>
                    <div className='text-black text-sm font-semibold mt-1'>
                        <h3>Phone</h3>
                        <p className='text-xs text-sky-700'>+263 772 364 782</p>
                    </div>
                    <div className='text-black text-sm font-semibold mt-1'>
                        <h3>Email</h3>
                        <p className='text-xs text-sky-700'>hydravexzim@gmail.com</p>
                    </div>
                </div>
                <div className='py-5'>
                    <p className='text-black font-bold text-xs sm:text-sm'>Useful Links</p>
                   <div className='grid grid-cols mt-2'>
                    <Link href={'/privacy'} className='text-sky-700 text-xs hover:underline font-semibold'>Privacy Policy</Link>
                    <Link href={'/gallery'} className='text-sky-700 text-xs hover:underline font-semibold mt-1'>Gallery- coming soon</Link>
                   </div>
                </div>

                </div>
            </div>
            <div className='h-20 bg-sky-900 flex justify-center'>
                <div className='max-w-7xl m-auto flex'>
                <div className='copyright text-white flex-1/2'>	
                    <span className='text-xs'>&copy; {new Date().getFullYear()} Hydravex Engineering - All rights reserved</span>
                </div>
                {/* <div className='flex-1/2'>Here</div> */}

                </div>
            </div>
        </div>
    )
}