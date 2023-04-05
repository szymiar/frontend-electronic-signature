import React, { useState } from 'react';

export function LoadSignedDocument() {
    const [file, setFile] = useState(null);

    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        try {
            const response = await fetch("http://localhost:8080/enveloped/verify-signature", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

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

    const handleSubmit2 = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", document);
        formData.append("signature", xades);
        try {
            const response = await fetch("http://localhost:8080/detached/verify-signature", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h4>Podpis XAdES - załaduj plik oraz cert xml</h4>
            <form onSubmit={handleSubmit2}>
                <input type="file" onChange={handleDocumentChange}/>
                <input type="file" onChange={handleXadesChange} />
                <button type="submit">Wyślij do sprawdzenia</button>
                <button type="reset">Anuluj</button>
            </form>
        </div>
    );
}