import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createWarranty } from '../actions';

class NewWarranty extends Component {
    onSubmit(values) {
        this.props.createWarranty(values);
    }    
    
    render() {
        const { handleSubmit } = this.props;
    
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                    <button type="submit">
                    Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default reduxForm( {
    form: 'new warranty'
})(
    connect(null, { createWarranty }) (NewWarranty)
);