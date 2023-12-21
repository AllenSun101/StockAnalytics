'use client';

import { Accordion, Card, Button } from 'flowbite-react';

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
                    <div className="md:px-32 py-8 w-full">
                        <div className="shadow rounded border-b border-gray-200 overflow-x-auto">
                            <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Ticker/Stock</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Shares</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Average Cost Basis</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Percentage of Fund</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                <td className="text-left py-3 px-4">AAPL (Apple Inc.)</td>
                                <td className="text-left py-3 px-4">10</td>
                                <td className="text-left py-3 px-4">190.10</td>
                                <td className="text-left py-3 px-4">9.69%</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Active Management Fund
                    </p>
                    <div className="md:px-32 py-8 w-full">
                        <div className="shadow rounded border-b border-gray-200 overflow-x-auto">
                            <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Ticker/Stock</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Shares</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Average Cost Basis</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Percentage of Fund</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                <td className="text-left py-3 px-4">AAPL (Apple Inc.)</td>
                                <td className="text-left py-3 px-4">10</td>
                                <td className="text-left py-3 px-4">190.10</td>
                                <td className="text-left py-3 px-4">9.69%</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Year-To-Date Performance
                </Accordion.Title>
                 <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Chart of YTD Performance (since December 31, 2022)
                    </p>
                    <div className="md:px-32 py-8 w-full">
                        <div className="shadow rounded border-b border-gray-200 overflow-x-auto">
                            <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Fund</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">YTD Return</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                <td className="text-left py-3 px-4">Allen Innnovation Fund</td>
                                <td className="text-left py-3 px-4">35%</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Recent Transactions
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Last Updated: August 16, 2023
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Innovation Fund
                    </p>
                    <div className="md:px-32 py-8 w-full">
                        <div className="shadow rounded border-b border-gray-200 overflow-x-auto">
                            <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Ticker/Stock</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Buy/Sell</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Shares</th>  
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>                                                    
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                <td className="text-left py-3 px-4">AAPL</td>
                                <td className="text-left py-3 px-4">BUY</td>
                                <td className="text-left py-3 px-4">10</td>
                                <td className="text-left py-3 px-4">190.10</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Active Management Fund
                    </p>
                    <div className="md:px-32 py-8 w-full">
                        <div className="shadow rounded border-b border-gray-200 overflow-x-auto">
                            <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Ticker/Stock</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Buy/Sell</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Shares</th>  
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>                                                    
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                <td className="text-left py-3 px-4">AAPL</td>
                                <td className="text-left py-3 px-4">BUY</td>
                                <td className="text-left py-3 px-4">10</td>
                                <td className="text-left py-3 px-4">190.10</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Historical Returns
                </Accordion.Title>
                <Accordion.Content>
                    <div className="md:px-32 py-8 w-full">
                        <div className="shadow rounded border-b border-gray-200 overflow-x-auto">
                            <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Fund</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">2022 Return</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">2021 Return</th>  
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">2020 Return</th>                                                    
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                <td className="text-left py-3 px-4">Allen Innovation Fund</td>
                                <td className="text-left py-3 px-4">-50%</td>
                                <td className="text-left py-3 px-4">21%</td>
                                <td className="text-left py-3 px-4">38%</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            </Accordion>
            <div className='mt-6 text-center'>
                <h2 className="mb-4 leading-8 text-cadet-gray text-2xl font-bold tracking-tight sm:text-4xl">
                        More Resources
                </h2>
                <div className='mt-6 text-lg leading-8 text-gray-600 pb-6 grid lg:grid-cols-3 justify-center'>
					<div className='max-w-sm mx-2 mb-2'>
						<Card
							imgAlt="Meaningful alt text for an image that is not purely decorative"
							imgSrc="/WallStreet.jpeg"
						>
							<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Trading Notes
							</h5>
							<Button>
								<p>Open</p>
							</Button>
						</Card>
					</div>
                    <div className='max-w-sm mx-2 mb-2'>
						<Card
							imgAlt="Meaningful alt text for an image that is not purely decorative"
							imgSrc="/WallStreet.jpeg"
						>
							<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Premarket Playbook
							</h5>
							<Button>
								<p>Open</p>
							</Button>
						</Card>
					</div>
                    <div className='max-w-sm mx-2 mb-2'>
						<Card
							imgAlt="Meaningful alt text for an image that is not purely decorative"
							imgSrc="/WallStreet.jpeg"
						>
							<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Historical Transactions
							</h5>
							<Button>
								<p>Open</p>
							</Button>
						</Card>
					</div>
				</div>
                
                </div>
                
            </div>
        </div>
    )
}