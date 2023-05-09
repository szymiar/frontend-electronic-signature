import React, {useState} from 'react';
import {useKeycloak} from "@react-keycloak/web";
import "../styles/Username.css"

function UsernameDisplay( ) {
    const { keycloak } = useKeycloak();
    const [username, setUsername] = useState('');

    if (keycloak.authenticated) {
        keycloak.loadUserProfile().then((profile) => {
            setUsername(profile.username);
        });
    }

    return ( keycloak.authenticated &&
        <div className="app">
            <div className="username">Zalogowano jako : {username}</div>

        </div>
    );
}

export default UsernameDisplay;