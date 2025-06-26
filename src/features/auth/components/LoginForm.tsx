import styles from './LoginForm.module.scss';
import { Form, Input, Button } from 'antd';
import type { FormProps } from 'antd';
import { Link } from 'react-router-dom';

type LoginFormFields = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const onFinish: FormProps<LoginFormFields>['onFinish'] = (values) => {
    console.log('Login values:', values);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.title}>Вход</div>
      <Form<LoginFormFields> name="login" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Введите email' },
            { type: 'email', message: 'Некорректный email' },
          ]}
        >
          <Input placeholder="Введите почту" />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }, 
            {min: 6, message: 'Пароль должен быть не менее 6 символов'},
          ]}
        >
          <Input.Password placeholder="••••••••" />
        </Form.Item>
        <Form.Item className={styles.registerLink}>
          Еще нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link>
        </Form.Item>
        <Form.Item className={styles.centeredButton}>
  <Button type="primary" htmlType="submit">
    Войти
  </Button>
</Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
