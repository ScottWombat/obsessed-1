import React, {Component} from 'react';
import s from './hamburger.css';
import h from './home.css';
class Home extends Component {
     
     componentDidMount(){
         console.log('home1');
         
     }
     render() {
       return (
           <div>
           <p className={h.kudd}>This is my custom component</p>
           </div>)
     }
}

export default Home;
               
