import React, {useState} from 'react'
import './style.css'
import Selected from '../../Assets/Icons/Selected'

export const ChildImageContainer = (props) => {
    const [isSelected, setIsSelected] = useState(false);

    function handleClick(){
        setIsSelected(prev=>!prev);
    }
    return (
        <>
            <div className={`child-container-border ${isSelected?'selected':''}`} onClick={handleClick}>
                <div className="child-image-container">
                {isSelected && (
                        <div className="child-svg-overlay">
                            
                        </div>
                    )}
                    <img src={props.image} alt="Sample Image" />
                    <div className="child-overlay"><p className="child-overlay-text">{props.name}</p></div>
                </div>
            </div>
        </>
    )
}

