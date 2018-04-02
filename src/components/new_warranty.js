import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const NewWarranty = props => {
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name of the thing</label>
                <div>
                    <Field
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Name of your purchase"
                    />
                </div>
            </div>
        </form>
    );
}

export default reduxForm( {
    form: 'new warranty'
})(NewWarranty)