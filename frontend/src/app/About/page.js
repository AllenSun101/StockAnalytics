import styles from './styles.module.css'

export default function About(){
    return(
        <div className={styles.About}>
            <h1 className="Name">Allen Sun</h1>
            <p>Hello there! I created this website to help organize my records and thoughts 
                in the financial markets. It serves as a portfolio of my work and an extension 
                of my memory. Before blogging, I have previously kept records on spreadsheets 
                and documents. In July 2022, I launched my first website using the drag and drop 
                tools from Wordpress. I eventually thought the interface was too limited, so I've 
                built my own website from scratch! Gone are the cluttered links to spreadsheets
                and word documents!
            </p>
            <p> My long-term trading agenda is to combine algorithmic strategies with research 
                to generate returns that outpace the benchmarks. Although I am contrarian in nature, 
                I interpret financial markets through multiple broad lenses. I have strong knowledge 
                of fundamentals, technicals, economics, portfolio theory, and algorithmic trading.  
                I'm a huge fan of technology, fintech, blockchain, renewable energy, and 
                disruptive innovation.
            </p>
            <p>Please do not hesitate to reach out to me with feedback, comments, inquiries, 
                opportunities, or just to say hi! I am updating my site on a daily basis and 
                will respond to all messages. 
            </p>
        </div>
    )
}

