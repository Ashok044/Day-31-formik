import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ books, setBooks }) => {
  const initialValues = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication Date is required')
  });

  const onSubmit = (values, { resetForm }) => {
    const newBook = { ...values, id: Date.now() };
    setBooks([...books, newBook]);
    resetForm();
  };

  return (
    <div>
      <h3>Add/Edit Book</h3>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <Field type="text" id="author" name="author" />
            <ErrorMessage name="author" />
          </div>
          <div>
            <label htmlFor="isbn">ISBN</label>
            <Field type="text" id="isbn" name="isbn" />
            <ErrorMessage name="isbn" />
          </div>
          <div>
            <label htmlFor="publicationDate">Publication Date</label>
            <Field type="date" id="publicationDate" name="publicationDate" />
            <ErrorMessage name="publicationDate" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
