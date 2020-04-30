import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

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
            <HashRouter  basename={'/'} >
     
     <Switch>
            {this.state.user ?
            (<Route  path = "/notes" render = {(props) => (
                <Dashboard {...props} currentUser={this.state.user} />
            )} />)
          : ( <Route  path = "/" component = {Home} />)
             }
           <Route exact  path="/new" component={NewNote} />
           <Route exact   path="/edit" component={NoteEdit} />
           <Route exact   path="/:noteKey" component={NoteDetails} />
          
           <Route exact   path="/example"component={NotFound} />
      
       </Switch>
      
</HashRouter>
      </div>  

    );
}
}

export default App;