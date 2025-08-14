import { Field, Form, Formik } from 'formik';
import React from 'react';
import { FormSchema } from './FormSchema';
import { useState } from 'react';

export default function Formik2() {
    const [formData, setFormData] = useState({});

    return (
        <div>
            <h1>Formik Form Demo</h1>
            <Formik initialValues={{
                name: '',
                email: '',
                age: '',
                pass: '',
                cpass: ''
            }} onSubmit={(values, action) => {
                console.log(values.name);
                console.log(values.email);
                console.log(values.age);
                console.log(values.pass);
                console.log(values.cpass);
                setFormData(values);
                action.resetForm();
            }}>
                <Form>
                    <label>Name: </label>
                    <Field type='text' name='name'></Field>
                    <br /><br />
                    <label>Email: </label>
                    <Field type='email' name='email'></Field>
                    <br /><br />
                    <label>Age: </label>
                    <Field type='number' name='age'></Field>
                    <br /><br />
                    <label>Password: </label>
                    <Field type='text' name='pass'></Field>
                    <br /><br />
                    <label>Confirm Password: </label>
                    <Field type='text' name='cpass'></Field>
                    <br />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
            <h1>{JSON.stringify(formData)}</h1>
        </div>
    );
};