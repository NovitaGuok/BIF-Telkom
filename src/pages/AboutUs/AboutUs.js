import React from 'react';
import "./AboutUs.css"
import BannerResearch from 'assets/img/banner-penelitian.png'
import BannerField from 'assets/img/banner-bidang.png'
import Footer from '../../components/Footer/FooterOne'
import InfoDesktop from '../../views/Desktop/Info'
import InfoMobile from '../../views/Mobile/Info'

const AboutUs = () => {
    return (
        <div>
            <div className="banner-se">
                <img src={require('assets/img/banner-se.png')} alt="" className="img-fullwidth" />
            </div>
            <div className="banner-research">
                <img src={BannerResearch} alt="" className="img-fullwidth" />
            </div>
            <div className="banner-field p-5">
                <img src={BannerField} alt="" />
            </div>
            <div className="astrodivider">
                <div className="astrodividermask"></div>
            </div>
            <InfoDesktop />
            <InfoMobile />            
            <div className="astrodivider">
                <div className="astrodividermask"></div>
            </div>
            <button onClick={() => window.open("https:se.rg.telkomuniversity.ac.id/", "_blank")} className="btn-kk-se mb-5 mt-5">Website Kelompok Keahlian Software Engineering</button>
            <Footer />
        </div>

    )
}

export default AboutUs