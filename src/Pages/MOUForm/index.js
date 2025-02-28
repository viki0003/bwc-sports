import React from 'react';
import BackIcon from '../../Assets/Icons/BackIcon';
import './style.css';
import NavbarCustom from "../../Components/NavbarCustom";
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
// import { Calendar } from 'primereact/calendar';
// import { useEffect, useRef } from 'react';

const MOUForm = () => {
    // const handleBack = () => {
    //     window.history.back();
    // };
 

    return (
        <>
            <NavbarCustom />
            <div className="container">
                <div className="header">
                    {/* <IoArrowBack className={styles.backIcon} onClick={handleBack} /> */}
                    <span className="backIcon"><BackIcon/></span>
                    <h1 className="heading">BWC New Client / MOU Form</h1>
                </div>
                <div className="form-container">
                    <form>
                        <div className="form-package">
                            <h2>Package</h2>
                            <div className="form-package-input">
                                <input type="checkbox" id="checkbox1" name="1 on 1 (Fitness Personal Trainer) $70 a Class" value="Fitness Personal Trainer" />
                                <label for="checkbox1">1 on 1 (Fitness Personal Trainer) $70 a Class</label><br></br>
                            </div>
                            <div className="form-package-input">
                                <input type="checkbox" id="checkbox2" name="1 on 1 (Basketball, Track and Field, Soccer or Football, ONLY) $100 a Class" value="Basketball, track and field" />
                                <label for="checkbox2">1 on 1 (Basketball, Track and Field, Soccer or Football, ONLY) $100 a Class</label><br></br>
                            </div>
                            <div className="form-package-input">
                                <input type="checkbox" id="checkbox3" name="1 on 1 - Specialty (at home, sensory friendly, and ALL other sports) $150 a Class" value="Speciality Home" />
                                <label for="checkbox3">1 on 1 - Specialty (at home, sensory friendly, and ALL other sports) $150 a Class</label><br></br>
                            </div>
                            <div className="form-package-input">
                                <input type="checkbox" id="checkbox4" name="Ultimate Package $325" value="Ultimate pack" />
                                <label for="checkbox4">Ultimate Package $325</label><br></br>
                            </div>
                            <div className="form-package-input">
                                <input type="checkbox" id="checkbox5" name="Ultimate Package plus $425" value="Ultimate 425" />
                                <label for="checkbox5">Ultimate Package plus $425</label><br></br>
                            </div>
                            <div className="form-package-input">
                                <input type="checkbox" id="checkbox6" name="Basketball Monthly $119" value="Backetball Monthly 119" />
                                <label for="checkbox6">Basketball Monthly $119</label><br></br>
                            </div>
                            <div className="form-package-input">
                                <input type="checkbox" id="checkbox7" name="Soccer Monthly $119" value="Soccer monthly 119" />
                                <label for="checkbox7">Soccer Monthly $119</label><br></br>
                            </div>
                            <div className="form-package-input">
                                <input type="checkbox" id="checkbox8" name="Track and Field Monthly $119" value="Track monthly 119" />
                                <label for="checkbox8">Track and Field Monthly $119</label><br></br>
                            </div>
                            <div className="form-package-input">
                                <input type="checkbox" id="checkbox9" name="Football Monthly $119" value="Football monthly 119" />
                                <label for="checkbox9">Football Monthly $119</label><br></br>
                            </div>
                            <div className="form-package-input">
                                <input type="checkbox" id="checkbox10" name="BWC Bowling Group $60" value="Bowling group 60" />
                                <label for="checkbox10">BWC Bowling Group $60</label><br></br>
                            </div>
                        </div>
                        <div className="form-player-details">

                            <div className="form-player-item">
                                <label for="player-fullname">Player Full Name</label>
                                <InputText id="player-fullname" />
                            </div>
                            <div className="form-player-item">
                                <label for="player-address">Player Address</label>
                                <InputText id="player-address" />
                            </div>
                            <div className="form-player-item">
                                <label for="player-dob">Date of Birth of Player</label>
                                <InputText type="date" id="player-dob" />
                   
                            </div>
                        </div>
                        <div className="renewal-month">
                            <h2>Renewal Month</h2>
                            <div className="month-container">
                            <div className="row1">
                                <label className="month-label"><input type="radio" name="month" value="January" /> January</label>
                                <label className="month-label"><input type="radio" name="month" value="February" /> February</label>
                                <label className="month-label"><input type="radio" name="month" value="March" /> March</label>
                                <label className="month-label"><input type="radio" name="month" value="April" /> April</label>
                                <label className="month-label"><input type="radio" name="month" value="May" /> May</label>
                                <label className="month-label"><input type="radio" name="month" value="June" /> June</label>
                                </div>
                                <div className="row2">
                                <label className="month-label"><input type="radio" name="month" value="July" /> July</label>
                                <label className="month-label"><input type="radio" name="month" value="August" /> August</label>
                                <label className="month-label"><input type="radio" name="month" value="September" /> September</label>
                                <label className="month-label"><input type="radio" name="month" value="October" /> October</label>
                                <label className="month-label"><input type="radio" name="month" value="November" /> November</label>
                                <label className="month-label"><input type="radio" name="month" value="December" /> December</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-agency-details">
                            <div className="row-agency">
                                <div className="agency-details">
                                    <label for="agency-fi">Agency/FI</label><br/>
                                    <InputText id="agency-fi" />
                                </div>
                                <div className="agency-details">
                                    <label for="broker">Broker</label><br/>
                                    <InputText id="broker" />
                                </div>
                            </div>
                            <div className="row-agency">
                                <div className="agency-details">
                                    <label for="broker-phone">Broker Phone Number</label><br/>
                                    <InputText id="broker-phone" />
                                </div>
                                <div className="agency-details">
                                    <label for="broker-email">Broker Email</label><br/>
                                    <InputText id="broker-email" />
                                </div>
                            </div>
                            <div className="row-agency">
                                <div className="agency-details">
                                    <label for="parent-name">Parent Name</label><br/>
                                    <InputText id="parent-name" />
                                </div>
                                <div className="agency-details">
                                    <label for="parent-phone">Parent Phone Number</label><br/>
                                    <InputText id="parent-phone" />
                                </div>
                            </div>
                            <div className="row-agency">
                                <div className="agency-details">
                                    <label for="parent-email">Parent Email</label><br/>
                                    <InputText id="parent-email" />
                                </div>
                                <div className="agency-details">
                                    <label for="parent-signature">Parent Signature</label><br/>
                                    <InputText id="parent-signature" />
                                </div>
                            </div>
                        </div>
                        <button id="submit-button" type="submit">Proceed</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MOUForm;