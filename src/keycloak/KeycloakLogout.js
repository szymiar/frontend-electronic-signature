import React from 'react';
import {useKeycloak} from "@react-keycloak/web";

function LogoutButton( ) {
    const { keycloak } = useKeycloak();

    const handleLogout = () => {
        window.accessToken = null
        keycloak.logout();
    };

    return (
        keycloak.authenticated &&
        <button style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={handleLogout}>
            Wyloguj
        </button>
    );
}

export default LogoutButton;