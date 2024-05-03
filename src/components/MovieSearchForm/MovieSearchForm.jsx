import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import css from "./MovieSearchForm.module.css";

export default function MovieSearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (values.query.trim() === "") {
          toast.error("Please enter a search term");
          return;
        }

        onSearch(values.query);
        actions.resetForm();
      }}>
      <Form className={css.input}>
        <Field name="query">
          {({ field }) => (
            <input
              {...field}
              type="text"
              autoComplete="off"
              autoFocus
            />
          )}
        </Field>
        <button type="submit">Search</button>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </Form>
    </Formik>
  );
}
