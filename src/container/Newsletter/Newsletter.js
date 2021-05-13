import {useEffect, useRef} from "react";
import SectionTitle from '../../components/SectionTitles/SectionTitle';
// import NewsletterForm from '../../components/Newsletter/NewsletterForm.jsx';
import Parallax from 'parallax-js';
import {Link} from "react-router-dom";


const Newsletter = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-bg-image section-padding-t110-b120 newsletter-section overlay-two" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/Get-started-today.jpg)`, backgroundSize: `cover`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 text-left">
                        <div className="newsletter-content">
                            <SectionTitle
                                titleOption="color-light text-center"
                                title="Get Started Today"
                                subTitle="QYSA Solutions always try to provide the best business solutions for the client to grow their business sharply and smoothly"
                            />
                            {/* <NewsletterForm mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" /> */}
                            
                        </div>
                        <div>
                        <Link className="btn get-started btn-primary btn-hover-secondary mx-auto mt-xl-8 mt-lg-8 mt-md-6 mt-4 mx-auto text-center" to={process.env.PUBLIC_URL + "/contact"}>Connect</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                    <img src={process.env.PUBLIC_URL + "/images/shape-animation/newsletter-shape.png"} alt="" />
                </span>
            </div>
        </div>
    )
}

export default Newsletter
