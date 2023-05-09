import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8081",
    realm: "testRealm",
    clientId: "react-client",
});

export default keycloak;
