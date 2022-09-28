import React, { ChangeEvent } from 'react';

// import { PROGRESS_INCR } from '../../constants';
// import { isValidEmail } from '../../utils/isValidEmail';

type TValidationOptions = {
    maxLength: number;
    minLength: number;
};

type TProps = {
    id: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    name?: string;
    type: string;
    validation?: TValidationOptions;
    value?: string;
};

const DEFAULT_VALUE = '';
const DEFAULT_VALIDATION = {
    maxLength: 32,
    minLength: 3
};

const Input = ({
    id,
    onChange,
    type,
    value,
    name,
    validation = DEFAULT_VALIDATION
}: TProps) => {
    // const [inputValue, setInputValue] = useState(value || DEFAULT_VALUE);
    // const [isValid, setIsValid] = useState(false);

    // const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    //     const userInput = e.target.value;

    //     switch (type) {
    //         case 'email':
    //             const isEmailValid = isValidEmail(inputValue);
    //             if (isEmailValid && !isValid) {
    //                 setIsValid(true);
    //                 handleFormProgress(PROGRESS_INCR);
    //             } else if (!isEmailValid && isValid) {
    //                 setIsValid(false);
    //                 handleFormProgress(-PROGRESS_INCR);
    //             }
    //             setInputValue(userInput);
    //             break;
    //         default: // text
    //             if (
    //                 userInput.length >= validation.minLength &&
    //                 userInput.length <= validation.maxLength &&
    //                 !isValid
    //             ) {
    //                 setIsValid(true);
    //                 handleFormProgress(PROGRESS_INCR);
    //             }
    //             if (userInput.length < validation.minLength && isValid) {
    //                 setIsValid(false);
    //                 handleFormProgress(-PROGRESS_INCR);
    //             }
    //             setInputValue(userInput);
    //             break;
    //     }
    // };

    return (
        <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            value={value}
        />
    );
};

export default Input;
