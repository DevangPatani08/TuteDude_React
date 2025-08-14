import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
    name: Yup.string().min(3).max(20).required('Name must be entered!...'),
    email: Yup.string().email().required('Email is required!...'),
    age: Yup.number().integer().min(18).required('Age must be entered!...'),
    pass: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long').matches(/[A-Z]/, 'Password must contain at least one uppercase letter').matches(/[a-z]/, 'Password must contain at least one lowercase letter').matches(/\d/, 'Password must contain at least one number').matches(/[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>/\\?]/, 'Password must contain at least one special character'),
    cpass: Yup.string().required('Confirm Password is required!...').oneOf([Yup.ref('pass'), null], "Both passwords must match"),
});