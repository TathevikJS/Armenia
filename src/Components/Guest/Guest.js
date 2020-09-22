import React, { Component } from 'react';
import SideMenu from './SideMenu/Side';
import ContentMenu from './ContentMenu/ContentMenu';
import Background from '../../images/g-bg.jpg';
import './Guest.css'

class Guest extends Component {

    state = {
        avatar: '',
        username: '',
        firstname: '',
        lastname: '',
        coverImgUrl: '',
        email: '',
        info: '',
        data: []
    }


    fetchUserPost = async () => {
        try {
            const token = localStorage.getItem('token')
            const fetchedData = await fetch('https://arcane-ravine-80165.herokuapp.com/posts/user/' + this.props.match.params.id, {
                method: 'GET',
                headers: {
                    'auth-token': token
                }
            })
            const userData = await fetchedData.json()

            this.setState({
                data: userData,
                avatar: userData[0].userId.avatar,
                firstname: userData[0].userId.firstname,
                lastname: userData[0].userId.lastname,
                coverImgUrl: userData[0].userId.coverImgUrl
            })
            console.log(userData);

        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.fetchUserPost()
    }

    render() {
        return (
            <div className="photo" style={{backgroundImage: "url(" + Background +")"}}>
                <div className='profile'>
                    <SideMenu
                        avatar={this.state.avatar}
                        firstname={this.state.firstname}
                        lastname={this.state.lastname}
                        email={this.state.email}
                    />
                    <ContentMenu cardsData={this.state.data} />
                </div>
            </div>
        );
    }
}


export default Guest;