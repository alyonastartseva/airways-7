import { getUserFromToken } from '../../shared/lib/authService';

const UserInfo = () => {
  const user = getUserFromToken();

  if (!user) {
    return null; 
  }

  return (
    <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px', marginTop: '50px'}}>
      <p>
        ✅ Вы вошли как <strong>{user.username}</strong>
      </p>
      <p>🎓 Роли: {user.roles.join(', ')}</p>
    </div>
  );
};

export default UserInfo;