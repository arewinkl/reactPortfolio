import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';
import avatar from '../assets/images/AvatarAl.png'

class Contact extends Component {
    render(){
        return(
            
         <div >
               <Grid className="landing-grid">
               
                  <Cell  col={6}>
                       
                
                    <div className="headline-text">
                            <h1>contact Information</h1>
                            <img src={avatar} alt="avatar" className="avatar-two"/>
                            
                      
                               
                    </div>
                    </Cell> 
                    
                    <Cell  col={6} style={{ fontFamily: 'Copperplate', color:'white', textAlign: 'left', padding:'4rem'}}>

                     <div className="item-contacts"> 
                    
                            <i className="fa fa-phone-square" aria-hidden="true"> 303-842-5715</i>
                            <i className="fa fa-envelope" aria-hidden="true"> Alecrewinkel@gmail.com</i>
                            <i className="fa fa-linkedin-square" aria-hidden="true"> Linked-In/ Alec Rewinkel</i>
                            <i className="fa fa-github-square" aria-hidden="true"> Github.com/arewinkl</i> 
                        
                    </div>

                    </Cell>
                  

                    
                  <Cell col={12}>
                    
                  <div className="bottom-text">
                            <p>
                                If you would like to learn more about my experience and schedule a phone or in-person meeting, please feel free to contact me by: |phone | email | linked-in | or github | 
                            </p>
                      
                               
                    </div>
                    
                  </Cell>
                  
                </Grid> 
          </div>
            
        );
    }
}

export default Contact;