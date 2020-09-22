import React from 'react';
import Card from './Card/Card';
import { Container, Row } from 'react-grid-system';
import Spinner from '../../Spinner/Spinner';
import Background from '../../images/cards-bg.jpg';
import './Cards.css'

const Cards = ({ data, loading }) => {


    const cards = data.length ? data.map((d) => {
        console.log(d);
        return (
            <Card
                key={d._id}
                id={d.userId?d.userId._id:''}
                name={d.userId?d.userId.firstname:''}
                avatar={d.userId?d.userId.avatar:''}
                date={d.date.slice(0, 10)}
                title={d.title}
                img={d.imgUrl}
                about={d.text}
            />
        )
    }) : <p>no posts</p>


    const realCards = loading ? <Spinner /> : cards

    return (

        <div className='Cards' style={{backgroundImage: "url(" + Background +")"}}>
            <Container>
                <Row>
                    {realCards}
                </Row>
            </Container>
        </div>
    );
}

export default Cards;