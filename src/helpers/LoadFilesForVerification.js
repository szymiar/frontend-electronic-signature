import React, {useState} from 'react';
import "../styles/VerificationPageStyle.css";

export function LoadSignedDocument() {
    const [file, setFile] = useState(null);
    const [submitInfo, setSubmitInfo] = useState(null);
    const [verificationData, setVerificationData] = useState(null);
    const [verificationResult, setVerificationResult] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitInfo(event);
        getVerificationData(event);
    }

    const handleReset = (event) => {
        setSubmitInfo(false)
        setFile(null)
        setVerificationData(null)
        setVerificationResult(null)
    }

    const getVerificationData = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        try {
            const response = await fetch("https://elkasymulacja.pl:8443/guest/verify-signed-pdf", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            setVerificationData(data);
            setVerificationResult(data.result);
        } catch (error) {
            console.error(error);
        }
    }

    return (
            <div style={{ textAlign: 'center' }}>
                <form onSubmit={handleSubmit}>
                    <input className={"input"} type="file" onChange={handleFileChange}/>
                    <br/><br/>
                    <button className={"button"} type="submit">Wyślij do sprawdzenia</button>
                    <button className={"button"} type="reset" onClick={handleReset}>Wyczyść</button>
                </form>
                {submitInfo && file && verificationData && verificationResult === 'TOTAL_PASSED' &&(
                    <div>
                        <ul className="signature-data-list">
                            <h4>Dane podpisu:</h4>
                            <div className="item">
                                <div className="key">Imię i nazwisko</div>
                                <div className="value">{verificationData.fullName}</div>
                            </div>
                            <div className="item">
                                <div className="key">Data podpisania</div>
                                <div className="value">{verificationData.date}</div>
                            </div>
                            <div className="item">
                                <div className="key">Rezultat</div>
                                <div className="value">Dokument podpisany!</div>
                            </div>
                        </ul>
                    </div>
                )}
                {submitInfo && file && verificationData && verificationResult !== 'TOTAL_PASSED' &&(
                    <div>
                        <h2>Ten dokument nie jest podpisany!</h2>
                    </div>
                )}
                {submitInfo && file && verificationData && verificationResult === 'TOTAL_FAILED' &&(
                    <div>
                        <h2>Ten dokument został zmodyfikowany od czasu podpisania!</h2>
                    </div>
                )}
            </div>
    )
}

export function LoadSignedDocumentAndCertificate() {
    const [document, setDocument] = useState(null);
    const [xades, setXades] = useState(null);
    const [submitInfo, setSubmitInfo] = useState(null);
    const [verificationData, setVerificationData] = useState(null);
    const [verificationResult, setVerificationResult] = useState(null);

    function handleDocumentChange(event) {
        setDocument(event.target.files[0]);
    }

    function handleXadesChange(event) {
        setXades(event.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitInfo(event)
        getVerificationData(event);
    }

    const handleReset = (event) => {
        setSubmitInfo(false)
        setDocument(null)
        setXades(null)
        setVerificationData(null)
        setVerificationResult(null)
    }

    const getVerificationData = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", document);
        formData.append("signature", xades);
        try {
            const response = await fetch("https://elkasymulacja.pl:8443/guest/verify-signature", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            setVerificationData(data);
            setVerificationResult(data.result)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <br/><br/>
            <form onSubmit={handleSubmit}>
                <input className={"input"} type="file" onChange={handleDocumentChange}/>
                <input className={"input"} type="file" onChange={handleXadesChange} />
                <br/><br/>
                <button className={"button"} type="submit">Wyślij do sprawdzenia</button>
                <button className={"button"} type="reset" onClick={handleReset}>Wyczyść</button>
            </form>
            {submitInfo && document && xades && verificationData && verificationResult === 'TOTAL_PASSED' &&(
                <div>
                    <ul className="signature-data-list">
                        <h4>Dane podpisu:</h4>
                        <div className="item">
                            <div className="key">Imię i nazwisko</div>
                            <div className="value">{verificationData.fullName}</div>
                        </div>
                        <div className="item">
                            <div className="key">Data podpisania</div>
                            <div className="value">{verificationData.date}</div>
                        </div>
                        <div className="item">
                            <div className="key">Rezultat</div>
                            <div className="value">Ten dokument jest podpisany!</div>
                        </div>
                    </ul>
                </div>
            )}
            {submitInfo && document && xades && verificationData && verificationResult === null &&(
                <div>
                    <h2>Ten dokument nie jest podpisany!</h2>
                </div>
            )}
            {submitInfo && document && xades && verificationData && verificationResult === 'TOTAL_FAILED' &&(
                <div>
                    <h2>Ten dokument został zmodyfikowany od czasu podpisania!</h2>
                </div>
            )}
            {submitInfo && document && xades && verificationData && verificationResult === 'INDETERMINATE' &&(
                <div>
                    <h2>To nie jest dokument powiązany z podanym podpisem xades!</h2>
                </div>
            )}
        </div>
    );
}
