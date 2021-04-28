import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';
import avatar from '../assets/images/AvatarAl.png'

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
               <Grid className="landing-grid">
                   <Cell col={12}>
                       <img src={avatar} alt="avatar" className="avatar-img"/>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>
                            <p> HTML | CSS | JavaScript | React | Express | MySQL | MongoDB </p>

                            <div className="social-links">
                                {/* LinkedIn*/}
                                <a href="https://www.linkedin.com/in/alec-rewinkel-90a7a218b/" rel="noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                 {/* GitHub*/}
                                 <a href="https://github.com/arewinkl" rel="noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                 {/* Twitter*/}
                                 <a href="http://google.com" rel="noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>
                                 {/* FreeCodeCamp*/}
                                 <a href="http://google.com" rel="noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                   </Cell>
                </Grid> 
            </div>
        );
    }
}

export default Landing;