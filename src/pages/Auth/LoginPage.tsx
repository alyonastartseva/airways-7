import LoginForm from '@/features/auth/components/LoginForm';
import { setAdminAuth } from '@/shared/lib/auth';
import { Divider, Button, Tooltip } from 'antd';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type FromState = { from?: string } | null;

function isFromState(x: unknown): x is { from?: string } {
  return (
    typeof x === 'object' &&
    x !== null &&
    'from' in x &&
    typeof (x as { from?: unknown }).from === 'string'
  );
}

const LoginPage = () => {
  const navigate = useNavigate();
  const loc = useLocation() as ReturnType<typeof useLocation> & { state: FromState };

  const from = isFromState(loc.state) ? loc.state.from! : '/passengers-table';

  const loginAsDevAdmin = useCallback(() => {
    setAdminAuth();
    navigate(from, { replace: true });
  }, [from, navigate]);

  return (
    <div style={{ maxWidth: 420, margin: '32px auto' }}>
      <LoginForm />
      <Divider plain>или</Divider>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tooltip title="Dev-доступ для проверки админки">
          <Button onClick={loginAsDevAdmin}>Войти как admin / admin</Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default LoginPage;
