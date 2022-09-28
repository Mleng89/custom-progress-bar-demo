import './index.css';
import React from 'react';
import { ChangeEvent, useRef, useState, useEffect } from 'react';

/**
 * PROGRESS BAR COMPONENT
 */
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
                <p className="percentage">{done}%</p>
            </div>
        </div>
    );
};
/**
 *
 * APP COMPONENT
 */
const App = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
        e.preventDefault();

    const [progress, setProgress] = useState(0);
    const [formValues, setFormValues] = useState<any>();
    const [handleDocumentName, setHandleDocumentName] = useState('');
    const [handleEmail, setHandleEmail] = useState('');
    const documentNameRef =
        useRef() as React.MutableRefObject<HTMLInputElement>;
    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [documentNameProgress, setDocumentNameProgress] = useState(false);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const userInput = e.target.value;
        const userInputName = e.target.id;

        if (
            userInput.length > 2 &&
            userInput.length < 32 &&
            documentNameProgress != true
        ) {
            setDocumentNameProgress(true);
            setProgress(progress + 25);
        }
        if (userInput.length < 2 && documentNameProgress) {
            setDocumentNameProgress(false);
            setProgress(progress - 25);
        }
        setHandleDocumentName(userInput);

        const newState = { ...formValues, [userInputName]: userInput };
        setFormValues(newState);
    };
    console.log('FORM-STATE', formValues);
    // const validate = (str: string) => {
    //     if (str.length > 2 && str.length < 32) {
    //         setProgress(progress + 25);
    //     }
    // };
    // useEffect(() => {
    //     validate(handleDocumentName);
    // }, [handleDocumentName]);

    return (
        <div>
            <div className="container">
                <p>Progress Bar</p>
                <Progress done={progress} />
                <form className="form-container" onSubmit={handleSubmit}>
                    <label> Document Name</label>
                    <input
                        type="text"
                        id="document-name"
                        name="docName"
                        // validation={{ maxLength: 32, minLength: 1 }}
                        // ref={documentNameRef}
                        onChange={handleInput}
                    />
                    {console.log('documentNameRef', handleDocumentName)}
                    <label> Document Type</label>
                    <select>
                        <option></option>
                        <option value="word-document">Word Document</option>
                        <option value="pdf">PDF</option>
                    </select>
                    <label> Category</label>
                    <select>
                        <option></option>
                        <option value="candy">Candy</option>
                        <option value="cookies">Cookies</option>
                        <option value="sandwich">Sandwich</option>
                        <option value="water">Water</option>
                    </select>
                    <label>Email</label>
                    <input
                        type="email"
                        id="email"
                        onChange={handleInput}

                        // ref={emailRef}
                        // onChange={e => setHandleEmail(e.target.value)}
                    />
                    {console.log('email', handleEmail)}
                    <div>
                        {/* <Input type="submit" id="submit" value="Submit" /> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default App;
