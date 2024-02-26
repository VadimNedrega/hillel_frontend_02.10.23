import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ADD_ACTION_INFO, addToDoAction } from "../../service";

export function ToDoForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(10, "Мінімальна довжина повинна бути не менше 10 символів")
      .max(100, "Максимальна довжина повинна бути не більше 100 символів")
      .required("Це обов'язкове поле")
      .matches(/[a-zA-Zа-яА-Я]/, 'Назва дії не є строкою, будь ласка введіть хоча б одну букву')
  });

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const preparedData = {
        id: new Date().getTime(),
        name: values.name,
      };

      dispatch({ type: ADD_ACTION_INFO, payload: preparedData });
      dispatch(addToDoAction(preparedData));
      resetForm();
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Це обов'язкове поле";
      }

      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <button type="submit">Add to do Action</button>
    </form>
  );
}
