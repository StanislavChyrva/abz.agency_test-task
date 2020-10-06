import * as yup from "yup";

const phoneRegExp = /^\+380 [0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}$/; //validate phone

const validationSchema = yup.object({
    name: yup.string().required('Required').min(2, 'Name must be more then 1 character').max(60, 'Name must be less then 60 characters'),
    email: yup.string().required('Required').email('Invalid email format'),
    phone: yup.string().required('Required').matches(phoneRegExp, 'Phone number is not valid'),
    position: yup.string().required('Required'),
    photo: yup.string().required('Required'),
});

export default validationSchema;