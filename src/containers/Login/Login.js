import {connect} from 'react-redux';
import classes from './Login.module.scss';
import LoginForm from './LoginForm/LoginForm';
import {signIn} from '../../store/actions/auth';

const Login = props => {

    const onSubmitForm = formValues => {
        props.signIn(formValues);
    }

    return (
        <div className={classes.Login}>
            <LoginForm
              onSubmit={onSubmitForm}
              loading={props.loading}
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        loading: state.auth.get('loading')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: credentials => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
