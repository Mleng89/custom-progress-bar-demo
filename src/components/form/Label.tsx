import React from 'react';

type TProps = {
    value: string;
};
const Label = ({ value }: TProps) => {
    return <label>{value}</label>;
};

export default Label;
