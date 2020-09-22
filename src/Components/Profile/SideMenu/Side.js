import React from 'react';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PostUpload from '../ContentMenu/Posts/PostUpload/PostUpload';
import { Link } from 'react-router-dom';
import SimpleModal from '../UI/Modal/Modal';
import './Side.css'




const SideMenu = (props) => {
    console.log(props);

    const body = <PostUpload
        postUpload={props.postUpload}
        errorMessage={props.errorMessage} />

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

                <Link to="#" data-toggle="modal" data-target="#PostModal" style={{ color: 'white' }} onClick={props.handleOpen}>
                    <ListItem button>
                        <ListItemIcon>
                            < AddBoxOutlinedIcon htmlColor='white' />
                        </ListItemIcon>
                        <ListItemText primary="CREATE POST" />
                    </ListItem>

                </Link>
                <SimpleModal
                    open={props.open}
                    handleClose={props.handleClose}
                    body={body}
                />

                <Link to="/" style={{ color: 'white' }}>
                    <ListItem button onClick={() => localStorage.removeItem('token')}>
                        <ListItemIcon>
                            <ExitToAppIcon htmlColor='white' />
                        </ListItemIcon>
                        <ListItemText primary="SIGN OUT" />
                    </ListItem>
                </Link>


            </div>
        </div>
    );
}

export default SideMenu;