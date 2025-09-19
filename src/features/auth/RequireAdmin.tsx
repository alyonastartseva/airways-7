import { useAuthToken } from '@/shared/hooks/useAuthToken';
import { getAdminAuth } from '@/shared/lib/auth';
import { useMemo, type PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAdmin({ children }: PropsWithChildren) {
  const loc = useLocation();

  const { user } = useAuthToken();
  const hasAdminRole = useMemo(() => !!user?.roles?.includes?.('admin'), [user]);

  const isDevAdmin = !!getAdminAuth?.();

  if (hasAdminRole || isDevAdmin) {
    return <>{children}</>;
  }

  return <Navigate to="/login" replace state={{ from: loc.pathname }} />;
}
