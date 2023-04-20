import React, { useState } from 'react';
import FileSaver from 'file-saver';

const tok = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqSTB3cWhTQTdfVkM4WW5mYk91VlFMelVZV3V0Q0cxYllCdVRQY0lkaVgwIn0.eyJleHAiOjE2ODE5OTc3NTAsImlhdCI6MTY4MTk5Njg1MCwianRpIjoiOTU0ZTRiYjQtMTVhMy00MjFjLWI4MjMtYmJjODJmMWQ4MDQ0IiwiaXNzIjoiaHR0cDovLzIwLjcxLjEwLjIxNjo4MDgwL2F1dGgvcmVhbG1zL2Vsa2FzeW11bGFjamEiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNmVmMDNkNDctYzA5MS00YTY0LWFlZmQtM2FjZTc0YTU3MDY0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2lnbmF0dXJlIiwic2Vzc2lvbl9zdGF0ZSI6IjAyNDA3MjAyLTI3Y2EtNDNhMC1iNzczLTFlMjMyNDJlODg0OCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiLCJkZWZhdWx0LXJvbGVzLWVsa2FzeW11bGFjamEiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiIwMjQwNzIwMi0yN2NhLTQzYTAtYjc3My0xZTIzMjQyZTg4NDgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJTenltb24gTWlhcmVjemthIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic3p5bW9uLm1pYXJlY3prYSIsImdpdmVuX25hbWUiOiJTenltb24iLCJmYW1pbHlfbmFtZSI6Ik1pYXJlY3prYSIsImVtYWlsIjoic3p5bW9uLm1pYXJlY3prYUBlbGthc3ltdWxhY2phLmNvbSJ9.azRsz-3Xu-RG0hYO3sFSepZthn24OAKxS0YNxbdFEgzkJkPwHtQ7SGlTz4eiDPDmkGaAzBKB1ridrIeOo99hjE8Srs8RHKfHoEefjLQdL-w8mJpn7IAcZU3iTcRgTksKgxs201eSvACyunlXCy_uwTQy2ZGITWyzjF_hIOecdpHRhOgkX6ygNxuMH0IP1UPmAWslC0Sj3wbQ8tyLBBDeZ0TaQoyiZ2xEdojx3p64-OVEqfYg6luDi-klApnodbLpKi4et1n8bnaSSRsPzinx_34L49quYQ_j4_aSJKnCEkkPMcDQ7-dvWdU5A81Avgi866gmGC51UypmhE55pIe7SQ"

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
            FileSaver.saveAs(blob, 'podpisany_dokument.' + file.name.split('.').pop());
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
            FileSaver.saveAs(blob, 'podpisany_dokument.' + file.name.split('.').pop());
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
            FileSaver.saveAs(blob, 'podpis_xades.xml');
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