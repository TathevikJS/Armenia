import React from 'react';
import { Avatar } from '@material-ui/core';
import { Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import './Card.css'


const Card = ({ name, date, avatar, img, title, about, id }) => {

    return (
        <Col sm={12} md={6} lg={4} xl={4} xxl={3}>
            <div className={`Card `}>
                <div className='info'>
                    <div className='avatar'>
                        <Avatar
                            alt=''
                            src={avatar}
                            width='100%'
                            height='100%' />
                    </div>
                    <div className='date'>
                        <Link to={'/guest/' + id}>
                            <p
                                style={{ height: "50%", marginBottom: "0", color: "white" }}>
                                <b>{name}</b>
                            </p>
                        </Link>
                        <p style={{ height: "50%" }} className='datesize'>{date}</p>
                    </div>
                </div>
                <div className='title'>
                    <p style={{ paddingLeft: "0" }} className="title">{title}</p>
                </div>
                <div className='about'>
                    <p className="caption post-details">{about}</p>
                </div>
                <div className='cardImg'>
                    <img
                        alt=''
                        src={img}
                        width='100%'
                        height='100%'
                        style={{ borderBottomLeftRadius: "5%", borderBottomRightRadius: "5%" }}
                    />
                </div>
            </div>
        </Col>
    )
}

export default Card;