import React from 'react';
import './styles.css';


export default function FormWrapper({children, className}){
    const classes  = className ? `form-wrapper ${className}`  : 'form-wrapper';

    return (
        <div className={classes}>
          {children}
        </div>
    );
};