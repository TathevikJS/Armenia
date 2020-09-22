import React from 'react';
import './Side.css'

const SideMenu = (props) => {
    console.log(props);

    return (
        <div className='sideMenu'>
            <div className='profPicture'>
                <img src={props.avatar} alt="" style={{ width: "100px", borderRadius: "50%", marginTop: "40%", marginLeft: '15%' }}></img>
            </div>

            <div className='profAvatar'>
                <h1 style={{ padding: '0', margin: '0', marginTop: '20px', marginLeft: '15%', color: 'white' }}>
                    {props.firstname} <br></br> {props.lastname}
                </h1>
            </div>

            <div className='navigation' style={{ marginLeft: '10%' }}>

            </div>
        </div>
    );
}

export default SideMenu;