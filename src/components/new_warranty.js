import React from 'react';
import { Field, reduxForm } from 'redux-form';

const NewWarranty = props => {
    const { pristine, submitting } = props;

    function handleSubmit(values) {
        // todo...
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                Add new warranty
            </div>
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
            <div>
                <label>Date of purchase</label>
                <div>
                    <Field
                        name="date"
                        component="input"
                        type="date"
                        placeholder="When did you buy it"
                    />
                </div>
            </div>
            <div>
                <label>Warranty ends</label>
                <div>
                    <Field
                        name="end_of_warranty"
                        component="input"
                        type="date"
                        placeholder="When does the warranty end"
                    />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                  Submit
                </button>
            </div>
        </form>
    );
}

export default reduxForm( {
    form: 'new warranty'
})(NewWarranty)