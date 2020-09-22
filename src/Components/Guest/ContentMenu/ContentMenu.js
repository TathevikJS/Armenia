import React from 'react';
import Posts from './Posts/Posts';
import './ContentMenu.css'

const ContentMenu = (props) => {
    console.log(props);
    return (
        <div className='ContentMenu_guest'>
            <div className="glass">

                <Posts cardsData={props.cardsData} />

            </div>
        </div>
    );
}

export default ContentMenu;