import React from 'react'
import { ChildImageContainer } from '../../Components/ChildImageContainer'
import { ImageContainer } from '../../Components/ImageContainer';
import BackIcon from '../../Assets/Icons/BackIcon';

export default function AddAChild() {
    return (
        <>
            <div className="add-child-container">
            <div className="add-child-header">
                    {/* <IoArrowBack className={styles.backIcon} onClick={handleBack} /> */}
                    <span className="add-child-backIcon"><BackIcon /></span>
                    <div className="add-child-header-content">
                        <h1 className="add-child-heading">For Whom You Are Purchasing?</h1>
                        <p>Choose a Sport for Your Child</p>
                    </div>
                </div>
            </div>
        </>
    )
}
