'use client'

import { Card } from 'flowbite-react';

export default function Goals(){
    return(
        <div className='bg-white'>
            <h2 className="text-center mt-12 leading-8 text-cadet-gray text-3xl font-bold tracking-tight sm:text-4xl">
                    My Goals
            </h2>
            <div className='mt-6 text-lg leading-8 text-gray-600 pb-6 grid lg:grid-cols-3 justify-center'>
                <Card className="max-w-sm mb-2">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Performance
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Beat the Dow, NASDAQ, and S&P 500 each year
                    </p>
                </Card>
                <Card className="max-w-sm mb-2">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Strategy
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Improve trading strategies and returns performances over time
                    </p>
                </Card>
                <Card className="max-w-sm mb-2">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Growth
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Adapt to market cycles and grow through experience                    
                    </p>
                </Card>
            </div>
        </div>
    )
}