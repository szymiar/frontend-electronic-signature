import React, { useState } from 'react';

export function LoadDocumentForPadesSignature() {
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
                <button type="submit">Wyślij do podpisania</button>
                <button type="reset">Anuluj</button>
            </form>
        </div>
    );
}


export function LoadDocumentForPadesVisibleSignature() {
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
            <h4>Podpis PAdES - widoczny</h4>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Wyślij do podpisania</button>
                <button type="reset">Anuluj</button>
            </form>
        </div>
    );
}


export function LoadDocumentForXadesSignature() {
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
            <h4>Podpis XAdES</h4>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Wyślij do podpisania</button>
                <button type="reset">Anuluj</button>
            </form>
        </div>
    );
}