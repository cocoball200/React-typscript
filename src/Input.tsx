import React from "react";
import styled from "styled-components";

interface IIputProps {
    value: string;
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

interface IFormProps {
    onFormSubmit: (event: React.FormEvent) => void;
}
export const Input: React.FunctionComponent<IIputProps> = ({ value, onChange }) => (
    <input type="text" placeholder="name" value={value} onChange={onChange} ></input>
)

export const Form: React.FunctionComponent<IFormProps> = ({ children, onFormSubmit }) => (
    <form onSubmit={onFormSubmit}> {children}</form>)
