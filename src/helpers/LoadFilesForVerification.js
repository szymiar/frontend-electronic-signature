import React, { useState } from 'react';

export function LoadSignedDocument() {
    const [file, setFile] = useState(null);

    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Use the file variable for further processing, e.g. uploading to a server
    }

    return (
        <div>
            <h4>Podpis PAdES</h4>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Wyślij do sprawdzenia</button>
                <button type="reset">Anuluj</button>
            </form>
        </div>
    );
}

export function LoadSignedDocumentAndCertificate() {
    const [document, setDocument] = useState(null);
    const [xades, setXades] = useState(null);

    function handleDocumentChange(event) {
        setDocument(event.target.files[0]);
    }

    function handleXadesChange(event) {
        setXades(event.target.files[0])
    }

    function handleSubmit2(event) {
        event.preventDefault();
        // Use the file variable for further processing, e.g. uploading to a server
    }

    return (
        <div>
            <h5>Podpis XAdES - załaduj plik oraz cert xml</h5>
            <form onSubmit={handleSubmit2}>
                <input type="file" onChange={handleDocumentChange}/>
                <input type="file" onChange={handleXadesChange} />
                <button type="submit">Wyślij do sprawdzenia</button>
                <button type="reset">Anuluj</button>
            </form>
        </div>
    );
}