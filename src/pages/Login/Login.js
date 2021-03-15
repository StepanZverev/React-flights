import React from 'react'
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import Button from '../../components/UI/Button/Button';
import TextInput from '../../components/UI/TextInput/TextInput';
import { alphaNumeric, email, minLengthCreator, required } from '../../utils/validators';
import classes from './Login.module.scss';

const minLength8 = minLengthCreator(8);

const Login = () => {
    const dispatch = useDispatch()
    const onLogin = (values) => {
        dispatch({type: "LOGIN"})
    }
    return (
        <div className={classes.Login}>
            <div className={classes.form_wrapper}>
                <h1 className={classes.form_title}>
                    Simple Flight Check
                </h1>
                <LoginReduxForm onSubmit={onLogin} />
            </div>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <div className={classes.inputs_wrapper}>
                <Field
                    label="Логин:"
                    validate={[required, email]}
                    component={TextInput}
                    type="text"
                    name="login"
                />
                <Field
                    label="Пароль:"
                    validate={[required, minLength8,  alphaNumeric]}
                    component={TextInput}
                    type="password"
                    name="password"
                />
            </div>
            <div className={classes.button_wrapper}>
                <Button>Войти</Button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)




export default Login