'use client';

import { Accordion } from 'flowbite-react';

export default function Records(){
    return(
        <div className='bg-white pt-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <Accordion collapseAll>
                <Accordion.Panel>
                    <Accordion.Title>
                        Current Holdings
                    </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                        dropdowns, modals, navbars, and more.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Year-To-Date Performance
                </Accordion.Title>
                 <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                        has a design equivalent in our Figma file.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Recent Transactions
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two worlds.
                    </p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        <li>
                        <a
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                            href="https://flowbite.com/pro/"
                        >
                            <p>
                            Flowbite Pro
                            </p>
                        </a>
                        </li>
                        <li>
                        <a
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                            href="https://tailwindui.com/"
                            rel="nofollow"
                        >
                            <p>
                            Tailwind UI
                            </p>
                        </a>
                        </li>
                    </ul>
                </Accordion.Content>
            </Accordion.Panel>
            </Accordion>
            </div>
            <div>
                <h2>More resources</h2>
            </div>
        </div>
    )
}