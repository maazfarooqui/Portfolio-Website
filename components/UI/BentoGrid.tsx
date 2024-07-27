'use client'
import dynamic from 'next/dynamic';
import { cn } from "@/utils/cn";
const BackgroundGradientAnimation = dynamic(
    () => import('./Gradientbg').then((mod) => mod.BackgroundGradientAnimation),
    {
      ssr: false, // This will only render the component on the client side
      loading: () => <div>Loading...</div>, // Optional: You can provide a loading component
    }
  );

import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // "grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto",
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id: number;

    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {

    const [copied, setCopied]= useState(false);
    const handleCopy =() =>{
        navigator.clipboard.writeText('maazaf10@gmail.com');

        setCopied(true);
    }
   

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border border-white/[0.1]  justify-between flex flex-col space-y-4 ",
                className
            )}

            style={{
            
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(2,4,75,1) 35%, rgba(6,9,57,1) 100%)'
            }}
        >

            <div className={id === 4 ? 'flex justify-center h-full' : ''}>
                <div className="h-full w-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover, object-center')}
                        />
                    )}
                </div>

                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-0'}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className={'object-cover, object-center w-full h-full'}
                        />
                    )}

                </div>

                {id === 6 && (
                    
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
                    </BackgroundGradientAnimation>
                )}

                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 text-white transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                )}>
                    <div className="font-sans font-normal text-neutral-600 text-l md:text-xs lg:text-base z-10 dark:text-neutral-300">{description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>

               

                {id===2 && <GlobeDemo/>}

                {id===3 && (
                    <div className=" flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                        <div className="flex  flex-col gap-3 lg:gap-8 text-white-100">
                            {['TailwindCSS', 'React.js', 'CSS'].map((item)=>
                            (
                                <span key={item} className="py-2 lg:px-3 relative top-1 right-5 lg:py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#51557A80]">
                                    {item}
                                </span>
                            ))}
                            

                            <span className="py-4 px-3 rounded-lg text-center relative -bottom-1 right-5 bg-[#51557A80] "/>
                        </div>
                        <div className="flex  flex-col gap-3 lg:gap-8 text-white-100">
                            
                        <span className="py-4 px-3 my-0  rounded-lg text-center relative top-1 right-5 bg-[#51557A80] "/>
                            {['Java', 'Three.js', 'C++'].map((item)=>
                            (
                                <span key={item} className="py-2 lg:px-3 relative top-1 right-5 lg:py-2 px-3 w-24 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#51557A80]">
                                    {item}
                                </span>
                            ))}
                            

                        </div>
                        
                            

                        </div>
                        
                )}

                {id===6 && (
                    
                        <div className="mt-5 relative ">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop:copied,
                                    autoplay:copied,
                                    animationData,
                                    rendererSettings:{
                                        preserveAspectRatio: 'xMidYMid slice',
                                    }
                                }} 
                                />
                            </div>

                            <MagicButton 
                            title={copied ?  'Copied Email': 'Copy my email'}
                            icon = {<IoCopyOutline/>}
                            position="left"
                            otherClasses="!bg-[#161a31]"
                            HandleClick={handleCopy}
                            />
                        </div>
                )}



            </div>
        </div>
        </div>
    );
};
