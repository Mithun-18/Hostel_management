import React from 'react'

function Footer() {
    return (
        <div>
            
            <footer className="footer-distributed">

                <div className="footer-left">

                    <img className= "logo"src='mitklogo.png' width={75} height={60}></img>

                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>

                        <a href="#">About</a>

                        <a href="#">Contact</a>
                    </p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p>Moodlakatte Nagarathna Bhujanga Shetty Trust (Regd.) <br/>Moodlakatte, Kundapura Taluk Udupi District, Karnataka - 576217</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+91 9036021033</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:office@mitkundapura.com">office@mitkundapura</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>MIT Kundapura</span>
                        MITK offers a wide range of engineering programmes at undergraduate level and management program at post graduate level. It is located within the state-of-the-art campus at Moodlakatte, Kundapura in Karnataka.
                    </p>

                    <div className="footer-icons">

                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer