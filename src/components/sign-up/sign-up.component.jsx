import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { emailSignUpStart } from '../../redux/user/user.action';

import { SignUpContainer } from './sign-up.styles';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { emailSignUpStart } = this.props;

    if (password !== confirmPassword) {
      alert('Passwords Do Not Match')
      return;
    }
    emailSignUpStart(email, password, displayName);
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {

    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <h2 className='title'> I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form
          onSubmit={this.handleSubmit}
          className='sign-up-form'>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required />

          <FormInput
            type='text'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required />

          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required />

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required />


          <CustomButton type='submit'>SIGN UP</CustomButton>

        </form>

      </SignUpContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  emailSignUpStart: (email, password, displayName) => dispatch(emailSignUpStart({ email, password, displayName }))
});

export default connect(null, mapDispatchToProps)(SignUp);