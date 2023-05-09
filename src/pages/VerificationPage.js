import {LoadSignedDocument, LoadSignedDocumentAndCertificate} from "../helpers/LoadFilesForVerification";
import React, {useState} from "react";
import {VerificationPageFAQ} from "../helpers/FAQ";
import LoginButton from "../keycloak/KeyCloakLogin";
import LogoutButton from "../keycloak/KeycloakLogout";
import {useKeycloak} from "@react-keycloak/web";
import UsernameDisplay from "../keycloak/UsernameDisplay";

function VerificationPage() {
    const [selectedOption, setSelectedOption] = useState(null);
    const { keycloak } = useKeycloak();

    const handleOptionSelect = (event) => {
        setSelectedOption(event.target.value);
        handleButtonClick();
    };

    if (keycloak.authenticated) {
        window.accessToken = keycloak.token;
    }

    function handleButtonClick() {
        switch(selectedOption) {
            case 'pades':
                return (
                    <LoadSignedDocument />
                )
            case 'xades':
                return (
                    <LoadSignedDocumentAndCertificate />
                )
            default:
                break;
        }
    }

    return (
        <>
            <h1 className="header">Wybierz rodzaj podpisu do weryfikacji</h1>
            <div style={{ textAlign: 'center' }}>
                <select  style={{ fontSize: '20px', padding: '6px', textAlignLast: 'center'}} value={selectedOption} onChange={handleOptionSelect}>
                    <option value="" style={{textAlignLast: 'center'}}>-</option>
                    <option style={{textAlignLast: 'center'}} value="pades">PAdES</option>
                    <option style={{textAlignLast: 'center'}} value="xades">XAdES</option>
                </select>
            </div>
            {selectedOption && (
                handleButtonClick()
            )}
            <LoginButton />
            <LogoutButton  />
            <UsernameDisplay  />
            <VerificationPageFAQ />
        </>

    );
}

export default VerificationPage;
