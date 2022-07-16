import Logo from 'assets/logo/logo-telyu.png'
import "./FooterTwo.css"
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram
} from 'react-icons/fa';

const FooterTwo = () => {
    return (
        <div className="footer">
            {/* Desktop */}
            <div className="container d-lg-block d-none">
                <div className="row">
                    <div className="footer-logo justify-content-start d-flex mb-5 col">
                        <img src={Logo} alt="" className="footer-logo-img" />
                    </div>
                    <div className="footer-contact w-100 text-white d-flex flex-column text-start align-items-start mb-5 col">
                        <span className="text-12 fs-2 mb-4">CONTACT US</span>
                        <span className="text-12 text-left mb-3">
                            Gedung Panambulai <br />
                            Jl. Telekomunikasi No. 1,<br />
                            Terusan Buahbatu, Bojongsoang<br />
                            Bandung 40257, Indonesia
                        </span>
                        <span className="text-12">
                            Tel: (022) 7565931 <br />
                            Email: sekpimsoc@telkomuniversity.ac.id
                        </span>
                    </div>
                    <div className="text-12 footer-links text-white col row text-start">
                        <span className="fs-2 d-flex">LINKS</span>
                        <span className="d-flex">
                            Tel-U<br />
                            Careers<br />
                            Aplying<br />
                            Giving
                        </span>
                    </div>
                    <div className="text-white text-start text-12 col d-flex">
                        <span>
                            3C (Computing Certification Center)<br />
                            Research Center : Humic<br />
                            Hall of Fame<br />
                            SOC Press
                        </span>
                    </div>
                </div>
                <div className="footer-line-two"></div>
                <div className="justify-content-between text-white d-flex align-items-center d-flex-md mt-5">
                    <span style={{ fontSize: "12px" }}>© All rights reserved. Telkom University.</span>
                    <div className="d-flex">
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaFacebookF />
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
                <div className="d-flex flex-column">
                    <div className="footer-logo justify-content-start d-flex mb-5 col">
                        <img src={Logo} alt="" className="footer-logo-img" />
                    </div>
                    <div className="footer-contact w-100 text-white d-flex flex-column text-start align-items-start mb-5 col">
                        <span className="text-12 fs-2 mb-4">CONTACT US</span>
                        <span className="text-12 text-left mb-3">
                            Gedung Panambulai <br />
                            Jl. Telekomunikasi No. 1,<br />
                            Terusan Buahbatu, Bojongsoang<br />
                            Bandung 40257, Indonesia
                        </span>
                        <span className="text-12">
                            Tel: (022) 7565931 <br />
                            Email: sekpimsoc@telkomuniversity.ac.id
                        </span>
                    </div>
                    <div className="text-12 footer-links text-white col row text-start">
                        <span className="fs-2 d-flex">LINKS</span>
                        <span className="d-flex">
                            Tel-U<br />
                            Careers<br />
                            Aplying<br />
                            Giving
                        </span>
                    </div>
                    <div className="text-white text-start text-12 col d-flex">
                        <span>
                            3C (Computing Certification Center)<br />
                            Research Center : Humic<br />
                            Hall of Fame<br />
                            SOC Press
                        </span>
                    </div>
                </div>
                <div className="footer-line-two mt-4"></div>
                <div className="d-flex flex-column text-white d-flex align-items-center d-flex-md mt-5">
                    <span style={{ fontSize: "12px" }}>© All rights reserved. Telkom University.</span>
                    <div className="d-flex mt-4">
                        <div className="social-media-icon border border-light border rounded-3 align-items-center justify-content-center d-flex me-3">
                            <FaFacebookF />
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

export default FooterTwo