import React, {useState} from 'react';
import '../styles/SignaturePageStyle.css';
import {LoadDocumentForPadesSignature, LoadDocumentForPadesVisibleSignature,
    LoadDocumentForXadesSignature} from "../helpers/LoadFilesForSignature";
import {SignaturePageFAQ} from "../helpers/FAQ";
import LogoutButton from "../keycloak/KeycloakLogout";
import {useKeycloak} from "@react-keycloak/web";
import HomePage from "./HomePage";
import UsernameDisplay from "../keycloak/UsernameDisplay";

function SignaturePage({previousPage}) {
    const { keycloak, initialized } = useKeycloak();
    const [selectedOption, setSelectedOption] = useState(null);

    if (!initialized) {
        return <div>Loading keycloak</div>;
    }

    if (!keycloak.authenticated && previousPage === window.location.href) {
        window.location.href = '/'
        return <HomePage />
    }

    if (!keycloak.authenticated && previousPage !== window.location.href) {
        keycloak.login();
    }

    if (keycloak.authenticated) {
        window.accessToken = keycloak.token;
    }

    const handleOptionSelect = (event) => {
        setSelectedOption(event.target.value);
        handleButtonClick();
    };

    function handleButtonClick() {
        switch(selectedOption) {
            case 'pades':
                return (
                    <LoadDocumentForPadesSignature />
                )
            case 'xades':
                return (
                    <LoadDocumentForXadesSignature />
                )
            case 'pades-visible':
                return (
                    <LoadDocumentForPadesVisibleSignature />
                )
            default:
                break;
        }
    }

    return keycloak.authenticated && (
        <>
            <h1 className="header">Wybierz odpowiedni podpis</h1>
            <div style={{ textAlign: 'center' }}>
                <select  style={{ fontSize: '20px', padding: '6px', textAlignLast: 'center'}} value={selectedOption} onChange={handleOptionSelect}>
                    <option value="" style={{textAlignLast: 'center'}}>-</option>
                    <option style={{textAlignLast: 'center'}} value="pades">PAdES</option>
                    <option style={{textAlignLast: 'center'}} value="pades-visible">PAdES widoczny</option>
                    <option style={{textAlignLast: 'center'}} value="xades">XAdES</option>
                </select>
            </div>
            {selectedOption && (
                handleButtonClick()
            )}
            <LogoutButton  />
            <UsernameDisplay  />
            <SignaturePageFAQ />
        </>
    );
}

export default SignaturePage;
