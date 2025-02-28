import React, {useState} from 'react'
import './style.css'
import Selected from '../../Assets/Icons/Selected'

export const ImageContainer = (props) => {
    const [isSelected, setIsSelected] = useState(false);

    function handleClick(){
        setIsSelected(prev=>!prev);
    }
    return (
        <>
            <div className={`container-border ${isSelected?'selected':''}`} onClick={handleClick}>
                <div className="image-container">
                {isSelected && (
                        <div className="svg-overlay">
                            <Selected />
                        </div>
                    )}
                    <img src={props.image} alt="Sample Image" />
                    <div className="overlay"><p className="overlay-text">{props.name}</p></div>
                </div>
            </div>
        </>
    )
}
