import Hero from "./hero";

export default function Home(){
    
    return(
        <div className="bg-white">
            <Hero />
            <div className="text-center">
                <h2 className="mt-6 leading-8 text-cadet-gray text-2xl font-bold tracking-tight sm:text-3xl">
                    My goals are simple:
                </h2>
                <ul className="mt-6 text-lg leading-8 text-gray-600"> 
                    <li>To beat the Dow, NASDAQ, and S&P 500 each year</li>
                    <li>To improve trading strategies and returns</li>
                    <li>To continue learning and growing through experience</li>
                </ul>
            </div>
        </div>
    )
}
