import React from 'react';
import Post from './Post/Post';
import { Container, Row, } from 'react-grid-system';
import './Posts.css'

const Posts = (props) => {

    const cards = props.cardsData.map(d => {
        return (<Post
            title={d.title}
            about={d.text}
            img={d.imgUrl}
            key={d._id}
        />
        )
    })

    return (

        <div className='posts'>
            <Container style={{ backgroundAttachment: "fixed" }} column="4">
                <Row>
                    {cards}
                </Row>
            </Container>
        </div>
    );
}

export default Posts;