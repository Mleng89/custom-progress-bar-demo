import './index.css';
import React from 'react';
import { useState } from 'react';
interface ProgressProps {
    done?: number | string;
}
const Progress: React.FC<ProgressProps> = ({ done }) => {
    return (
        <div className="progress-bar-outer">
            <div
                className="progress-bar-inner"
                style={{ opacity: 1, width: `${done}%` }}
            >
                {done}%
            </div>
        </div>
    );
};
const App = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
        e.preventDefault();
    const [progress, setProgress] = useState(0);
    return (
        <div>
            <div className="container">
                <p>Progress Bar</p>
                <Progress done="25" />
                <form className="form-container" onSubmit={handleSubmit}>
                    <label> Document Name</label>
                    <input type="text" id="document-name" />
                    <label> Document Type</label>
                    <select>
                        <option></option>
                        <option value="word-document">Word Document</option>
                        <option value="pdf">PDF</option>
                    </select>
                    <label>Email</label>
                    <input type="email" id="email" />
                    <div>
                        <input type="submit" id="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default App;
