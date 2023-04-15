import React from 'react';
import '../styles/SignaturePageStyle.css';
import {LoadDocumentForPadesSignature, LoadDocumentForPadesVisibleSignature,
    LoadDocumentForXadesSignature} from "../helpers/LoadFilesForSignature";

const SignaturePage = () => {
    return (
        <div className="container">
            <h1 className="header">Wybierz odpowiedni podpis</h1>
            {/*<button onClick={LoadSignedDocument}>PAdES</button>*/}
            {/*<button onClick={LoadSignedDocument}>PAdES widoczny</button>*/}
            {/*<button onClick={LoadSignedDocumentAndCertificate}>XAdES</button>*/}
            <LoadDocumentForPadesSignature />
            <LoadDocumentForPadesVisibleSignature />
            <LoadDocumentForXadesSignature />
        </div>

    );
};

export default SignaturePage;
