import React, { useState } from 'react'
import './style.css';
import BackIcon from '../../Assets/Icons/BackIcon';
import NavbarCustom from '../../Components/NavbarCustom';
import PreferenceIcon from '../../Assets/Icons/PreferenceIcon';
import { ImageContainer } from '../../Components/ImageContainer';
import { Navigate, Link } from 'react-router-dom';

export const BuyPackages = () => {
    

    const data = [{
        id: 1, name: '1 Session', image: 'https://alphauniverseglobal.media.zestyio.com/Alpha-Universe-BTS-Sports-Portrait-Will-Ortiz-1.jpg',
    }, {
        id: 2, name: '5 Sessions', image: 'https://media.istockphoto.com/id/533909761/photo/basketball-player.jpg?s=612x612&w=0&k=20&c=CLF-Hr9BUtAaYcyUGYtJjByVCQnRMWmUrHBVhChg7CA=',
    }, {
        id: 3, name: '10 Sessions', image: 'https://media.istockphoto.com/id/522201885/photo/play-beautiful.jpg?s=612x612&w=0&k=20&c=eMmN4GE7VHDmJkx4wmN23C-HZ6ENqeMzovykng446v8=',
    }]

    return (
        <>
            <NavbarCustom />
            <div className="buy-packages-sports-container">
                <div className="buy-packages-header">
                    {/* <IoArrowBack className={styles.backIcon} onClick={handleBack} /> */}
                    <span className="buy-packages-backIcon"><BackIcon /></span>
                    <div className="buy-packages-header-content">
                        <h1 className="buy-packages-heading">Buy Sports Packages</h1>
                        <p>Choose a Sport Package for Your Child</p>
                    </div>
                </div>
                
                <div className="buy-packages-preferred-sports">
                    <h2>Basketball Packages</h2>
                    <div className="buy-packages-preferred-sports-container">
                        {data.map((item, index) => {
                            return (
                                <ImageContainer key={index} name={item.name} image="https://media.istockphoto.com/id/533909761/photo/basketball-player.jpg?s=612x612&w=0&k=20&c=CLF-Hr9BUtAaYcyUGYtJjByVCQnRMWmUrHBVhChg7CA=" />
                            )
                        })}


                    </div>
                </div>
                <div className="buy-packages-preferred-sports">
                    <h2>Soccer Packages</h2>
                    <div className="buy-packages-preferred-sports-container">
                        {data.map((item, index) => {
                            return (
                                <ImageContainer key={index} name={item.name} image="https://alphauniverseglobal.media.zestyio.com/Alpha-Universe-BTS-Sports-Portrait-Will-Ortiz-1.jpg" />
                            )
                        })}

                    </div>
                </div>
                <div className="buy-packages-preferred-sports">
                    <h2>Football Packages</h2>
                    <div className="buy-packages-preferred-sports-container">
                        {data.map((item, index) => {
                            return (
                                <ImageContainer key={index} name={item.name} image="https://media.istockphoto.com/id/522201885/photo/play-beautiful.jpg?s=612x612&w=0&k=20&c=eMmN4GE7VHDmJkx4wmN23C-HZ6ENqeMzovykng446v8=" />
                            )
                        })}

                    </div>
                </div>
                <button type="submit" className="p-submit-button">Proceed</button>
            </div>

        </>
    )
}
