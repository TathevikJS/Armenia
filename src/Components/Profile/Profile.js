import React, { Component } from 'react';
import SideMenu from './SideMenu/Side';
import ContentMenu from './ContentMenu/ContentMenu';
import Background from '../../images/profile-page-bg.jpg';
import './Profile.css'

class Profile extends Component {

    state = {
        avatar: '',
        username: '',
        firstname: '',
        lastname: '',
        coverImgUrl: '',
        email: '',
        info: '',
        data: [],
        open: false,
        errorMessage: null
    }


    handleOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }


    fetchUserData = async () => {
        try {
            const token = localStorage.getItem('token')
            const fetchedData = await fetch('https://arcane-ravine-80165.herokuapp.com/auth/profile', {
                method: 'GET',
                headers: {
                    'auth-token': token
                }
            })
            const userData = await fetchedData.json()

            this.setState({
                avatar: userData.avatar,
                username: userData.username,
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email,
            })
            console.log(userData);

        } catch (error) {
            console.log(error);
        }
    }



    fetchUserPost = async () => {
        try {
            const token = localStorage.getItem('token')
            const fetchedData = await fetch('https://arcane-ravine-80165.herokuapp.com/posts/profile', {
                method: 'GET',
                headers: {
                    'auth-token': token
                }
            })
            const userData = await fetchedData.json()

            this.setState({
                data: userData
            })
            console.log(userData);

        } catch (error) {
            console.log(error);
        }
    }


    //post upload

    postUpload = async (value) => {
        try {
            const fetchPostUpload = await fetch('https://arcane-ravine-80165.herokuapp.com/posts/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.token
                },
                body: JSON.stringify(value)
            })
            const data = await fetchPostUpload.json()
            if (data.error) {
                this.setState({ errorMessage: data.error })
            } else {
                this.setState({
                    data: [...this.state.data, value]
                })
                console.log(data);
                this.handleClose();
            }
        } catch (error) {
            this.setState({ errorMessage: 'something went wrong' })
        }
    }

    componentDidMount() {
        this.fetchUserData()
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
                        handleClose={this.handleClose}
                        handleOpen={this.handleOpen}
                        open={this.state.open}
                        errorMessage={this.state.errorMessage}
                        postUpload={this.postUpload}

                    />
                    <ContentMenu
                        cardsData={this.state.data} />
                </div>
            </div>
        );
    }
}


export default Profile;