import React, {useState} from 'react'
import './style.css';
import BackIcon from '../../Assets/Icons/BackIcon';
import NavbarCustom from '../../Components/NavbarCustom';
import PreferenceIcon from '../../Assets/Icons/PreferenceIcon';
import { ImageContainer } from '../../Components/ImageContainer';
import { Navigate, Link } from 'react-router-dom';

export const ListOfSports=()=>{
    const [isOneOnOneClicked, setIsOneOnOneClicked] = useState(true);
    const [isGroupClicked, setIsGroupClicked] = useState(false);
    function handleNavigation(){
        Navigate('/preferences');
    }

    const data = [{
        id: 1, name: 'Rugby', image: 'https://alphauniverseglobal.media.zestyio.com/Alpha-Universe-BTS-Sports-Portrait-Will-Ortiz-1.jpg',
    },{
        id: 2, name: 'Basketball', image: 'https://media.istockphoto.com/id/533909761/photo/basketball-player.jpg?s=612x612&w=0&k=20&c=CLF-Hr9BUtAaYcyUGYtJjByVCQnRMWmUrHBVhChg7CA=',
    },{
        id: 3, name: 'Football', image: 'https://media.istockphoto.com/id/522201885/photo/play-beautiful.jpg?s=612x612&w=0&k=20&c=eMmN4GE7VHDmJkx4wmN23C-HZ6ENqeMzovykng446v8=',
    },{
        id: 4, name: 'Tennis', image: 'https://media.istockphoto.com/id/491622200/photo/one-man-tennis-player-portrait.jpg?s=612x612&w=0&k=20&c=oHIMK6nT32HoBr5TQFV24IqZnJOOMY7B7H8OBQyOesQ=',
    },{
        id: 5, name: 'Swimming', image: 'https://images.pexels.com/photos/711187/pexels-photo-711187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },{
        id: 6, name: 'Cricket', image: 'https://i.pinimg.com/originals/a0/ee/6e/a0ee6ef9ed605f4836225709f8a5f9cd.jpg',
    },]

    function handleOneOnOneClick(){
        setIsOneOnOneClicked(true);
        setIsGroupClicked(false);
    }
    function handleGroupClick(){
        setIsOneOnOneClicked(false);
        setIsGroupClicked(true);
    }
    return (
        <>
            <NavbarCustom />
            <div className="sports-container">
                <div className="header">
                    {/* <IoArrowBack className={styles.backIcon} onClick={handleBack} /> */}
                    <span className="backIcon"><BackIcon /></span>
                    <div className="header-content">
                        <h1 className="heading">List of Sports</h1>
                        <p>Choose a Sport for Your Child</p>
                    </div>
                </div>
                <div className="filter-container">
                <div className="space-adjuster"></div>
                    <div className="buttons-container">
                    <button className={`filter-button ${isOneOnOneClicked?'clicked-btn':''}`} onClick={handleOneOnOneClick}>1-1</button>
                    <button className={`filter-button ${isGroupClicked?'clicked-btn':''}`} onClick={handleGroupClick}>Group</button>
                    </div>
                    <div className="preference-tab">
                    <Link to="/preferences">
                    <span><PreferenceIcon/></span>
                    <p>Change Preference</p></Link>
                    </div>
                </div>
                <div className="preferred-sports">
                    <h2>Showing Your Preferred Sports</h2>
                    <div className="preferred-sports-container">
                    {data.map((item,index)=>{
                            if(index % 2 === 0){
                            return(
                                <ImageContainer key={index} name={item.name} image={item.image}/>
                            )
                            }
                    })}
                        
                        
                    </div>
                </div>
                <div className="preferred-sports">
                    <h2>Other Sports We Have to Offer</h2>
                    <div className="preferred-sports-container">
                        {data.map((item,index)=>{
                            if(index % 2 !== 0){
                            return(
                                <ImageContainer key={index} name={item.name} image={item.image}/>
                            )
                            }
                    })}
                        
                    </div>
                </div>
                <button type="submit" className="p-submit-button">Proceed</button>
            </div>

        </>
    )
}
