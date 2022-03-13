import { useEffect } from "react";
import { HomeIntro, HomeSection, HomeSectionDesc } from "../../components/~items";
import { homeData } from "../../utils/json/HomeData";
import { smoothAnimation } from "../../utils/functions/Functions";

const Home = () => {
    const { intro, desc, sell, give, discard } = homeData;
    useEffect(smoothAnimation, []);

    return (
        <main className="home" id="main-content">
            <HomeIntro  title={intro.title} text={intro.text} />

            <div className="home-content" id="pres">
                
                <HomeSectionDesc title={desc.title} text={desc.text}/>

                <div className="service-wrapper svg-bg">
                    <HomeSection title={sell.title} link={sell.link} img={sell.img} text={sell.text} />
                    <HomeSection title={give.title} link={give.link} img={give.img} text={give.text} />
                    <HomeSection title={discard.title} link={discard.link} img={discard.img} text={discard.text} />
                </div>
            </div>
        </main>
    )
}

export default Home;