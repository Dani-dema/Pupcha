import React from 'react';

function Footer() {
    return (
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 offset-1 col-sm-2 punoi">
                <address>
                    <h6>Punoi:</h6>
                    <i className="fa fa-user fa-lg"></i>  Kristian Goshi<br />
                    <i className="fa fa-user fa-lg"></i>  Ramadan Dema<br />
                </address>          
                </div>
                <div className="col-7 col-sm-4 pranoi">
                    <h6>Pranoi: </h6>
                    <address>
                        <i className="fa fa-user-o fa-lg"></i> Edlira Martiri<br />
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <h6>Follow us: </h6>
                        <p> 
                        <a className="btn btn-social-icon " href="https://www.facebook.com/ramadan.dema.7"  target="_blank"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon" href="https://www.linkedin.com/in/%F0%9F%91%A8%E2%80%8D%F0%9F%92%BBramadan-dema-128b49193/"  target="_blank" ><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon " href="https://www.instagram.com/dani__dema/"  target="_blank"><i className="fa fa-instagram"></i></a>
                        <i style={{fontSize:"23px"}}> /</i>
                        <a className="btn btn-social-icon " href="https://www.facebook.com/kristian.goshi"  target="_blank" ><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon" href="https://www.linkedin.com/in/kristian-goshi-9b561a15b/"  target="_blank"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon " href="https://www.instagram.com/kristian_goshi/"  target="_blank"><i className="fa fa-instagram"></i></a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>© Copyright 2021 K.G & R.D</p>
                </div>
            </div>
        </div>
    </div>
    )

        ;
}
export default Footer;