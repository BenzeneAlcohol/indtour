import React from 'react'
import './contactus.scss'
function Contactus() {
    return (
        <div className="contact" id="contact">
            <div className="enclosure">
            <form className="form1">
                <h2 className="formheading">Contact us</h2>
                <div className="formele">
                    <input type="text" name="company-name" autocomplete="off" required/>
                    <label htmlFor="Company-name" className="label-name">
                        <span className="content-name">
                            Company Name
                        </span>
                    </label>
                </div>
                <span className="flname">
                    <div className="formele">
                        <input type="text" name="first-name" autocomplete="off" required/>
                        <label htmlFor="first-name" className="label-name">
                            <span className="content-name">
                                First Name
                            </span>
                        </label>
                    </div>
                    <div className="formele">
                        <input type="text" name="last-name" autocomplete="off" required/>
                        <label htmlFor="last-name" className="label-name">
                            <span className="content-name">
                                Last Name
                            </span>
                        </label>
                    </div>
                </span>
                <div className="formele">
                    <input type="number" name="contactnumber" autocomplete="off" required/>
                    <label htmlFor="contactnumber" className="label-name">
                        <span className="content-name">
                            Contact Number
                        </span>
                    </label>
                </div>
                <div className="formele">
                    <input type="text" name="emailid" autocomplete="off" required/>
                    <label htmlFor="emailid" className="label-name">
                        <span className="content-name">
                            Email Address
                        </span>
                    </label>
                </div>
                <div className="formele">
                    <input type="text" name="website" autocomplete="off" required/>
                    <label htmlFor="website" className="label-name">
                        <span className="content-name">
                            Website
                        </span>
                    </label>
                </div>
                <span className="flname">
                    <div className="formele">
                        <input type="text" name="City" autocomplete="off" required/>
                        <label htmlFor="City" className="label-name">
                            <span className="content-name">
                                City
                            </span>
                        </label>
                    </div>
                    <div className="formele">
                        <input type="text" name="State" autocomplete="off" required/>
                        <label htmlFor="State" className="label-name">
                            <span className="content-name">
                                State
                            </span>
                        </label>
                    </div>
                    <div className="formele">
                        <input type="number" name="Pincode" autocomplete="off" required/>
                        <label htmlFor="Pincode" className="label-name">
                            <span className="content-name">
                                Pincode
                            </span>
                        </label>
                    </div>
                </span>
                <button type="submit" className="formbtn1">SUBMIT</button>
            </form>
        </div>
    </div>
    )
}

export default Contactus
