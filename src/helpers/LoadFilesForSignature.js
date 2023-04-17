import React, { useState } from 'react';

export function LoadDocumentForPadesSignature() {
    const [file, setFile] = useState(null);
    const [submitInfo, setSubmitInfo] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitInfo(event)
    }

    const handleReset = (event) => {
        setSubmitInfo(false)
        setFile(null)
    }

    function useSendFileToSign(event) {
        event.preventDefault();
        // Use the file variable for further processing, e.g. uploading to a server
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <input className={"input"} type="file" onChange={handleFileChange} />
                <br/><br/>
                <button className={"button"} type="submit">Wyślij do podpisania</button>
                <button className={"button"} type="reset" onClick={handleReset}>Anuluj</button>
            </form>
            {submitInfo && file && (
                <div>
                    <h4>Wysłano plik</h4>
                </div>
            )}
        </div>
    );
}


export function LoadDocumentForPadesVisibleSignature() {
    const [file, setFile] = useState(null);
    const [submitInfo, setSubmitInfo] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitInfo(event)
    }

    const handleReset = (event) => {
        setSubmitInfo(false)
        setFile(null)
    }

    function useSendFileToSign(event) {
        event.preventDefault();
        // Use the file variable for further processing, e.g. uploading to a server
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <input className={"input"} type="file" onChange={handleFileChange} />
                <br/><br/>
                <button className={"button"} type="submit">Wyślij do podpisania</button>
                <button className={"button"} type="reset" onClick={handleReset}>Anuluj</button>
            </form>
            {submitInfo && file && (
                <div>
                    <h4>Wysłano plik</h4>
                </div>
            )}
        </div>
    );
}


export function LoadDocumentForXadesSignature() {
    const [file, setFile] = useState(null);
    const [submitInfo, setSubmitInfo] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitInfo(event)
    }

    const handleReset = (event) => {
        setSubmitInfo(false)
        setFile(null)
    }

    function useSendFileToSign(event) {
        event.preventDefault();
        // Use the file variable for further processing, e.g. uploading to a server
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <input className={"input"} type="file" onChange={handleFileChange} />
                <br/><br/>
                <button className={"button"} type="submit">Wyślij do podpisania</button>
                <button className={"button"} type="reset" onClick={handleReset}>Anuluj</button>
            </form>
            {submitInfo && file && (
                <div>
                    <h4>Wysłano plik</h4>
                </div>
            )}
        </div>
    );
}