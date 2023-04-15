import React, {useState} from "react";
import '../styles/VerificationPageStyle.css';

const mockSignatureData =
    {
        name: "Jan Ciasto",
        email: "jan.ciasto@email.com",
        index: "5817059873409211234",
        date: "2023 04 05",
        validDate: "2023 05 23",
        result: "TOTAL_PASSED,"
    };

function useOptionBar() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (event) => {
        setSelectedOption(event.target.value);
    };

    const [signatureData, setSignatureData] = useState(null);

    function handleButtonClick() {
        setSignatureData(mockSignatureData);
    }

    // const [data, setData] = useState([]);

    return (
        <div>
            <h2>Wybierz typ podpisu</h2>
            <select value={selectedOption} onChange={handleOptionSelect}>
                <option value="">Choose an option</option>
                <option value="first">PAdES</option>
                <option value="second">PAdES widoczny</option>
                <option value="third">XAdES</option>
            </select>
            {selectedOption && (
                <button onClick={() => handleButtonClick()}>Wyślij</button>
            )}
            {signatureData && (
                <ul className="signature-data-list">
                    {Object.keys(signatureData).map((key, index) => (
                        <li key={index}>
                            {key} : {signatureData[key]}
                        </li>
                    ))}
                </ul>
                )}
        </div>
    );
}

export default useOptionBar;