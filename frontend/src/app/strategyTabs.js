'use client'
import { Tabs } from 'flowbite-react';
import { HiOutlineChartBar, HiCurrencyDollar } from 'react-icons/hi';
import { MdNewspaper } from 'react-icons/md';

export default function Strategy_Tabs(){
    return(
        <div>
            <h2 className="text-center mt-12 leading-8 text-cadet-gray text-3xl font-bold tracking-tight sm:text-4xl">
                My Portfolio Strategy
            </h2>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-6 pb-12">
                <Tabs.Group aria-label="Tabs with underline" style="underline">
                    <Tabs.Item active icon={HiOutlineChartBar} title="Technicals">
                        <p>
                            I have used technical indicators for years to pinpoint entry and exit points. 
                            Technicals also have wide uses in pattern-based screeners and machine
                            learning applications.
                        </p>
                    </Tabs.Item>
                    <Tabs.Item icon={MdNewspaper} title="Fundamentals">
                        <p>
                            Corporate information, sector performances, economic data, and market sentiment
                            are integral in creating a dynamic, adaptive portfolio. I track the broader
                            markets on a daily basis and keep overarching developments in mind when evaluating 
                            individual stocks.
                        </p>
                    </Tabs.Item>
                    <Tabs.Item icon={HiCurrencyDollar} title="Risk Management">
                        <p>
                            I seek balance between value and growth, defensive and cyclical, and various sectors to 
                            ensure that portfolios are protected from adverse market movements. I 
                            aggressively prune poor performers to make room for more promising
                            opportunities and leverage outperforming sectors. 
                        </p>
                    </Tabs.Item>
                </Tabs.Group>
            </div>
        </div>
    )
}