import React, { Component } from 'react';
import Home from './Components/Home/Home';
import Cards from './Components/Cards/Cards';
import Navbar from './Components/Navbar/Navbar';
import SignIn from './Components/Authentication/SignIn/SignIn';
import SignUp from './Components/Authentication/SignUp/SignUp';
import Profile from './Components/Profile/Profile';
import { Route, Switch } from 'react-router';
import Guest from './Components/Guest/Guest';
import './App.css'


class App extends Component {

  state = {
    cardsData: [],
    error: false,
    loading: false
  }

  fetchData = async () => {
    this.setState({ loading: true })
    try {
      const fetchedData = await fetch('https://arcane-ravine-80165.herokuapp.com/posts')
      const data = await fetchedData.json()
      console.log(data);
      this.setState(
        { cardsData: data, loading: false }
      )
    } catch (error) {
      this.setState({ error: true })
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cards' render={() =>
            <Cards
              loading={this.state.loading}
              data={this.state.cardsData}
              error={this.state.error} />} />
               {localStorage.token ?
            <Route path='/profile' component={Profile} />
            : null
          }
          <Route path='/SignIn' component={SignIn} />
          <Route path='/SignUp' component={SignUp} />
         
          <Route path='/guest/:id' component={Guest} />


        </Switch>
      </div>
    )
  }
}

export default App;