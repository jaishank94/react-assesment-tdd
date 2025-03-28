import { useState } from "react";
import { add } from "./utils/StringCalculator";

export default function App() {
    const [input, setInput] = useState(""); // State to hold user input
    const [result, setResult] = useState(""); // State to hold the result

    // Function to handle the calculation logic
    const handleCalculate = () => {
        try {
            const calculationResult = add(input); // Call the add function from utils
            setResult(calculationResult); // Update the result state with the sum
        } catch (error) {
            setResult(error.message); // Display error message if any error occurs
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-semibold mb-6">String Calculator</h1> {/* Title with emphasis */}
            
            {/* Input field for entering numbers */}
            <input
                type="text"
                className="p-3 rounded-md bg-white text-black w-80 mb-6"
                placeholder="Enter numbers separated by commas"
                value={input}
                onChange={(e) => setInput(e.target.value)} // Update state on change
            />
            
            {/* Button to trigger calculation */}
            <button
                onClick={handleCalculate}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition duration-300"
            >
                Calculate
            </button>
            
            {/* Display the result or error message */}
            {result && (
                <div className="mt-4 py-4 text-xl font-semibold bg-gray-700 p-4 rounded-md w-80 text-center">
                    {result}
                </div>
            )}
        </div>
    );
}
