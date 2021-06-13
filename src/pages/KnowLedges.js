import React from 'react';
import Experiences from '../components/KnowLedges/Experiences';
import Hobbies from '../components/KnowLedges/Hobbies';
import Languages from '../components/KnowLedges/Languages';
import OtheSkills from '../components/KnowLedges/OtheSkills';
import Nav from '../components/Nav';


const KnowLedges = () => {
    return (
        <div className="knowledges">
            <Nav />
            <div className="knowledgesContent">
                <Languages />
                <Experiences />
                <OtheSkills />
                <Hobbies />
            </div>
           
           
            
            

            
        </div>
    );
};

export default KnowLedges;