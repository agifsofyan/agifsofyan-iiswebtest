import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <>

            <div className="container-fluid info-color">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 col-lg-12 col-xs-12">

                        <div className="text-center">
                            <ul className="list-unstyled list-inline mt-4">

                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1 white" href="tel:+6281212408246">
                                        <i className="fa fa-phone mr-3"></i> +62 812 1240 8246
                                    </a>
                                </li>

                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1 white" href="mailto:sofyan.agif@outlook.com">
                                        <i className="fa fa-envelope mr-3"></i> sofyan.agif@outlook.com
                                    </a>
                                </li>

                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1 white" href="http://www.github.com/figa-Oz">
                                        <i className="fab fa-github mr-3"></i> github.com/figa-Oz
                                    </a>
                                </li>

                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1 white" href="http://www.bitbucket.org/Agif">
                                        <i className="fab fa-bitbucket"></i> bitbucket.org/Agif
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <hr style={{marginTop: "0"}} />

                <div className="row d-flex align-items-center">

                    <div className="col-md-12 col-lg-12 col-xs-12">

                        <p className="white-text text-center">
                            Copyright © 2020 &nbsp;
                            <strong>
                                <span className="white-text">
                                    Aprela Agif Sofyan
                                </span>
                            </strong>
                        </p>

                    </div>

                </div>
            </div>
            </>
        );
    }
}
