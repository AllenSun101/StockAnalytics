import Hero from "./hero";
import Strategy_Tabs from "./strategyTabs";
import Goals from "./goals"

export default function Home(){
    return(
        <div className="bg-white">
            <Hero />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Goals />
                <Strategy_Tabs />
            </div>
        </div>
    )
}
