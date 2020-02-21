import React from 'react';

import './styles.css';

function Header(){
    return ( 
        <div id="header-main">
           <img src="https://i.imgur.com/KDIDiSE.png" width="100" />
           <div id="header-profile">
                <p>Meu Perfil</p>
                <i className="material-icons">account_circle</i>
           </div>
        </div>
    )
}

export default Header;
