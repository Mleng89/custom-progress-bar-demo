import React, { ChangeEvent, useState } from 'react';

import { PROGRESS_INCR } from '../../constants';

type TProps = {
    handleFormProgress: (progress: number) => void;
    name: string;
    selections: string[];
    value: string;
};

const Dropdown = ({ handleFormProgress, name, selections, value }: TProps) => {
    const [selectedValue, setSelectedValue] = useState(value);
    const [isValid, setIsValid] = useState(false);

    const generateOptions = () => {
        return selections.map(selection => (
            <option value={selection.toLowerCase()}>{selection}</option>
        ));
    };

    const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
        // TODO: validate (i.e., do not allow blank option)
        const userSelection = e.target.value;

        if (userSelection && !isValid) {
            setIsValid(true);
            handleFormProgress(PROGRESS_INCR);
        } else if (!userSelection && isValid) {
            setIsValid(false);
            handleFormProgress(-PROGRESS_INCR);
        }
        setSelectedValue(userSelection);
    };

    return (
        <select
            name={name}
            onChange={handleSelection}
            defaultValue={selectedValue}
            value={selectedValue}
        >
            <option></option>
            {generateOptions()}
        </select>
    );
};

export default Dropdown;
