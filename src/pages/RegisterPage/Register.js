import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  ErrMessage,
  FormItem,
  StyledField,
  StyledForm,
  SubmitBtn,
} from './Register.styled';

const schema = Yup.object().shape({
  name: Yup.string().trim().required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string().trim().required('Required'),
});

const Register = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* <MainTitle>Sign Up</MainTitle> */}
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          console.log('register form values', JSON.stringify(values));
          dispatch(register(JSON.stringify(values)));
          actions.resetForm();
        }}
      >
        <StyledForm>
          <FormItem>
            Name
            <StyledField id="name" name="name" placeholder="Boris Jonsoniuk" />
            <ErrMessage name="name" component="div" />
          </FormItem>

          <FormItem>
            Email
            <StyledField
              id="email"
              name="email"
              placeholder="jonsoniuk@mail.com"
              type="email"
            />
            <ErrMessage name="email" component="div" />
          </FormItem>

          <FormItem>
            Password
            <StyledField
              id="password"
              name="password"
              placeholder="Enter password"
              type="password"
            />
            <ErrMessage name="password" component="div" />
          </FormItem>
          <SubmitBtn type="submit">Sign Up</SubmitBtn>
        </StyledForm>
      </Formik>
    </div>
  );
};

export default Register;
