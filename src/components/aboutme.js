import React, {Component} from 'react';
import { CardMedia, Cell, Grid,  } from 'react-mdl';
import alec from '../assets/images/Alec-Climbing.png.JPG'

class AboutMe extends Component {
    render(){
        return(
            <div className="alec-tabs">
                <Grid>
                        <Cell col={12}>
                                <CardMedia style={{width: '100%', height: '100%', textAlign: 'center', margin: 'auto', backgroundColor:'transparent'}}>
                                    <div >
                                        <img src={alec} alt="alec"/>
                                        </div>
                                </CardMedia>
                         </Cell>
                         <Cell col={12} >
                                <div>
                                    <h1 style={{textAlign:' center', fontSize:'105px', fontFamily:'copperplate', textShadow:'6px 6px #a8a7a7'}}>
                                        Personal & Professional Background</h1>
                                </div>
                         </Cell>
                            <Cell col={12} style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div >
                                    <p>
                                    &emsp; &emsp; My name is Alec Rewinkel, and I currently live in Denver, Colorado the same place where I was born and raised. I can't imagine growing up anywhere else. Colorado has so many amazing things to offer, especially if you are an outdoor enthusiast! when im not busy working, I love to get outside and enjoy all of the    amazing beauty that this wonderful state has to offer.
                                        I attended college at Colorado State University in Fort Collins, Colorado. While there I recieved a Bachelors in Science with a concentration in Sports Medicine, a Bachelors of Economics, and a minor in Business Administration. Needless to say I didn't have much free time while I was there, but I enjoyed every second of it.
                                        <br/>
                                        <br/>
                                        &emsp; &emsp; As far as my career, I had dedicated my time to being a personal trainer and helping my clients reach their health and fitness goals. This was an extremely rewarding job, because you get to show people what they are truly capable of when the put their mind to it. I have spent years keeping up and the newest research and training techniques that the health and science field has to offer. I absolutely love training myself and others but, this past year I found myself yearning for a new challenge, but wasn't sure how to take the leap. Then to everyone's surprise a global pandemic took place, the size of which we couldn't of imagined in our wildest dreams. Not being able to work, presented me with the opportunity to finally take that leap into coding.
                                        <br/>
                                        <br/>
                                        &emsp; &emsp; Well I absolutely took that leap and I couldn't be happier with the results, becoming a coder is something that I had thought about doing for years, but never knew where to began. I enrolled in a fullstack coding bootcamp at the University of Denver and began devouring as much coding information as I could get my hands on. The number one thing that I loved about being a personal trainer, was how much the job let me utilize my creative side. This pales in comparison to the amount of creativity that is not only used on a daily basis, but is actually encouraged in this field. I get to wake up every morning and try to solve new problems that my coding presents. The most exciting part of coding for me, is the way I solved a problem with my code monday, may be completely different then how I would solve it a month or a week later after I learn new techniques. 
                                        <br/>
                                        <br/>
                                        &emsp; &emsp;Challenging myself has always been important to me, I love to face new challenges and push myself into situations that are initialy uncomfortable because they are new. Colorado is an amazing state because it gives me the opportunity to challenge myself physically, and the great part about the field of web development is that it allows me to challenge myself mentally. I absolutely love codding and am extremely excited to be finally embarking on my career as a web developer!  
                                        <br/>
                                        
                                    </p>
                                </div>
                            </Cell>
                        
                       
                     </Grid>
            </div>
        );
    }
}

export default AboutMe;