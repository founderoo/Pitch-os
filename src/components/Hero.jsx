



































































































































































import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from 'react'
import dashboard from '../assets/dashboard.jpg'
import dark from '../assets/dark.png'


const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    const navigate = useNavigate();
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["with vision", "& showcased", "effortlessly"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <>
            <main className="overflow-hidden bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50" style={{ backgroundColor: '#F5F2E8' }}>
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div
                        className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(276,50%,70%,.08)_0,hsla(276,50%,60%,.02)_50%,hsla(276,50%,50%,0)_80%)]" />
                    <div
                        className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(276,50%,70%,.06)_0,hsla(276,50%,60%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div
                        className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(276,50%,70%,.04)_0,hsla(276,50%,60%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                        </AnimatedGroup>
                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,#F5F2E8_75%)]" />
                        {/* Adjusted max-w and px for overall padding */}
                        <div className="mx-auto max-w-full px-8 sm:px-12 xl:px-16">
                            {/* Mobile version (unchanged) */}
                            <div className="text-center sm:mx-auto lg:mr-auto lg:hidden">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="hover:bg-purple-100 hover:border-yellow-500/80 hover:shadow-yellow-500/20 bg-white/80 group mx-auto flex w-fit items-center gap-4 rounded-full border border-purple-200 p-1 pl-4 shadow-md shadow-purple-200/50 transition-all duration-300 backdrop-blur-sm">
                                        <span className="text-gray-700 text-sm">Make Your Pitch Now!</span>
                                        <span
                                            className="block h-4 w-0.5 border-l border-purple-300 bg-purple-300"></span>

                                        <div
                                            className="bg-purple-200 group-hover:bg-yellow-400 group-hover:border-yellow-500 border border-purple-300 size-6 overflow-hidden rounded-full duration-500 transition-all">
                                            <div
                                                className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 text-purple-600 group-hover:text-white transition-colors" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 text-purple-600 group-hover:text-white transition-colors" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                        {/* Adjusted font sizes for mobile h1 */}
                                        <h1 className="text-3xl sm:text-4xl md:text-6xl max-w-2xl tracking-tighter text-center font-regular">
                                            <span className="text-gray-700">Pitches That Get</span>
                                            <br />
                                            <span className="text-gray-700 font-semibold">Funded</span>
                                            <br />
                                            {/* Adjusted height for mobile dynamic text */}
                                            <span className="relative flex w-full justify-center overflow-hidden text-center h-10 sm:h-14 md:h-20 pb-6 md:pb-6 pt-2 md:pt-2">
                                                &nbsp;
                                                {titles.map((title, index) => (
                                                    <motion.span
                                                        key={index}
                                                        className="absolute font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                                                        initial={{ opacity: 0, y: "-50" }}
                                                        transition={{ type: "spring", stiffness: 50 }}
                                                        animate={
                                                            titleNumber === index
                                                                ? {
                                                                    y: 0,
                                                                    opacity: 1,
                                                                }
                                                                : {
                                                                    y: titleNumber > index ? -100 : 100,
                                                                    opacity: 0,
                                                                }
                                                        }
                                                    >
                                                        {title}
                                                    </motion.span>
                                                ))}
                                            </span>
                                        </h1>
                                    </div>

                                    {/* Adjusted margin-top and font size for mobile paragraph */}
                                    <p className="mx-auto mt-8 max-w-2xl text-balance text-base sm:text-lg text-gray-600">
                                        From idea to investment, PitchMaster leverages AI to make your pitch irresistible. Get funded faster, with absolute confidence.
                                    </p>
                                </AnimatedGroup>
 {/* Adjusted margin-top for mobile button group */}
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div key={1} className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 hover:from-yellow-400/30 hover:to-yellow-500/30 rounded-[14px] border border-yellow-500/50 hover:border-yellow-400 p-0.5 transition-all duration-300">
                                        <Button
                                            size="lg"
                                            className="rounded-xl px-5 text-base bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-gray-800 font-semibold transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                                            onClick={() => {
                                                const user = auth.currentUser;
                                                if (user) {
                                                    navigate('/dashboard');
                                                } else {
                                                    navigate('/login');
                                                }
                                            }}
                                        >
                                            <span className="text-nowrap">Start Now</span>
                                        </Button>
                                    </div>
                                </AnimatedGroup>
                            </div>

                            {/* Desktop version (side-by-side layout) */}
                            <div className="hidden lg:block">
                                {/* Adjusted grid columns to make image column wider */}
                                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-center min-h-[85vh] py-12">
                                    {/* Left side - Content */}
                                    {/* Removed right padding to allow text to spread out */}
                                    <div className="space-y-10 xl:space-y-12">
                                        <AnimatedGroup variants={transitionVariants}>
                                            <Link
                                                href="#link"
                                                className="hover:bg-purple-100 hover:border-yellow-500/80 hover:shadow-yellow-500/20 bg-white/80 group flex w-fit items-center gap-4 rounded-full border border-purple-200 p-1 pl-4 shadow-md shadow-purple-200/50 transition-all duration-300 backdrop-blur-sm">
                                                <span className="text-gray-700 text-sm">Make Your Pitch Now!</span>
                                                <span
                                                    className="block h-4 w-0.5 border-l border-purple-300 bg-purple-300"></span>

                                                <div
                                                    className="bg-purple-200 group-hover:bg-yellow-400 group-hover:border-yellow-500 border border-purple-300 size-6 overflow-hidden rounded-full duration-500 transition-all">
                                                    <div
                                                        className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                        <span className="flex size-6">
                                                            <ArrowRight className="m-auto size-3 text-purple-600 group-hover:text-white transition-colors" />
                                                        </span>
                                                        <span className="flex size-6">
                                                            <ArrowRight className="m-auto size-3 text-purple-600 group-hover:text-white transition-colors" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div className="mt-10 xl:mt-12 text-balance text-lg">
                                                {/* Adjusted font sizes for desktop h1 */}
                                                <h1 className="text-5xl xl:text-6xl 2xl:text-7xl tracking-tighter text-left font-regular leading-[1.1] xl:leading-[1.05]">
                                                    <span className="text-gray-700">Pitches That Get</span>
                                                    <br />
                                                    <span className="text-gray-700 font-semibold">Funded</span>
                                                    <br />
                                                    {/* Adjusted height for desktop dynamic text */}
                                                    <span className="relative flex w-full justify-start overflow-hidden text-left h-16 xl:h-20 2xl:h-24 pb-6 pt-2">
                                                        &nbsp;
                                                        {titles.map((title, index) => (
                                                            <motion.span
                                                                key={index}
                                                                className="absolute font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                                                                initial={{ opacity: 0, y: "-50" }}
                                                                transition={{ type: "spring", stiffness: 50 }}
                                                                animate={
                                                                    titleNumber === index
                                                                        ? {
                                                                            y: 0,
                                                                            opacity: 1,
                                                                        }
                                                                        : {
                                                                            y: titleNumber > index ? -100 : 100,
                                                                            opacity: 0,
                                                                        }
                                                                }
                                                            >
                                                                {title}
                                                            </motion.span>
                                                        ))}
                                                    </span>
                                                </h1>
                                            </div>

                                            {/* Adjusted margin-top and font size for desktop paragraph */}
                                            <p className="mt-10 xl:mt-12 max-w-2xl text-balance text-xl xl:text-2xl text-gray-600 leading-relaxed xl:leading-relaxed">
                                                From idea to investment, PitchMaster leverages AI to make your pitch irresistible. Get funded faster, with absolute confidence.
                                            </p>
                                        </AnimatedGroup>

                                        {/* Adjusted margin-top for desktop button group */}
                                        <AnimatedGroup
                                            variants={{
                                                container: {
                                                    visible: {
                                                        transition: {
                                                            staggerChildren: 0.05,
                                                            delayChildren: 0.75,
                                                        },
                                                    },
                                                },
                                                ...transitionVariants,
                                            }}
                                            className="mt-16 xl:mt-20 flex items-center justify-start gap-6">
                                            <div key={1} className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 hover:from-yellow-400/30 hover:to-yellow-500/30 rounded-[14px] border border-yellow-500/50 hover:border-yellow-400 p-0.5 transition-all duration-300">
                                                <Button
                                                    size="lg"
                                                    className="rounded-xl px-8 py-6 text-lg bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-gray-800 font-semibold transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                                                    onClick={() => {
                                                        const user = auth.currentUser;
                                                        if (user) {
                                                            navigate('/dashboard');
                                                        } else {
                                                            navigate('/login');
                                                        }
                                                    }}
                                                >
                                                    <span className="text-nowrap">Start Now</span>
                                                </Button>
                                            </div>
                                        </AnimatedGroup>
                                    </div>

                                    {/* Right side - Image */}
                                    {/* Adjusted padding on the left and p-value for image box size */}
                                    <div className="relative pl-4 xl:pl-6">
                                        <AnimatedGroup
                                            variants={{
                                                container: {
                                                    visible: {
                                                        transition: {
                                                            staggerChildren: 0.05,
                                                            delayChildren: 0.75,
                                                        },
                                                    },
                                                },
                                                ...transitionVariants,
                                            }}>
                                            <div className="relative">
                                                {/* Gradient overlay for fade effect */}
                                                <div
                                                    aria-hidden
                                                    className="bg-gradient-to-b from-transparent from-35% to-stone-100 absolute inset-0 z-10 pointer-events-none opacity-40" />

                                                {/* Image container */}
                                                <div className="relative">
                                                    {/* Padding on the image container to control the border size, not the image size itself */}
                                                    <div className="relative overflow-hidden rounded-2xl xl:rounded-3xl border border-purple-200 hover:border-yellow-500/50 p-4 xl:p-6 shadow-2xl shadow-purple-200/50 ring-1 ring-purple-100 hover:ring-yellow-500/30 transition-all duration-500 bg-white/50 backdrop-blur-sm hover:shadow-yellow-500/25">
                                                        {/* Dark mode image */}
                                                        <img
                                                            className="aspect-[16/9] w-full relative hidden rounded-xl xl:rounded-2xl dark:block transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20"
                                                            src={dark}
                                                            alt="PitchOS Dashboard - Dark Mode"
                                                            loading="lazy"
                                                        />
                                                        {/* Light mode image */}
                                                        <img
                                                            className="aspect-[16/9] w-full relative rounded-xl xl:rounded-2xl border border-purple-200 hover:border-yellow-500/30 dark:hidden transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20"
                                                            src={dashboard}
                                                            alt="PitchOS Dashboard - Light Mode"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </AnimatedGroup>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile image section (unchanged) */}
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="lg:hidden">
                            <div className="relative mt-8 px-4 sm:px-6 md:mt-12">
                                {/* Gradient overlay for fade effect */}
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b from-transparent from-35% to-stone-100 absolute inset-0 z-10 pointer-events-none" />

                                {/* Image container - responsive and always visible */}
                                <div className="relative mx-auto max-w-6xl">
                                    {/* Padding on the image container to control the border size, not the image size itself */}
                                    <div className="relative overflow-hidden rounded-2xl border border-purple-200 hover:border-yellow-500/50 p-0 sm:p-2 shadow-lg shadow-purple-200/30 ring-1 ring-purple-100 hover:ring-yellow-500/30 transition-all duration-500 bg-white/50 backdrop-blur-sm hover:shadow-yellow-500/10">
                                        {/* Dark mode image */}
                                        <img
                                            className="aspect-[16/9] w-full relative hidden rounded-xl sm:rounded-2xl dark:block transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20"
                                            src={dark}
                                            alt="PitchOS Dashboard - Dark Mode"
                                            loading="lazy"
                                        />
                                      
                                        <img
                                            className="aspect-[16/9] w-full relative rounded-xl sm:rounded-2xl border border-purple-200 hover:border-yellow-500/30 dark:hidden transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20"
                                            src={dashboard}
                                            alt="PitchOS Dashboard - Light Mode"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    );
}
