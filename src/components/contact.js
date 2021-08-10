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
                            <a href="tel:303-842-5715">
                            <i className="fa fa-phone-square" aria-hidden="true"> 303-842-5715</i>
                            </a>
                            <a href = "mailto: alecrewinkel@gmail.com">
                            <i className="fa fa-envelope" aria-hidden="true"> Alecrewinkel@gmail.com</i>
                            </a>
                            <a href="https://www.linkedin.com/in/alec-rewinkel-90a7a218b/" rel="noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"> Linked-In/ Alec Rewinkel</i>
                            </a>
                            <a href="https://github.com/arewinkl" rel="noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true"> Github.com/arewinkl</i> 
                            </a>

                        
                    </div>

                    </Cell>
                  

                    
                  <Cell col={12}>
                    
                  <div className="bottom-text">
                            <p>
                                If you would like to learn more about my experience and schedule a phone or in-person meeting, please feel free to contact me by: |
                                <a className="iconz" href="tel:303-842-5715">phone</a> |  
                                 <a className="iconz" href = "mailto: alecrewinkel@gmail.com">email</a> | 
                                <a className="iconz" href="https://www.linkedin.com/in/alec-rewinkel-90a7a218b/" rel="noreferrer" target="_blank">linked-in</a> | 
                                <a className="iconz" href="https://github.com/arewinkl" rel="noreferrer" target="_blank">github</a> | 
                            </p>
                      
                               
                    </div>
                    
                  </Cell>
                  
                </Grid> 
          </div>
            
        );
    }
}

export default Contact;