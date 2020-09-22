import React from 'react';
import { Col } from 'react-grid-system';
import './Post.css'

const Post = (props) => {
    return (
        <Col>
            <div className='Post'>
                <div className="post_title" style={{ color: "black" }}>
                    <h3>{props.title}</h3>
                </div>

                <div className="post_about" style={{ color: "black" }}>
                    <p style={{ height: "100%", marginBottom: "0" }}>{props.about}</p>
                </div>

                <div className="post_img">
                    <img src={props.img}
                        alt=""
                        width='100%'
                        height='100%'
                        style={{ borderBottomLeftRadius: "5%", borderBottomRightRadius: "5%" }}></img>
                </div>
            </div>
        </Col>);
}

export default Post;  