/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';
import authService from '../../../services/auth';

import './login.css';

class Login extends PureComponent {
  state = {
    redirectToReferrer: false,
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields(err => {
      if (err) return;

      authService.authenticate(() => {
        this.setState({ redirectToReferrer: true });
      });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    let { redirectToReferrer } = this.state;
    const { getFieldDecorator } = this.props.form;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="login-form-container">
        <h1>Login</h1>
        <Form className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              initialValue: 'user@example.com',
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              initialValue: '1234',
              rules: [
                { required: true, message: 'Please input your password!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="#">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={this.handleSubmit}
            >
              Log in
            </Button>
            Or <a href="#">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'normal_login' })(Login);
