
// This page would be used to see the info while logged in
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const Protected = () => {

  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>email: {auth.email}</p>
      <p>{JSON.stringify(auth)}</p>
      {auth.authenticated && <p>Login Successful</p>}
      {!auth.authenticated && <p>ERROR</p>}
    </div>
  );
};

export default Protected;