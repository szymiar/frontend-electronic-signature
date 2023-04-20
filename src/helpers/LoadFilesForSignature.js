import React, { useState } from 'react';
import FileSaver from 'file-saver';

const tok = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqSTB3cWhTQTdfVkM4WW5mYk91VlFMelVZV3V0Q0cxYllCdVRQY0lkaVgwIn0.eyJleHAiOjE2ODIwMjI0OTQsImlhdCI6MTY4MjAyMTU5NCwianRpIjoiMjlhZDk1NWUtNDRhMi00NDdhLTg1NWEtMGY1YmZlZDVkOGI3IiwiaXNzIjoiaHR0cDovLzIwLjcxLjEwLjIxNjo4MDgwL2F1dGgvcmVhbG1zL2Vsa2FzeW11bGFjamEiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNmVmMDNkNDctYzA5MS00YTY0LWFlZmQtM2FjZTc0YTU3MDY0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2lnbmF0dXJlIiwic2Vzc2lvbl9zdGF0ZSI6IjU3MDBiYzA3LTZjNmYtNGU1Yy1hZGU2LWY4YmQzYjI3NzAyZCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiLCJkZWZhdWx0LXJvbGVzLWVsa2FzeW11bGFjamEiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI1NzAwYmMwNy02YzZmLTRlNWMtYWRlNi1mOGJkM2IyNzcwMmQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJTenltb24gTWlhcmVjemthIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic3p5bW9uLm1pYXJlY3prYSIsImdpdmVuX25hbWUiOiJTenltb24iLCJmYW1pbHlfbmFtZSI6Ik1pYXJlY3prYSIsImVtYWlsIjoic3p5bW9uLm1pYXJlY3prYUBlbGthc3ltdWxhY2phLmNvbSJ9.JwFDIf2IQcIChAVLe2phRKA7PlbFYdXaes4JdBgf_TnDM0XARIZXvOMT7bfOTY5uiQRTUJLuA9fiXVk9F7N8pNTOiwo1eF5zMMDzPNdgCFvtz5caFfEYE81iRLQdlbooUbnDUdXuykefuChACYSjGxMRM-wS7r4CWD8zfxLwqtJE00kvQRBNc6ilmC2UFSSeyGQY-1y09KyCeFgu67H8k-07S5ZelzhscJ_Z8l7zmJgXc1BddYIm7nb8aisfsjGrNHrdK8iDE8248EMlzb_fqPCkRfVjA-4iBE2gLeAuT-T5AYAPjShNOhudpoNRYNk-ViecoR5QgmGaSZyqc93gZw"

export function LoadDocumentForPadesSignature() {
    const [file, setFile] = useState(null);
    const [submitInfo, setSubmitInfo] = useState(null);
    const [token, setToken] = useState(tok);

    const handleFileChange = (event) => {
        setToken(tok);
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
        setToken(tok);
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
        setToken(tok);
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