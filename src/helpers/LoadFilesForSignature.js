import React, { useState } from 'react';
import FileSaver from 'file-saver';

const tok = window.accessToken

export function LoadDocumentForPadesSignature() {
    const [file, setFile] = useState(null);
    const [submitInfo, setSubmitInfo] = useState(null);
    const [token, setToken] = useState(tok);

    const handleFileChange = (event) => {
        setToken(window.accessToken);
        setFile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitInfo(event);
        // setToken(tok);
        sendFileToSign();
    }

    const handleReset = (event) => {
        setSubmitInfo(false)
        setFile(null)
        setToken(null)
    }

    const sendFileToSign = async () => {
        const formData = new FormData();
        formData.append('file', file);

        const headers = new Headers({
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        });

        const options = {
            method: 'POST',
            headers: headers,
            body: formData,
            mode: 'cors'
        };

        try {
            const response = await fetch('http://localhost:8080/enveloped/sign-document', options);
            const blob = await response.blob();
            FileSaver.saveAs(blob, file.name.slice(0, file.name.lastIndexOf(".")) + '_podpisany_dokument.pdf');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <input className={"input"} type="file" onChange={handleFileChange} />
                <br/><br/>
                <button className={"button"} type="submit">Wyślij do podpisania</button>
                <button className={"button"} type="reset" onClick={handleReset}>Wyczyść</button>
            </form>
            {submitInfo && file && token && (
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
    const [token, setToken] = useState(null);

    const handleFileChange = (event) => {
        setToken(window.accessToken);
        setFile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitInfo(event);
        // setToken(tok);
        sendFileToSign();
    }

    const handleReset = (event) => {
        setSubmitInfo(false)
        setFile(null)
        setToken(null)
    }

    const sendFileToSign = async () => {
        const formData = new FormData();
        formData.append('file', file);

        const headers = new Headers({
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        });

        const options = {
            method: 'POST',
            headers: headers,
            body: formData,
            mode: 'cors'
        };

        try {
            const response = await fetch('http://localhost:8080/enveloped/sign-document-visibly', options);
            const blob = await response.blob();
            FileSaver.saveAs(blob, file.name.slice(0, file.name.lastIndexOf(".")) + '_podpisany_dokument.pdf');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <input className={"input"} type="file" onChange={handleFileChange} />
                <br/><br/>
                <button className={"button"} type="submit">Wyślij do podpisania</button>
                <button className={"button"} type="reset" onClick={handleReset}>Wyczyść</button>
            </form>
            {submitInfo && file && token && (
                <div>
                    <h3>Wysłano plik</h3>
                </div>
            )}
        </div>
    );
}


export function LoadDocumentForXadesSignature() {
    const [file, setFile] = useState(null);
    const [submitInfo, setSubmitInfo] = useState(null);
    const [token, setToken] = useState(tok);

    const handleFileChange = (event) => {
        setToken(window.accessToken);
        setFile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitInfo(event);
        // setToken(tok);
        sendFileToSign();
    }

    const handleReset = (event) => {
        setSubmitInfo(false)
        setFile(null)
        setToken(null)
    }

    const sendFileToSign = async () => {
        const formData = new FormData();
        formData.append('file', file);

        const headers = new Headers({
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        });

        const options = {
            method: 'POST',
            headers: headers,
            body: formData,
            mode: 'cors'
        };

        try {
            const response = await fetch('http://localhost:8080/detached/sign-document', options);
            const blob = await response.blob();
            FileSaver.saveAs(blob, file.name.slice(0, file.name.lastIndexOf(".")) + '_podpis_xades.xml');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <input className={"input"} type="file" onChange={handleFileChange} />
                <br/><br/>
                <button className={"button"} type="submit">Wyślij do podpisania</button>
                <button className={"button"} type="reset" onClick={handleReset}>Wyczyść</button>
            </form>
            {submitInfo && file && token && (
                <div>
                    <h3>Wysłano plik</h3>
                </div>
            )}
        </div>
    );
}