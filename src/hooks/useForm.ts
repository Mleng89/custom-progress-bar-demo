import React, { ChangeEvent, useState } from 'react';

import { PROGRESS_INCR } from '../constants';
import { isValidEmail } from '../utils/isValidEmail';
import { omit } from '../utils/omit';

// TODO: standardize keys for form usage
interface IErrors {
    category?: string;
    documentType?: string;
    email?: string;
    name?: string;
}
type TValidationOptions = {
    maxLength: number;
    minLength: number;
};
type IProps = {
    handleFormProgress: (progress: number) => void;
    validation?: TValidationOptions;
};

const DEFAULT_VALIDATION = {
    maxLength: 32,
    minLength: 3
};
const DEFAULT_VALIDATIONS = {
    category: false,
    documentType: false,
    email: false,
    name: false
};
const DEFAULT_VALUES = {
    category: '',
    documentType: '',
    email: '',
    name: ''
};

const useForm = ({
    handleFormProgress,
    validation = DEFAULT_VALIDATION
}: IProps) => {
    const [errors, setErrors] = useState<IErrors>({});
    const [values, setValues] = useState(DEFAULT_VALUES);
    const [validations, setValidations] = useState(DEFAULT_VALIDATIONS);

    const validate = (
        event: ChangeEvent,
        name: keyof IErrors,
        value: string
    ) => {
        switch (name) {
            case 'category':
                break;
            case 'documentType':
                break;
            case 'email':
                const isEmailValid = isValidEmail(value);
                if (isEmailValid && !validations.email) {
                    handleFormProgress(PROGRESS_INCR);

                    // Supported on ES2019 and later
                    // const errorsWithoutEmail = Object.fromEntries(
                    //     Object.entries(errors).filter(
                    //         ([key, value]) => key !== name
                    //     )
                    // );
                    const errorsWithoutEmail = omit(errors, name);
                    // TODO: test whether this works
                    setErrors(errorsWithoutEmail);

                    setValidations({
                        ...validations,
                        [name]: true
                    });
                } else if (!isEmailValid && validations.email) {
                    handleFormProgress(-PROGRESS_INCR);

                    setErrors({ ...errors, email: 'Invalid Email' });

                    setValidations({
                        ...validations,
                        [name]: false
                    });
                }
                break;
            case 'name':
                if (
                    value.length >= validation.minLength &&
                    value.length <= validation.maxLength &&
                    !validations.name
                ) {
                    handleFormProgress(PROGRESS_INCR);

                    const errorsWithoutName = omit(errors, name);

                    setErrors(errorsWithoutName);

                    setValidations({
                        ...validations,
                        [name]: true
                    });
                } else if (
                    value.length < validation.minLength &&
                    validations.name
                ) {
                    handleFormProgress(-PROGRESS_INCR);
                    console.log('beforeSettinError', errors);
                    setErrors({ ...errors, [name]: 'Invalid Name' });

                    setValidations({
                        ...validations,
                        [name]: false
                    });
                }
                break;

            default:
                break;
        }
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const inputName = event.target.name as keyof IErrors;
        const inputValue = event.target.value;

        validate(event, inputName, inputValue);

        setValues({
            ...values,
            [inputName]: inputValue
        });
    };

    return { errors, handleChange, values };
};

export default useForm;
