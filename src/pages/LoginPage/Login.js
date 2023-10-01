import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';
import {
  ErrMessage,
  FormItem,
  LoginFormContainer,
  StyledField,
  StyledForm,
  SubmitBtn,
} from './Login.styled';
import { Toaster } from 'react-hot-toast';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().trim().required('Required'),
});

const Login = () => {
  const dispatch = useDispatch();

  return (
    <LoginFormContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={values => {
          dispatch(loginUser({ ...values }));
        }}
      >
        <StyledForm>
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
              autoComplete="off"
            />
            <ErrMessage name="password" component="div" />
          </FormItem>

          <SubmitBtn type="submit">Login</SubmitBtn>
        </StyledForm>
      </Formik>
      <Toaster />
    </LoginFormContainer>
  );
};

export default Login;
