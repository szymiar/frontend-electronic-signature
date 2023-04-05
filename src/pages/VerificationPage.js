import {LoadSignedDocument, LoadSignedDocumentAndCertificate} from "../helpers/LoadFilesForVerification";
import React from "react";


const VerificationPage = () => {
    return (
        <>
            <h1>Wybierz rodzaj podpisu do weryfikacji</h1>
            {/*<button onClick={LoadSignedDocument}>PAdES</button>*/}
            {/*<button onClick={LoadSignedDocumentAndCertificate}>XAdES</button>*/}
            <LoadSignedDocument />
            <LoadSignedDocumentAndCertificate />
        </>

    );
};

export default VerificationPage;
