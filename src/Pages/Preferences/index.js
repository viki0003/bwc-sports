import React from 'react'
import NavbarCustom from '../../Components/NavbarCustom'
import './style.css'

export default function Preferences() {
  return (
    <>
    <NavbarCustom/>
        <div class="p-container">
            <h2>Preferences</h2>
            <form className="p-sports-container">
                <h3>Sports</h3>
                <div className="p-sports-list">
                <div className="p-sport-item">
                    <input id="basketball" type="checkbox"/>
                    <label for="basketball">Basketball</label>
                </div>
                <div className="p-sport-item">
                    <input id="baseball" type="checkbox"/>
                    <label for="baseball">Baseball</label>
                </div>
                <div className="p-sport-item">
                    <input id="Football" type="checkbox"/>
                    <label for="Football">Football</label>
                </div>
                <div className="p-sport-item">
                    <input id="Rugby" type="checkbox"/>
                    <label for="Rugby">Rugby</label>
                </div>
                <div className="p-sport-item">
                    <input id="Volleyball" type="checkbox"/>
                    <label for="Volleyball">Volleyball</label>
                </div>
                </div>
                <button type="submit" className="preference-p-submit-button">Proceed</button>
            </form>
        </div>
    </>
  )
}
