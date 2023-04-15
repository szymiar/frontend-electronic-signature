import React, { useState } from 'react';
import "../styles/VerificationPageStyle.css";

const mockSignatureData =
    {
        name: "Jan Ciasto",
        email: "jan.ciasto@email.com",
        index: "5817059873409211234",
        date: "2023 04 05",
        validDate: "2023 05 23",
        result: "TOTAL_PASSED,"
    };

export function LoadSignedDocument() {
    const [file, setFile] = useState(null);

    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }

    function useSend () {
        // event.preventDefault();
        // const formData = new FormData();
        // formData.append("file", file);
        // useEffect(() => {
        //     async function fetchData() {
        //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
        //         const json = await response.json();
        //         setData(json);
        //     }
        //     fetchData();
        // }, []);
        // try {
        //     const response = await fetch("http://20.71.10.216:9000/guest/verify-signed-pdf", {
        //         method: "POST",
        //         body: formData,
        //     });
        //     const result = await response.json();
        //     console.log(result);
        //     <DisplaySignatureData signatureData={result} />
        // } catch (error) {
        //     console.error(error);
        // }

        return file && (
            <ul className="signature-data-list">
                {Object.keys(mockSignatureData).map((key, index) => (
                    <li key={index}>
                        {key} : {mockSignatureData[key]}
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div className="verification-type-headers">
            <br/><br/>
            <form>
                <input className={"input"} type="file" onChange={handleFileChange} />
                <br/><br/>
                <button className={"button"} type="submit" onClick={useSend}>Wyślij do sprawdzenia</button>
                <button className={"button"} type="reset">Anuluj</button>
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

    const handleSubmit = async (event) => {
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
            console.log(data);
            // <DisplaySignatureData signatureData={data} />
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="verification-type-headers">
            <br/><br/>
            <form onSubmit={handleSubmit}>
                <input className={"input"} type="file" onChange={handleDocumentChange}/>
                <input className={"input"} type="file" onChange={handleXadesChange} />
                <br/><br/>
                <button className={"button"} type="submit">Wyślij do sprawdzenia</button>
                <button className={"button"} type="reset">Anuluj</button>
            </form>
        </div>
    );
}
