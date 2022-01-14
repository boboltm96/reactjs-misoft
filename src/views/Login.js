import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../logo.svg';
import { useState } from 'react';
import Main from '../Main'

const Login = () => {
  const onFinish = (values) => {
    if(values.username !== 'admin' || values.password !== '123456') {
        setUsername('');
        setPassword('');
        alert('Username: admin \n Password: 123456');
    } else {
        setLogin(true);
    }
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setLogin] = useState(false);
  
  if(isLogin) {
    return <Main />;
  }

  return (
    <div id="components-form-demo-normal-login">
        <Form
        name="normal_login"
        className="login-form"
        // initialValues={{
        //     remember: true,
        // }}
        onFinish={onFinish}
        >
        <div style={{ textAlign: 'center' }}>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Form.Item
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
            ]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} 
            />
        </Form.Item>
        <Form.Item>
            <a className="login-form-forgot" href="#">
            Forgot Password
            </a>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
            Or <a href="#">register now!</a>
        </Form.Item>
        </Form>
    </div>
  );
};

export default Login