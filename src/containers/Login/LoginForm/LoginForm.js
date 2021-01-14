import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import is from 'is_js';
import classes from "./LoginForm.module.scss";
import Loader from '../../../components/UI/Loader/Loader';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .max(50, "Too Long!")
    .required("Required")
    .email(email => !is.email(email.value) ? 'Invalid email' : undefined),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const LoginForm = (props) => {
  return (
    <div className={classes.LoginForm}>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={SignInSchema}
        onSubmit={props.onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="email"
              type="email"
              placeholder="почта"
            />
            {errors.email && touched.email ? (
              <small>{errors.email}</small>
            ) : <small className={classes.hide}>place for error message</small>}
            <Field
              name="password"
              type="password"
              placeholder="пароль"
            />
            {errors.password && touched.password ? (
              <small>{errors.password}</small>)
              : <small className={classes.hide}>place for error message</small>}
            <div className={classes.Submit}>
              {!props.loading ? <button type="submit">kk</button> : <Loader marginLeft={'5px'}/>}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm
