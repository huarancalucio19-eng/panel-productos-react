import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  nombre: Yup.string().required("Escribe el nombre"),
});

function FormularioDemo() {
  return (
    <Formik
      initialValues={{ nombre: "" }}
      validationSchema={schema}
      onSubmit={(valores, { setSubmitting }) => {
        alert(`Hola, ${valores.nombre}`);
        setSubmitting(false);
      }}
    >
      <Form>
        <label htmlFor="nombre3">Nombre</label>
        <Field id="nombre3" name="nombre" />
        <ErrorMessage name="nombre" component="p" className="error" />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default FormularioDemo;