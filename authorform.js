import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ authors, setAuthors }) => {
  const initialValues = {
    name: '',
    birthDate: '',
    biography: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    biography: Yup.string().required('Biography is required')
  });

  const onSubmit = (values, { resetForm }) => {
    const newAuthor = { ...values, id: Date.now() };
    setAuthors([...authors, newAuthor]);
    resetForm();
  };

  return (
    <div>
      <h3>Add/Edit Author</h3>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="birthDate">Birth Date</label>
            <Field type="date" id="birthDate" name="birthDate" />
            <ErrorMessage name="birthDate" />
          </div>
          <div>
            <label htmlFor="biography">Biography</label>
            <Field as="textarea" id="biography" name="biography" />
            <ErrorMessage name="biography" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthorForm;
