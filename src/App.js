import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import fire from './firebase';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import NewNote from './pages/newNote';
import NoteDetails from './pages/noteDetails';
import NoteEdit from './pages/noteEdit';
import NotFound from './pages/notFound';

class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            user: null
        }
    }

componentDidMount()
{
    this.authListener();
}

authListener(props){
    fire.auth().onAuthStateChanged((user)=>{
        if(user){
            this.setState({user})
          
        } else {
            this.setState({user:null})
        }
    })
}
render(){
    return(
     
        <div>
            <BrowserRouter  >
     
     <Switch>
            {this.state.user ?
            (<Route exact path = "/notes" render = {(props) => (
                <Dashboard {...props} currentUser={this.state.user} />
            )} />)
          : ( <Route exact path = "/" component = {Home} />)
             }
           <Route exact path="/notes/new" component={NewNote} />
           <Route exact path="/notes/:noteKey" component={NoteDetails} />
           <Route exact path="/notes/:noteKey/edit" component={NoteEdit} />
           <Route component={NotFound} />
      
       </Switch>
      
</BrowserRouter>
      </div>  

    );
}
}

export default App;