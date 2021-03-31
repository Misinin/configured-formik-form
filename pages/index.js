import Head from "next/head";
import { Form, Button, Input } from "antd";
import { useFormik } from "formik";

import ConfiguredFormView from "@/components/ConfiguredFormView";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const submitForm = (values) => {
    console.log(values);
  };

  const { values, handleSubmit, handleChange } = useFormik({
    enableReinitialize: true,
    initialValues: {
      input: "text input",
      number: 42,
    },
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
