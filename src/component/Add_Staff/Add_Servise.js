import Header from "../Header";
import Footer from '../footer';
import React from "react";

export default function Add_servise() {
    return (
        <section className="booking-section">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-4 col-lg-9 offset-lg-3">
                    <div className="section-title text-center">
                        <h3 className="color-72 fw-500">Book A Session Now</h3>
                        <p>Deliver Top Class Treatments In A Relaxing Environment.</p>
                    </div>

                    <div className="booking-wrapper mt-45">
                        <form action="#" method="post" className="clearfix">
                            <div className="single-input name">
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>

                            <div className="single-input phone">
                                <input type="text" name="phone" placeholder="Phone Number" />
                            </div>

                            <div className="single-input email">
                                <input type="email" name="email" placeholder="Email Address" required />
                            </div>

                            <div className="single-input date">
                                <input type="" name="date" id="booking-date" placeholder="DD/MM/YY" required />
                            </div>

                            <div className="single-input beauty-service clearfix">
                                <select className="wide" name="beauty-service" required>
                                    <option selected>Service</option>
                                    <option value="facial">Facials</option>
                                    <option value="nailCare">Nail Care</option>
                                    <option value="eyeCare">Eye Care</option>
                                    <option value="waxing">Waxing</option>
                                    
                                </select>
                            </div>

                            <div className="single-input beauty-expart clearfix">
                                <select className="wide" name="beauty-expart" required>
                                    <option selected>Location</option>
                                    <option value="sokhina">Noida</option>
                                    <option value="jorina">New Delhi</option>
                                    <option value="jerin">Gurugram</option>
                                    <option value="subrina">Mumbai</option>
                                </select>
                            </div>

                            <div className="single-input msg">
                                <textarea name="msg-area" cols="30" rows="4"
                                    placeholder="Your Message (Optional)"></textarea>
                            </div>
                            <button type="submit">Make a Reservation</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}