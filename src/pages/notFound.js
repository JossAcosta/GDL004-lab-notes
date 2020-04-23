import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import './styles/dashboard.css';
import SingleNote from '../components/singleNote';

class NotFound extends Component {
   
  constructor(props){
      super(props)
      this.state={
        user:'',
      }
      console.log('1.Constructor')
  }
  componentDidMount(){
      console.log('3.ComponentDimoount')
      
      setTimeout(()=>{
        this.setState({user:'Bienvenido'})
      }, 4000)
  }
  componentDidUpdate(){
      console.log('5.ComponentDidUpdate')
      console.log({props: this.props,
    state: this.state})
  }
  componentWillUnmount(){
      console.log('6.componentWillUnmount')
  }
    render(){   
     console.log('2/4.render')
        return (
           
           <div className="body_dashboard"> 
                <Navbar />
                <div className="container-fluid">

                <div className="row"> 
                {/* {this.state.user ?(
                        <p>{this.state.user}</p>
                    ) : null } */}
                     <p>{this.state.user}</p>
                    </div>
                </div>
              
           </div>
        );
    }
    
}
    
   export default NotFound;