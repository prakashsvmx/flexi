import React from 'react';

const FieldLabel = ({labelFor,labelText, labelClassName}) => (
    <label htmlFor={labelFor} className={"flexi-form-label "+labelClassName}>{labelText}</label>
);

export default FieldLabel;