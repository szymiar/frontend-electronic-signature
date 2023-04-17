import React, {useState} from 'react';
import "../styles/VerificationPageStyle.css";

const mockSignatureData =
    {
        name: "Jan Ciasto",
        email: "jan.ciasto@email.com",
        index: "5817059873409211234",
        date: "2023 04 05",
        validDate: "2023 05 23",
        result: "TOTAL_PASSED"
    };

export function LoadSignedDocument() {
    const [file, setFile] = useState(null);
    const [submitInfo, setSubmitInfo] = useState(null);
    const [verificationData, setVerificationData] = useState(null);

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
    }

    const getVerificationData = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        try {
            const response = await fetch("http://20.71.10.216:9000/guest/verify-signed-pdf", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            setVerificationData(data);
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
                    <button className={"button"} type="reset" onClick={handleReset}>Anuluj</button>
                </form>
                {submitInfo && file && (
                    <div>
                        <ul className="signature-data-list">
                            {Object.keys(mockSignatureData).map((key, index) => (
                                <div className="item">
                                    <div className="key">{key}</div>
                                    <div className="value">{mockSignatureData[key]}</div>
                                </div>
                            ))}
                        </ul>
                    </div>
                )}
                { verificationData && (
                    <div>
                        <ul className="signature-data-list">
                            {Object.keys(verificationData).map((key, index) => (
                                <li key={index}>
                                    {key} : {verificationData[key]}
                                </li>
                            ))}
                        </ul>
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
    }

    const getVerificationData = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", document);
        formData.append("signature", xades);
        try {
            const response = await fetch("http://20.71.10.216:9000/guest/verify-signature", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            setVerificationData(data);
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
                <button className={"button"} type="reset" onClick={handleReset}>Anuluj</button>
            </form>
            {submitInfo && document && xades && (
                <div>
                    <ul className="signature-data-list">
                        {Object.keys(mockSignatureData).map((key, index) => (
                            <li key={index}>
                                {key} : {mockSignatureData[key]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            { verificationData && (
                <div>
                    <ul className="signature-data-list">
                        {Object.keys(verificationData).map((key, index) => (
                            <li key={index}>
                                {key} : {verificationData[key]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
