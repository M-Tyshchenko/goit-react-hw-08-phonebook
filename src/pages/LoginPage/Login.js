import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { loginUser } from 'redux/auth/authOperations';
import {
  ErrMessage,
  FormItem,
  StyledField,
  StyledForm,
  SubmitBtn,
} from './Login.styled';
import { selectAuthError } from 'redux/auth/authSelectors';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().trim().required('Required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const errorAuth = useSelector(selectAuthError);
  return (
    <div>
      {/* <MainTitle>Login</MainTitle> */}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          if (errorAuth !== null) {
            toast.error(
              `User is not regestered or you entered a wrong password`
            );
            return;
          }
          dispatch(loginUser({ ...values }));
          actions.resetForm();
          toast.success('User is logged in');
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
            />
            <ErrMessage name="password" component="div" />
          </FormItem>

          <SubmitBtn type="submit">Login</SubmitBtn>
        </StyledForm>
      </Formik>
      <Toaster />
    </div>
  );
};

export default Login;
