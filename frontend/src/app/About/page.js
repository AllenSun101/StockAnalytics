import Image from 'next/image'
import { ArrowTrendingUpIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/20/solid'


export default function About(){

    const features = [
    {
        name: 'My Strategy:',
        description:
        "I combine algorithmic strategies with personal research to generate long-term returns that outpace \
        the benchmarks. I have proficiency in fundamentals, technicals, economics, and machine learning.",
        icon: ArrowTrendingUpIcon,
    },
    {
        name: 'Big Ideas:',
        description: "I'm a huge fan of technology, fintech, blockchain, artificial intelligence, and \
        disruptive innovation. ",
        icon: LightBulbIcon,
    },
    {
        name: 'Eager to Connect:',
        description: "Please do not hesitate to reach out with comments, inquiries, \
        opportunities, or just to say hi! ",
        icon: GlobeAltIcon,
    },
    ]

    return(
        <div className="bg-white">
            <div className="overflow-hidden bg-white pt-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-2xl">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">About Me</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Allen Sun</p>
                                <p className="mt-6 text-lg leading-8">
                                    Hello there! I'm Allen, an nineteen-year-old trader. I first ventured into the markets at the age of 
                                    seven (June 2012). I developed this website to share my ideas and store my records.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <Image src="/Headshot.png" alt="Headshot of myself" width="400" height="400" 
                            className='w-[32rem] max-w-none rounded-xl sm:w-[32rem] md:-ml-4 lg:-ml-0'
                        />  
                    </div>
                </div>
            </div>
            <div>
                <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center'>Trading History</h1>
                
                <div className="container mx-auto w-full h-full pb-3">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border-5 border" style={{ left: '50%' }}></div>

                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            </div>
                            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-xl">June 2012</h3>
                                <p className="leading-snug tracking-wide text-opacity-100">
                                    I started to track stocks, including HAL, GM, ATPG, BA, & PSUN. I paper traded and 
                                    read various books throughout the next years, notably in 2016 and 2018.
                                </p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            </div>
                            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-xl">June 2019</h3>
                                <p className="leading-snug tracking-wide text-opacity-100">
                                    I built my first watchlist and started applying technical indicators and 
                                    pattern-recognition techniques.
                                </p>
                            </div>
                        </div>
    
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            </div>
                            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-xl">June 2020</h3>
                                <p className="leading-snug tracking-wide text-opacity-100">
                                    I opened an Investopedia paper account. In July 2020, I also opened an 
                                    Interactive Brokers paper account. I reset the Interactive Brokers Account in August 
                                    and then used it as my sole trading account.
                                </p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex bg-gray-800 items-center order-1 shadow-xl w-8 h-8 rounded-full">
                            </div>
                            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-xl">December 2020</h3>
                                <p className="leading-snug tracking-wide text-opacity-100">
                                    I closed out the Interactive Brokers account and transitioned to a TD Ameritrade 
                                    brokerage account.Aggregated from my accounts, I produced a year-end return of 38.54% 
                                    (from June 2020). 
                                </p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            </div>
                            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-xl">December 2021</h3>
                                <p className="leading-snug tracking-wide text-opacity-100">
                                    I finished the year with a 21.40% annual return on my trading account.
                                </p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            </div>
                            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-xl">February 2022</h3>
                                <p className="leading-snug tracking-wide text-opacity-100">
                                    I launched my paper fund on Interactive Brokers, starting with $200,000. 
                                    Managing two accounts gave me greater flexibility in my choices. I started 
                                    observing market dynamics and economics in greater detail.
                                </p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            </div>
                            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-xl">July 2022</h3>
                                <p className="leading-snug tracking-wide text-opacity-100">
                                    I launched my first Website, <i>Dark Horse of Wall Street</i> ,
                                    using Wordpress. 
                                </p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            </div>
                            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-xl">December 2022</h3>
                                <p className="leading-snug tracking-wide text-opacity-100">
                                    I created a stock evaluation system where I manually track around 120 
                                    stocks on a rotating basis. My screener analyzes 1300+ other stocks.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
