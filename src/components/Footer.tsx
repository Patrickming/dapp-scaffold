import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export const Footer: FC = () => {
    return (
        <div className="flex">
            <footer className="border-t-2 border-[#141414] bg-black hover:text-white w-screen" >
                <div className="ml-12 py-12 mr-12">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-8 md:space-x-12 relative">
                        <div className='flex flex-col col-span-2 mx-4 items-center md:items-start'>
                            <div className='flex flex-row ml-1'>
                                {/* <Link href="https://solana.com" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white"> */}
                                <div className='flex flex-row ml-1'>
                                    <Image
                                        src="/solanaLogo.png"
                                        alt="solana icon"
                                        width={156}
                                        height={96}
                                    />
                                </div>
                                {/* </Link> */}
                            </div>
                            <div className="mb-6 m-1 sm:text-left place-items-start items-start font-normal tracking-tight text-secondary">
                                © 2024 Solana ZHUHAI
                            </div>
                        </div>
                        <div className="mb-6 items-center mx-auto max-w-screen-lg">
                            <h5 className="font-normal capitalize tracking-tight  mb-2.5">DEVELOPERS</h5>
                            <div className="flex flex-col mb-0 gap-2">
                                <Link href="https://github.com/brooke007" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    brooke
                                </Link>
                                <Link href="https://github.com/Patrickming" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    派大茗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
