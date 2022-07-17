import React from 'react';
import "./AboutUs.css"
import BannerResearch from 'assets/img/banner-penelitian.png'
import BannerField from 'assets/img/banner-bidang.png'
import Footer from '../../components/Footer/FooterOne'
// import InfoDesktop from '../../views/Desktop/Info'
// import InfoMobile from '../../views/Mobile/Info'

const AboutUs = () => {
    return (
        <div>
            <div className="banner-se">
                <img src={require('assets/img/banner-se.png')} alt="" className="img-fullwidth" />
            </div>
            <div className="banner-research">
                <img src={BannerResearch} alt="" className="img-fullwidth" />
            </div>
            <div className="banner-field p-lg-5">
                <img src={BannerField} alt="" />
            </div>
            <div className="astrodivider">
                <div className="astrodividermask"></div>
            </div>
            {/* <InfoDesktop />
            <InfoMobile />             */}
            {/* Desktop */}
            <div className="d-none d-lg-block">
                <div className="main-wrapper justify-content-center d-flex">
                    <div className="justify-content-center">
                        <span className="carousel-title fs-3">KEGIATAN</span>
                        <div className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner mx-auto">
                                <div className="carousel-item active">
                                    <img src={require('assets/img/k1.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/k2.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/k3.png')} className="d-block w-100" alt="..." />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="justify-content-center">
                        <span className="carousel-title fs-3">KERJASAMA</span>
                        <div className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner mx-auto">
                                <div className="carousel-item active">
                                    <img src={require('assets/img/BUT.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/unpad.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/TNI-AL.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/perikanan.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/lipi.jpg')} className="d-block w-100" alt="..." />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="justify-content-center">
                        <span className="carousel-title fs-3">ANGGOTA</span>
                        <div className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner mx-auto">
                                <div className="carousel-item active">
                                    <img src={require('assets/img/aristyo-300x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/ayu-1-297x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/dana-2-300x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/danang-298x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/eko-298x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/flo-294x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/jati-300x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/johan-296x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/mira-297x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/monterico-297x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/nugki-297x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/reska-297x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/sinta-300x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/suci-300x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/vero-296x300.png')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('assets/img/yudi-296x300.png')} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="d-flex justify-content-center row d-md-block d-lg-none m-0" >
                <div className="col-md-12">
                    <span className="carousel-title fs-1">KEGIATAN</span>
                    <div className="carousel slide justify-content-center d-flex" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={require('assets/img/k1.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/k2.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/k3.png')} className="d-block w-100" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-12">
                    <span className="carousel-title fs-1">KERJASAMA</span>
                    <div className="carousel slide justify-content-center d-flex" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={require('assets/img/BUT.jpg')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/unpad.jpg')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/TNI-AL.jpg')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/perikanan.jpg')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/lipi.jpg')} className="d-block w-100" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-12">
                    <span className="carousel-title fs-1">ANGGOTA</span>
                    <div className="carousel slide justify-content-center d-flex" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={require('assets/img/anisa.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/aristyo-300x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/ayu-1-297x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/dana-2-300x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/danang-298x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/eko-298x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/flo-294x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/jati-300x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/johan-296x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/mira-297x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/monterico-297x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/nugki-297x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/reska-297x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/sinta-300x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/suci-300x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/vero-296x300.png')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('assets/img/yudi-296x300.png')} className="d-block w-100" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="astrodivider">
                <div className="astrodividermask"></div>
            </div>
            <button onClick={() => window.open("https:se.rg.telkomuniversity.ac.id/", "_blank")} className="btn-kk-se mb-5 mt-5">Website Kelompok Keahlian Software Engineering</button>
            <Footer />
        </div>

    )
}

export default AboutUs