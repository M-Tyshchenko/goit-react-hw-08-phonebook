import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { selectContacts } from 'redux/selectors';
import {
  FormItem,
  StyledField,
  StyledForm,
  SubmitBtn,
  ErrMessage,
} from './ContactForm.styled';
import { addContact } from 'redux/operations';

const schema = Yup.object().shape({
  name: Yup.string().trim().required('Required'),
  number: Yup.number().required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          if (
            contacts.find(
              contact =>
                contact.name.toLowerCase() === values.name.toLowerCase()
            ) === undefined
          ) {
            dispatch(addContact({ ...values }));
            actions.resetForm();
            return;
          }
          toast.error(
            `${values.name} is already in contacts. Try to change name`
          );
        }}
      >
        <StyledForm>
          <FormItem>
            Name
            <StyledField
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrMessage name="name" component="div" />
          </FormItem>

          <FormItem>
            Number
            <StyledField
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrMessage name="number" component="div" />
          </FormItem>
          <SubmitBtn type="submit">Add contact</SubmitBtn>
        </StyledForm>
      </Formik>
      <Toaster />
    </>
  );
};
