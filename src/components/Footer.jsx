import { addresses, companyName, email, phone } from "../constants";

function Footer(props) {
    return (
        <>
            <footer id="kontak" className="site-footer footer-dark">
                <div className="footer-top overlay-wraper">
                    <div className="overlay-main" />
                    <div className="container">
                        <div className="row">
                                <div className="widget widget_about">
                                <h2> <span className="site-text-primary">{companyName}</span></h2>
                                    <p>Logistik yang Terpercaya, Pengiriman yang Aman, bersama Mitra Insan Amanah</p>
                                    <ul>
                                        <li> <i className="fa fa-phone site-text-primary" /> <b className="p-lr5 text-uppercase">Tel :</b> {phone} </li>
                                        <li><i className="fa fa-envelope site-text-primary" /> <b className="p-lr5 text-uppercase">Email : </b>{email}</li>
                                        {addresses.map((item, index) => (
                                            <li key={index}>
                                                <i className="fa fa-location-arrow site-text-primary" />
                                                <b className="p-lr5 text-uppercase">
                                                    {item.name} :
                                                </b> {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
                {/* Footer Copyright Part */}
                <div className="footer-bottom overlay-wraper">
                    <div className="overlay-main" />
                    <div className="container p-t30">
                        <div className="mt-footer-bot-center">
                            <span className="copyrights-text">© 2024 {companyName}. All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;