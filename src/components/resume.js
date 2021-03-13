import React, {Component} from 'react';
import { CardText, Card, Grid } from 'react-mdl';
import resume from '../assets/images/resume1AlecPic.png'
class Resume extends Component {
   
    render(){
        return(
            <div >
                 <div style={{width: '100%', margin: 'auto'}} >
               <Grid>
               <Card shadow={100} style={{width: '100%', height: '100%', textAlign: 'center', margin: 'auto'}}>
                   
                   <CardText col={12}>
                        <div className="">
                            
                            <img src={resume} alt="resume" className="resume-photo"/>
                        </div>
                   </CardText>
                  
                
                </Card>
                </Grid>  
                </div>
            </div>
        );
    }
}

export default Resume;