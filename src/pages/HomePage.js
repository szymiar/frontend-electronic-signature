import LogoutButton from "../keycloak/KeycloakLogout";
import React from "react";
import LoginButton from "../keycloak/KeyCloakLogin";
import UsernameDisplay from "../keycloak/UsernameDisplay";

function HomePage() {
    return (
        <>
            <h1 className={"header"}>System Podpisu Elektronicznego </h1>
            <LoginButton />
            <LogoutButton  />
            <UsernameDisplay  />
        </>
    );
}

export default HomePage;
