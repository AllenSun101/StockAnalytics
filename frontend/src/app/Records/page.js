'use client';

import { Accordion } from 'flowbite-react';

export default function Records(){
    return(
        <div className='bg-white pt-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <h2 className="mb-4 text-center leading-8 text-cadet-gray text-2xl font-bold tracking-tight sm:text-4xl">
                        Trading Records
                </h2>
            <Accordion collapseAll>
                <Accordion.Panel>
                    <Accordion.Title>
                        Current Holdings
                    </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Last Updated: July 21, 2023
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Innovation Fund
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Active Management Fund
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Year-To-Date Performance
                </Accordion.Title>
                 <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Chart of YTD Performance
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Recent Transactions
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Table of Recent Transactions
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Historical Returns
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Chart of Historical Returns
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            </Accordion>
            </div>
            <div className='mt-6 text-center'>
                <h2 className="mb-4 leading-8 text-cadet-gray text-2xl font-bold tracking-tight sm:text-4xl">
                        More Resources
                </h2>
                <p>Trading Notes (Cards)</p>
                <p>Premarket Playbook</p>
                <p>Historical Transactions</p>
                <p>Economic Projections</p>

            </div>
        </div>
    )
}