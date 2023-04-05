import React, { useState } from "react";

function OptionBar() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleButtonClick = () => {
        // Do something with the selected option
        console.log(selectedOption);
    };

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
                <button onClick={handleButtonClick}>Wyślij</button>
            )}
        </div>
    );
}

export default OptionBar;