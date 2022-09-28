import React, { FormEvent } from 'react';

import useForm from '../../hooks/useForm';

import Dropdown from './Dropdown';
import Input from './Input';
import Label from './Label';

type TProps = {
    handleFormProgress: (progress: number) => void;
};

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
};
const Form = ({ handleFormProgress }: TProps) => {
    const { errors, handleChange, values } = useForm({ handleFormProgress });
    console.log({ errors });
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <Label value="Document Name" />
            <Input
                id="document-name"
                name="name"
                onChange={handleChange}
                type="text"
                value={values.name}
                // handleFormProgress={handleFormProgress}
            />
            <div>
                {/* we can create an error component here instead of using HTML directly*/}
                <span>{errors.name}</span>
            </div>

            <Label value="Document Type" />
            <Dropdown
                handleFormProgress={handleFormProgress}
                name="documentType"
                selections={['Word Document', 'PDF']}
                value={values.documentType}
            />

            <Label value="Category" />
            <Dropdown
                handleFormProgress={handleFormProgress}
                name="category"
                selections={['Candy', 'Cookies', 'Sandwich', 'Water']}
                value={values.category}
            />

            <Label value="Email" />
            <Input
                id="email"
                name="email"
                onChange={handleChange}
                type="email"
                value={values.email}
                // handleFormProgress={handleFormProgress}
            />
            <div>
                <Input type="submit" id="submit" value="Submit" />
            </div>
        </form>
    );
};

export default Form;
