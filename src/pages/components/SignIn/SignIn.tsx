import './SignIn.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

export const SignIn:React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        id="email-input"
        name="email"
        rules={[{ required: true }]}
      >
        <Input  prefix={<div className="site-form-item-icon" >e-mail:</div>}/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true }]}
      >
        <Input.Password placeholder="Пароль"/>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to={'/'}>
          Забыли пароль?
        </Link>
      </Form.Item>

        <Button type="primary" htmlType="submit" className="login-form-button">
          Войти
        </Button>
        <Button type="primary" htmlType="submit" className="google-form-button">
          Войти через Google
        </Button>
    </Form>
  )
}