/*
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Headshot from "./images/Headshot2.png"
import './AboutMe.css'
import Hero from './images/Hero.jpeg'

const AboutMe = () => {
    return(
        <div>
            <div className='Title'>
                <img className="Hero" src={Hero} alt="Wall Street at Night"/>
                <h1 className="HeroText">About Me</h1>
            </div>
            <Container>
                <Row className="Body">
                    <Col>
                        <h1 className="Name">Allen Sun</h1>
                        <p>Hello there! I created this website to help organize my records and thoughts 
                            in the financial markets. It serves as a portfolio of my work and an extension 
                            of my memory. Before blogging, I have previously kept records on spreadsheets 
                            and documents. In July 2022, I launched my first website using the drag and drop 
                            tools from Wordpress. I eventually thought the interface was too limited, so I've 
                            built my own website from scratch! Gone are the cluttered links to spreadsheets
                            and word documents!
                        </p>
                        <p> My long-term trading agenda is to combine algorithmic strategies with research 
                            to generate returns that outpace the benchmarks. Although I am contrarian in nature, 
                            I interpret financial markets through multiple broad lenses. I have strong knowledge 
                            of fundamentals, technicals, economics, portfolio theory, and algorithmic trading.  
                            I'm a huge fan of technology, fintech, blockchain, renewable energy, and 
                            disruptive innovation.
                        </p>
                        <p>Please do not hesitate to reach out to me with feedback, comments, inquiries, 
                            opportunities, or just to say hi! I am updating my site on a daily basis and 
                            will respond to all messages. 
                        </p>
                        <p>Please connect with me on LinkedIn!</p>
                    </Col>
                    <Col className='Headshot'>
                        <img src={Headshot} alt="Headshot of Allen"/>
                    </Col>
                </Row>
                <Row className="TimelineTitle">
                    <h1>Timeline Of My Journey</h1>
                </Row>
                <Row className="Timeline">
                    <ul>
                        <li>
                            <div className='TimelineContent'>
                                <h1>June 2012</h1>
                                <p>I first started to track stocks after glancing at one of the watchlists of my 
                                    parents. The stocks I followed included HAL, GM, ATPG, BA, & PSUN. ATPG went 
                                    bankrupt later in 2012, and PSUN was not a publicly traded ticker anymore
                                    when I followed up in 2015.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>Summer 2012</h1>
                                <p>At the mall, I would go to the Apple store and use their i-pad samples to
                                    check stocks. I loved the grid display, in which larger companies had bigger
                                    squares and bigger changes would have more color intensity.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>Early 2016</h1>
                                <p>After a few on-and-off years in the stock market, I regained enough
                                    interest to start paper trading on Stockfuse. Despite having no trading
                                    strategy, I generated an 8% return from around May-June 2016 before 
                                    I was locked out of the account. 
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>November 2018</h1>
                                <p>I began to seriously learn professional trading. I started my first
                                    book: "Come Into My Trading Room" by Alexander Elder. I finished it in 
                                    December 2020, not having enough discipline and commitment to make 
                                    efficient progress.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>June 2019</h1>
                                <p>I started experimenting with charts and trading strategies. With the 
                                    advice of Elder, I built my own watchlist and started applying 
                                    indicator and pattern-recognition techniques.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>March 2020</h1>
                                <p>With the COVID-19 recession and stock market plummet, I committed myself
                                    to trading and started recording actual paper trades based on technical 
                                    analysis. From March to August, I experimented with many moving averages
                                    and bottom-pane indicators. My indicators have largely remained unchanged
                                    since August 2020, although my strategy has always been evolving. 
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>June 2020</h1>
                                <p>I opened a $10,000 Investopedia paper account to better facilitate my risk-
                                    management, and I started monitoring the markets on a daily basis. 
                                    In July 2020, I also opened an Interactive Brokers paper account, which I 
                                    reset to $10,000 in August for more realistic monetary numbers. In August 
                                    2020, I closed out my initial Investopedia account and turned my focus 
                                    solely to Interactive Brokers.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>December 2020</h1>
                                <p>My dad offered a brokerage account on TD Ameritrade, which I 
                                    enthusiastically accepted. I closed out the Interactive Brokers account.
                                    Aggregated from my Investopedia, Interactive Brokers, and TD Ameritrade 
                                    accounts, I produced a year-end return of 38.54% (from June 2020). 
                                    This return outpaced the Dow Jones Industrial Average, NASDAQ Composite, 
                                    and S&P 500.    
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>December 2021</h1>
                                <p>After a full year of mostly-smooth trading, I generated a 21.40% annual 
                                    return, which outpaced the Dow and NASDAQ but lagged the S&P 500. My year-
                                    to-date return peaked in mid-November 2021, which was at 33%. Even though 
                                    the overall market was still bullish towards the end, I started to feel
                                    the initial shakiness of my skills.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>January 2022</h1>
                                <p>In addition to the onset of the bear market, my personal life deteriorated
                                    and I started going through prolonged depression. I directed my frustration
                                    and vulnerability toward expanding my horizons in stocks. I started taking
                                    paper notes of my watchlist on a daily basis. I was experiencing 
                                    significant self-esteem and emotional health issues, so most of my efforts 
                                    were futile attempts to establish relevance and progress to be proud of.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>February 2022</h1>
                                <p>I launched my paper fund on Interactive Brokers, starting with $200,000. 
                                    Managing two accounts gave me greater flexibility in my choices, and it 
                                    made trading more frequent. I started focusing more on porfolio composition
                                    and explored longer investment timeframes. I also turned my paper 
                                    journal into an online document. I updated it daily and started discussing 
                                    personal and market developments in addition to watchlist patterns. I 
                                    also started drafting ideas for my custom indicators, which I believed
                                    could better capture market dynamics.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>February-Late 2022</h1>
                                <p>I worked hard to expand my knowledge. I read many books in the span of 
                                    months, including <i>One Up on Wall Street</i> and <i>Beating the Street </i>
                                    by Peter Lynch. I additionally read <i>The Master Swing Trader</i> by Alan 
                                    Farley, as well as <i>The New Trading for a Living</i> by Alexander Elder, 
                                    along with some of his shorter publications. I also completed many online
                                    courses, including <i>Financial Markets</i> taught by Yale Professor
                                    Robert Shiller, a bunch of Fintech courses, an options securities course, 
                                    and a Microeconomics course on Coursera.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>March 2022</h1>
                                <p>I started coding to develop projects that could benefit my stocks analysis.
                                    My first approach was to design a chart of QQQ, which I struggled with. My 
                                    programming skills were rusty, so I turned my focus to economics. I became
                                    obsessed with the Federal Reserve. Inflation and other economic concerns 
                                    brought my attention to the broader financial markets, where I developed
                                    strong foundations in.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>Summer 2022</h1>
                                <p>I began to pay attention to the market as a whole. I studied sectors 
                                    and designed a "Master List" spreadsheet of over 560 stocks categorized 
                                    by sector, which I used as a dataset for future projects. I also learned
                                    about reading balance sheets and developed foundations in fundamental 
                                    analysis.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>July 2022</h1>
                                <p>I launched my first Website, <i>Dark Horse of Wall Street</i> ,
                                using Wordpress. No coding was involved, but I moved my records into the blog
                                and worked on its features for the remainder of the year. 
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>August 2022</h1>
                                <p>I began developing a screener project in Python to help analyze patterns for
                                    hundreds of stocks. I experimented with many setups before completing it in 
                                    December 2022. The screener utilizes the Master List database I finished in 
                                    July and sifts through the 560+ stocks in minutes. 
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>December 2022</h1>
                                <p>During the waning days of 2022, I worked hard to incorporate both my screener
                                    and individual knowledge to create a new system for sustainable trading. 
                                    As the culmination of achivements in a wildly productive year, I created 
                                    a stock evaluation system that allows me to manually track around 120 
                                    stocks on a rotating basis. The screener analyzes the other stocks 
                                    (excluding Materials and Utilities since I do not track the sectors) and 
                                    spits out tickers that I can manually confirm and put orders in.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>December 2022</h1>
                                <p>Regrettably, I finished the year with a -50.47% return on my TD Ameritrade 
                                    account, and I ended with a -31.41% return on my Interactive Brokers paper 
                                    account. However, I believe the struggles of 2022 helped build the 
                                    foundations for future success.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>January 2023</h1>
                                <p>After a few days of experimentation, I settled into my new trading system and
                                    created a program to write the screener results into a daily pdf report (it
                                    was previously printed in the console). I also began working on a new and
                                    improved website to store my records and share my journey!
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='TimelineContent'>
                                <h1>April 2023???</h1>
                                <p>I hopefully will be able to launch the second website of  
                                    <i> Dark Horse of Wall Street</i>! 
                                </p>
                            </div>
                        </li>
                    </ul>
                </Row>
            </Container>
        </div>
    )
};
export default AboutMe;
*/