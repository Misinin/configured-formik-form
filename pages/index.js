import Head from "next/head";
import { Form, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

import ConfiguredFormView from "@/components/ConfiguredFormView";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const submitForm = (values) => {
    console.log(values);
  };

  const {
    values,
    handleSubmit,
    handleChange,
    setFieldValue,
    errors,
    touched,
    status,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      input: "text input",
      number: 42,
      select: "value1",
      rangeMin: 0,
      rangeMax: 10,
    },
    validationSchema: Yup.object().shape({
      input: Yup.string().nullable().required("Обязательное поле"),
      select: Yup.string().nullable().required("Обязательное поле"),
      rangeMin: Yup.number()
        .min(0, "Минимальное значение 0")
        .max(9, "Максимальное значение 9")
        .nullable()
        .required("Обязательное поле"),
      rangeMax: Yup.number()
        .min(0, "Минимальное значение 0")
        .max(9, "Максимальное значение 9")
        .moreThan(Yup.ref("rangeMin"), "Должен быть больше минимума")
        .nullable()
        .required("Обязательное поле"),
      number: Yup.number()
        .min(0, "Минимальное значение 0")
        .max(9, "Максимальное значение 9")
        .nullable()
        .required("Обязательное поле"),
    }),
    onSubmit: submitForm,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Configured formik form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Configured formik form</h1>
        <Form layout="vertical">
          <div className={styles.form}>
            <ConfiguredFormView
              values={values}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              status={status}
            />
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
