import React from 'react';
import { NavLink } from 'react-router-dom';



const Nav = () => {
    return (
    
        <div className="sidebar">
            {/* Mise en place de la photo du profil et le nom */}
            <div className="id">
                <div className="idcontent">
                    <img src ="./media/photo.jpg" alt="my-pic" height="150" width="150"  />
                    <h3>Boubacar DIALLO</h3>
                </div>
            </div>
            {/**Mise en place des liens de navigations */}
                <div className="navigation">
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="navActive">
                                <i className="fas fa-home"></i>
                                <span>Accueil</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Competences" exact activeClassName="navActive">
                                <i className="fas fa-mountain"></i>
                                <span>Compétences</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Portfolio" activeClassName="navActive">
                                <i className="fas fa-images"></i>
                                <span>Portfolio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact" activeClassName="navActive">
                                <i className="fas fa-address-book"></i>
                                <span>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/**Mise en place des liens des reseaux sociaux*/}
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/Dibouba" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Boubaca45543249" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://app.slack.com/client/T01RVET57BJ/C01RBQTCXD2" target="_blank" rel="noopener noreferrer"><i className="fab fa-slack"></i></a>
                        </li>
                    </ul>
                    
                    {/**le copyright et l'année d'édition*/}
                    <div className="signature">
                        <p>Boubacar DIALLO-2021</p>
                    </div>
              </div> 
       </div>
    );
};

export default Nav;