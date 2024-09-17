// Register.jsx

import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import FingerprintScanner from '../finger_model/index';
import './style.css';

const Register = () => {
    const [showScanner, setShowScanner] = useState(false);

    const handleCloseScanner = () => {
        setShowScanner(false);
    };

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img 
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" 
                            alt="Sample image"
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Login Here</p>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input 
                                    type="email" 
                                    id="form3Example3" 
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" 
                                />
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-3">
                                <input 
                                    type="password" 
                                    id="form3Example4" 
                                    className="form-control form-control-lg"
                                    placeholder="Enter password" 
                                />
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button 
                                    type="button" 
                                    data-mdb-button-init 
                                    data-mdb-ripple-init 
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                                    Login
                                </button>
                                <button 
                                    type="button"
                                    className="btn btn-success btn-lg mt-3"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                    onClick={() => setShowScanner(true)} // Show the scanner
                                >
                                    <i className="fas fa-fingerprint"></i> Register with Fingerprint
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account? <a href="#!" className="link-danger">Register</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#!" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            {/* Show Fingerprint Scanner if state is true */}
            {showScanner && <FingerprintScanner onClose={handleCloseScanner} />}
        </section>
    );
}

export default Register;
