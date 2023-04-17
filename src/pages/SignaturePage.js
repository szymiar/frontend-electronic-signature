import React, {useState} from 'react';
import '../styles/SignaturePageStyle.css';
import {LoadDocumentForPadesSignature, LoadDocumentForPadesVisibleSignature,
    LoadDocumentForXadesSignature} from "../helpers/LoadFilesForSignature";
import {SignaturePageFAQ} from "../helpers/FAQ";

function SignaturePage() {
    const [selectedOption, setSelectedOption] = useState(null);

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

    return (
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
            <SignaturePageFAQ />
        </>
    );
}

export default SignaturePage;
