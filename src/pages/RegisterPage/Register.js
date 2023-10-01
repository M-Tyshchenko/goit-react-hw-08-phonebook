import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  ErrMessage,
  FormItem,
  RegisterFormContainer,
  StyledField,
  StyledForm,
  SubmitBtn,
} from './Register.styled';
import { Toaster } from 'react-hot-toast';

const schema = Yup.object().shape({
  name: Yup.string().trim().required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string().trim().required('Required'),
});

const Register = () => {
  const dispatch = useDispatch();

  return (
    <RegisterFormContainer>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={values => {
          dispatch(register({ ...values }));
        }}
      >
        <StyledForm>
          <FormItem>
            Name
            <StyledField name="name" placeholder="Boris Jonsoniuk" />
            <ErrMessage name="name" component="div" />
          </FormItem>

          <FormItem>
            Email
            <StyledField
              name="email"
              placeholder="jonsoniuk@mail.com"
              type="email"
            />
            <ErrMessage name="email" component="div" />
          </FormItem>

          <FormItem>
            Password
            <StyledField
              name="password"
              placeholder="Enter password"
              type="password"
              autoComplete="off"
            />
            <ErrMessage name="password" component="div" />
          </FormItem>
          <SubmitBtn type="submit">Sign Up</SubmitBtn>
        </StyledForm>
      </Formik>
      <Toaster />
    </RegisterFormContainer>
  );
};

export default Register;
