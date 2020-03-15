import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import fire from './firebase';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import NewNote from './pages/newNote';
class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            user:{

            }
        }
    }

componentDidMount()
{
    this.authListener();
  }

authListener(){
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
        // <div>
        //     {this.state.user ? (<Dashboard />) : (<Home/>)}
        // </div>
        
       
        <div><BrowserRouter>
     
     <Switch>
                {this.state.user ?
            (<Route exact path = "/notes" component = {Dashboard} />)
        //     (<Dashboard />)
          :
         ( <Route exact path = "/" component = {Home} />)
            // ( <Home/>)
             
             }
       
             <Route exact path = "/notes" component = {Dashboard} />
           <Route exact path="/notes/new" component={NewNote} />
           {/* <Route exact path="/notes/:noteId" component={SingleNote} />
           <Route exact path="/notes/:noteId/edit" component={NoteEdit} />
           <Route path= "#" component={NotFound} /> */}
      
       </Switch>
      
</BrowserRouter>
      </div>  

    );
}
}

export default App;