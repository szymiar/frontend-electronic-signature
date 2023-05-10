import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "https://elkasymulacja.pl/auth/",
    realm: "elkasymulacja",
    clientId: "signature-frontend",
});

export default keycloak;
