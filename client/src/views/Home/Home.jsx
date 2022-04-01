import { useEffect } from "react";
import { HomeIntro, HomeSection, HomeSectionDesc } from "../../components/~items";
import { homeData } from "../../utils/json/HomeData";
import { smoothAnimation } from "../../utils/functions/Functions";

const Home = () => {
    const { intro, desc, sell, give, discard, cardSell, cardGive, cardDiscard } = homeData;
    useEffect(smoothAnimation, []);

    return (
        <main className="home" id="main-content">
            <HomeIntro  title={intro.title} text={intro.text} />

            <div className="home-content" id="pres">
                
                <HomeSectionDesc title={desc.title} text={desc.text}/>

                <div className="service-wrapper svg-bg">
                    <HomeSection title={sell.title} link={sell.link} img={sell.img} text={sell.text} card={cardSell}/>
                    <HomeSection title={give.title} link={give.link} img={give.img} text={give.text} card={cardGive}/>
                    <HomeSection title={discard.title} link={discard.link} img={discard.img} text={discard.text} card={cardDiscard}/>
                </div>
            </div>
        </main>
    )
}

export default Home;