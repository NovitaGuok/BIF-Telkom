import React from 'react';
import "./AboutUs.css"
import BannerSe from 'assets/img/banner-se.png'
import BannerResearch from 'assets/img/banner-penelitian.png'
import BannerField from 'assets/img/banner-bidang.png'

function AboutUs() {
    return (
        <div>
            <div className="banner-se">
                <img src={BannerSe} alt="" className="img-fullwidth" />
            </div>
            <div className="banner-research">
                <img src={BannerResearch} alt="" className="img-fullwidth" />
            </div>
            <div className="banner-field p-5">
                <img src={BannerField} alt="" />
            </div>
            <button onClick={() => window.open("https://se.rg.telkomuniversity.ac.id/", "_blank")} className="btn-kk-se mb-5">Website Kelompok Keahlian Software Engineering</button>
        </div>
    )
}

export default AboutUs