import React, { Component } from 'react';
import ProgressBar from './ProgessBar';
export default class Languages extends Component {
    // déclaration de la base des langages et les frameworks
    state={
        Languages:[
            {id:1, value:"Javascript", xp:0.8},
            {id:2, value:"PHP", xp:0.5},
            {id:3, value:"Python", xp:0.5},
            {id:4, value:"Css", xp:0.5}
        ],
        Frameworks:[
            {id:1, value:"Bootstrap", xp:0.5},
            {id:2, value:"React", xp:0.5},
            {id:3, value:"Angular", xp:0.5},
            {id:4, value:"Scss", xp:0.5},
            {id:5, value:"CodeIgniter", xp:0.5},
            {id:6, value:"Django", xp:0.5}
        ],
        // CMS:[
        //     {id:1, value:"WordPress", xp:0.5},
        // ],
        // SGBG:[
        //     {id:1, value:"MySql", xp:0.5},
        // ]
    }
    render() {
        //les variables assigné aux états
        let {Languages, Frameworks,CMS,SGBD}= this.state;
        return (
            <div className="LanguagesFramworks">
                <ProgressBar
                Languages={Languages}
                className="LanguagesDisplay"
                title="Languages"
                 />
                 <ProgressBar
                 Languages={Frameworks}
                 title="Frameworks"
                 className="FrameworksDisplay"
                 />
                 {/* <ProgressBar
                 Languages={CMS}
                 className="CmsDisplay"
                 title="CMS"
                 />
                 <ProgressBar
                 Languages={SGBD}
                 className="SgbgDisplay"
                 title="SGBD"
                 /> */}
            </div>
        )
    }
}
