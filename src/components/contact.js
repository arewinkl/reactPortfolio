import React, {Component} from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../assets/images/AvatarAl.png'

class Contact extends Component {
    render(){
        return(
            <div>
                 <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="landing-grid">
                  <Cell col={6}>
                       
                
                    <div className="headline-text">
                            <h1>contact Information</h1>
                            <img src={avatar} alt="avatar" className="avatar-two"/>
                            
                      
                               
                    </div>
                    </Cell> 
                    
                    <Cell  col={6}>
                     <div className="item-contacts">   
                    <List >
                        <ListItem>
                            <ListItemContent style={{fontSize: '40px', fontFamily: 'Copperplate', color:'white'}} >
                            <i className="fa fa-phone-square" aria-hidden="true" />
                                303-842-5715</ListItemContent>
                                        
                           
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '40px', fontFamily: 'Copperplate', color:'white'}}>

                            <i className="fa fa-envelope" aria-hidden="true" />
                            Alecrewinkel@gmail.com</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '40px', fontFamily: 'Copperplate',color:'white'}}>
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                            Linked-In/ Alec Rewinkel
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '40px', fontFamily: 'Copperplate', color:'white'}}>
                            <i className="fa fa-github-square" aria-hidden="true" />

                            github.com/arewinkl</ListItemContent>
                        </ListItem>
                        </List>
                        </div>   
                    </Cell>
                  
                  <Cell col={12}>
                  <div className="bottom-text">
                            <p>
                                If you would like to learn more about my experience and schedule a phone or in-person meeting, please feel free to contact me by: |phone | email| linked-in| or github| 
                            </p>
                      
                               
                    </div>
                  </Cell>
                </Grid> 
                </div>
            </div>
        );
    }
}

export default Contact;