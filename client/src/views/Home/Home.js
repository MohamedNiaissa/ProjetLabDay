import React from "react";
import Layout from "../../components/layout/Layout";
import HomeIntro from "../../components/others/HomeIntro";
import HomeSection from "../../components/others/HomeSection";
import HomeSectionDesc from "../../components/others/HomeSectionDesc";
import { homeData } from "../../utils/json/HomeData";
import { useEffect } from "react";
import { smoothAnimation } from "../../utils/functions/Functions";

const { intro, desc, sell, give, discard } = homeData;

const Home = () => {
    useEffect(smoothAnimation, []);

    return (
        <Layout>
            <main className="home" id="main-content">
                <HomeIntro  title={intro.title} text={intro.text} />

                <div id="pres" className="home-main">
                    
                    <HomeSectionDesc title={desc.title} text={desc.text}/>

                    <div className="func-main svg-bg">
                        <HomeSection title={sell.title} link={sell.link} img={sell.img} text={sell.text} />
                        <HomeSection title={give.title} link={give.link} img={give.img} text={give.text} />
                        <HomeSection title={discard.title} link={discard.link} img={discard.img} text={discard.text} />
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Home;