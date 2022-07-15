import React, { useState, useEffect } from 'react'
import Logo from 'assets/logo/logo-fif-side.png'
import "./FooterOne.css"
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaPinterest,
    FaYoutube,
    FaInstagram
} from 'react-icons/fa';

const FooterOne = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="footer">
            {/* Desktop */}
            <div className="container d-none d-lg-block">
                <div className="footer-logo justify-content-start d-flex mb-5">
                    <img src={Logo} alt="" className="footer-logo-img" />
                </div>
                <div className="footer-contact w-100 text-white d-flex flex-column text-start align-items-start mb-5">
                    <span className="w-100 fs-2 mb-5">CONTACT US</span>
                    <span className="w-100 text-left" style={{ fontSize: "12px" }}>
                        Gedung Panambulai <br />
                        Jl. Telekomunikasi No. 1,<br />
                        Terusan Buahbatu, Bojongsoang<br />
                        Bandung 40257, Indonesia
                    </span>
                </div>
                <div className="scroll-to-top d-none d-lg-block">
                    <div className="footer-line"></div>
                    {showButton && (
                        <button className="btn-scroll-to-top btn btn-default" onClick={scrollToTop}>TOP</button>
                    )}
                </div>
                <div className="justify-content-between text-white d-flex align-items-center">
                    <span style={{ fontSize: "12px" }}>© All rights reserved. Telkom University.</span>
                    <div className="d-flex">
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaFacebookF />
                        </div>
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaTwitter />
                        </div>
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaLinkedinIn />
                        </div>
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaPinterest />
                        </div>
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaYoutube />
                        </div>
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="container d-md-block d-lg-none">
                <div className="footer-logo justify-content-start d-flex mb-5">
                    <img src={Logo} alt="" className="footer-logo-img" />
                </div>
                <div className="footer-contact w-100 text-white d-flex flex-column text-start align-items-start mb-5">
                    <span className="w-100 fs-2 mb-5">CONTACT US</span>
                    <span className="w-100 text-left" style={{ fontSize: "12px" }}>
                        Gedung Panambulai <br />
                        Jl. Telekomunikasi No. 1,<br />
                        Terusan Buahbatu, Bojongsoang<br />
                        Bandung 40257, Indonesia
                    </span>
                </div>
                <div className="scroll-to-top d-none d-lg-block">
                    <div className="footer-line"></div>
                    {showButton && (
                        <button className="btn-scroll-to-top btn btn-default" onClick={scrollToTop}>TOP</button>
                    )}
                </div>
                <div className="d-flex flex-column justify-content-center text-white">
                    <span style={{ fontSize: "12px" }}>© All rights reserved. Telkom University.</span>
                    <div className="d-flex justify-content-center mt-4">
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaFacebookF />
                        </div>
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaTwitter />
                        </div>
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaLinkedinIn />
                        </div>
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaPinterest />
                        </div>
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaYoutube />
                        </div>
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FooterOne