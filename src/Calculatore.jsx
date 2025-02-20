import { useState, useEffect } from "react";

const FormComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [secondarySelect, setSecondarySelect] = useState("");
  const [resultValue, setResultValue] = useState("");
  const MileToKm = 1.60934;
  const KmToMile = 0.621371;

  // Effect to update result whenever input or selections change
  useEffect(() => {
    const numericInput = parseFloat(inputValue);
    if (
      !isNaN(numericInput) &&
      selectedOption &&
      secondarySelect &&
      selectedOption !== secondarySelect
    ) {
      if (selectedOption === "Km" && secondarySelect === "Miles") {
        setResultValue(numericInput * KmToMile);
      } else if (selectedOption === "Miles" && secondarySelect === "Km") {
        setResultValue(numericInput * MileToKm);
      }
    } else {
      setResultValue(""); // Reset if invalid or both selections are the same
    }
  }, [inputValue, selectedOption, secondarySelect]); // Run when any of these change

  return (
    <div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your distance"
        />
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">Select unit</option>
          <option value="Miles">Miles</option>
          <option value="Km">Km</option>
        </select>
      </div>

      <div>
        <label>Convert to: </label>
        <select
          value={secondarySelect}
          onChange={(e) => setSecondarySelect(e.target.value)}
        >
          <option value="">Select unit</option>
          <option value="Km">Km</option>
          <option value="Miles">Miles</option>
        </select>
      </div>

      <div>
        <h2>Results: </h2>
        <p>
          {resultValue !== ""
            ? resultValue
            : "Enter a value and select units to convert."}
          <span> </span>
          {secondarySelect}
        </p>
      </div>
    </div>
  );
};

export default FormComponent;