import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import KnowUsContent from '../container/About/KnowUsContent';
import Team from '../container/Team/Team';
import Faq from '../container/Faq/Faq';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';


const AboutUs = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA Solutions || Know Us" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bgb.jpg"
                title="We are QYSA Solutions from Bengaluru"
                position="bottom"
                size="cover"
            />
            <KnowUsContent/>
            <Faq />
            <Team />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default AboutUs;



