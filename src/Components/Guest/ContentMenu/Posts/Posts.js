import React from 'react';
import Post from './Post/Post';
import { Container, Row, } from 'react-grid-system';
import './Posts.css'

const Posts = (props) => {

    const cards = props.cardsData.length ? props.cardsData.map(d => {
        return (<Post
            key={d._id}
            title={d.title}
            about={d.text}
            img={d.imgUrl}
        />
        )
    }) : null

    return (

        <div className='posts'>
            <Container style={{ backgroundAttachment: "fixed" }}>
                <Row>
                    {cards}
                </Row>
            </Container>
        </div>
    );
}

export default Posts;