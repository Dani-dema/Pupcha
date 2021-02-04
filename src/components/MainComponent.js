import React, { Component } from 'react';
import Puzzle from 'react-image-puzzle';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponents';
import PuzzleComponent from './PuzzleComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
  render() {
    const HomePage = () => {
        return (
          <div className="home">
            <Home />
            </div>
        );
    }
      return ( 
        <div>
        
                 <Header />
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Redirect to="/home" />
                        </Switch>
                <Footer />     
                   </div>
      )
  }
}

export default Main;