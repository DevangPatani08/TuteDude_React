import { useFormik } from 'formik';
import { FormSchema } from './FormSchema';

export default function Formik() {
    const formVariable = {
        name: '',
        email: '',
        age: '',
        pass: '',
        cpass: '',
    };
    
    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
        initialValues: formVariable,
        validationSchema: FormSchema,
        onSubmit: (values, action) => {
            console.log(values.name);
            console.log(values.email);
            console.log(values.age);
            console.log(values.pass);
            console.log(values.cpass);
            action.resetForm();
        },
    });

    return (
        <div>
            <h1>Formik Form Demo</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Name: </label>
                <input type="text" name="name" value={values.name} onChange={handleChange('name')} onBlur={handleBlur} placeholder='Full Name' />
                <br /><br />
                {errors.name && touched.name ? <span style={{color: 'red'}}>{errors.name}</span> : null}
                <br />
                <label htmlFor="email">Enter Email: </label>
                <input type="email" name="email" value={values.email} onChange={handleChange('email')} onBlur={handleBlur} placeholder='Enter Email' />
                <br /><br />
                {errors.email && touched.email ? <span style={{color: 'red'}}>{errors.email}</span> : null}
                <br />
                <label htmlFor="age">Enter Age: </label>
                <input type="number" name="age" value={values.age} onChange={handleChange('age')} onBlur={handleBlur} placeholder='Enter Age' />
                <br /><br />
                {errors.age && touched.age ? <span style={{color: 'red'}}>{errors.age}</span> : null}
                <br />
                <label htmlFor="pass">Enter Password: </label>
                <input type="text" name="pass" value={values.pass} onChange={handleChange('pass')} onBlur={handleBlur} placeholder='Enter Password' />
                <br /><br />
                {errors.pass && touched.pass ? <span style={{color: 'red'}}>{errors.pass}</span> : null}
                <br />
                <label htmlFor="cpass">Confirm Password: </label>
                <input type="text" name="cpass" value={values.cpass} onChange={handleChange('cpass')} onBlur={handleBlur} placeholder='Confirm Password' />
                <br /><br />
                {errors.cpass && touched.cpass ? <span style={{color: 'red'}}>{errors.cpass}</span> : null}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};