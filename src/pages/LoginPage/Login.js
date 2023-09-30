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
        onSubmit={(values, actions) => {
          dispatch(loginUser({ ...values }));

          actions.resetForm();
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
              // autoComplete="off"
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
    </LoginFormContainer>
  );
};

export default Login;
