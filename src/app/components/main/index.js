import React, {Component} from 'react';
import Link from 'react-router-dom/Link';
import Route from 'react-router-dom/Route';
import { renderRoutes } from 'react-router-config';


class Main extends Component {
  componentDidMount(){
      
      setTimeout(function(){
           var wrapper_loading =document.getElementById("loading")
           wrapper_loading.className= 'hidden';
          // setTimeout(function(){
          //     document.getElementById("loading_animation").className="moveBack";
           //},4000);
           
           var curtain_right =document.getElementById("curtain_right");
           var curtain_left =document.getElementById("curtain_left");
           setTimeout(function(){
               curtain_right.className="moveCurtainToright";
               curtain_left.className="moveCurtainToleft";
               setTimeout(function(){
                   
                    document.getElementById("curtain").className="moveCurtainToBack";
                },3000);
           },1000);
           
       }, 4000);
      /*
      setTimeout(function(){
           document.getElementById("obsessed").className="close fade-in";
           setTimeout(function(){
                document.getElementById("app").className="moveAppToTop";
               
            },7000);       
       },7000);
       setTimeout(function(){
           document.getElementById("loading").className="moveCurtainToBack";
       },17000);
       */
    
     /*
     setTimeout(function(){
           var wrapper_loading =document.getElementById("loading")
           wrapper_loading.className= 'hidden';
           var curtain_right =document.getElementById("curtain_right");
           var curtain_left =document.getElementById("curtain_left");
           setTimeout(function(){
               curtain_right.className="moveCurtainToright";
               curtain_left.className="moveCurtainToleft";
               
           },2000);
           
       }, 5000);
      
       setTimeout(function(){
        document.getElementById("curtain").className="moveCurtainToBack";
        
       },11000);
        
       setTimeout(function(){
            document.getElementById("obsessed").className="close fade-in";
        
       },9000);
       
       setTimeout(function(){
            document.getElementById("app").className="moveAppToTop";
        
       },20000);
       */
      
  }

  render() {
    return (
        
         <main className="mdl-layout__content">
            {renderRoutes(this.props.route.routes)}
         </main>
        
       
      /*
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">React Universal App (SSR + SW)</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <Link className="mdl-navigation__link" to="/home"> Home </Link>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">React Universal App (SSR + SW)</span>
          <nav className="mdl-navigation">
            <Link className="mdl-navigation__link" to="/home"> Home </Link>
          </nav>
        </div>
        <main className="mdl-layout__content">
          {renderRoutes(this.props.route.routes)}
        </main>
      </div>
      */
    );
  }
}

export default Main;