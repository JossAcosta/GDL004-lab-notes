import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
// import NewNote from '../pages/newNote';
// import SingleNote from '../pages/noteDetails';
// import NoteEdit from '../pages/noteEdit';
// import NotFound from '../pages/notFound';



function App(){
    return (
        <BrowserRouter>
       
           <Switch>
             <Route exact path="/" component={Home} />   
         
               <Route exact path="/notes" component={Dashboard} />
              {/*   <Route exact path="/notes/new" component={NewNote} />
               <Route exact path="/notes/:noteId" component={SingleNote} />
               <Route exact path="/notes/:noteId/edit" component={NoteEdit} />
               <Route path= "#" component={NotFound} /> */}
          
           </Switch>
          
   </BrowserRouter>
    );
}
export default App;