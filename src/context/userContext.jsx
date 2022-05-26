/* eslint-disable react/prop-types */
import { useState, createContext } from 'react';

const UserContext = createContext(undefined);

function UserProvider(props) {
  const [user, setUser] = useState({ token: '', name: '' });

  const Initialize = () => {
    if (localStorage.getItem('token') !== null) {
      setUser({
        ...user,
        token: localStorage.getItem('token'),
        name: localStorage.getItem('name'),
        type: localStorage.getItem('type'),
        id: localStorage.getItem('id')
      });
    }
  };

  const ChangeTokenState = (tokenValue, nameValue, typeValue, idValue) => {
    localStorage.setItem('token', tokenValue);
    localStorage.setItem('name', nameValue);
    localStorage.setItem('type', typeValue);
    localStorage.setItem('id', idValue);
    setUser({ ...user, token: tokenValue, name: nameValue, type: typeValue, id: idValue });
  };

  const ClearTokenState = () => {
    localStorage.clear()
    setUser({ token: '', name: '', type: '', id: '' });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        Initialize,
        ChangeTokenState,
        ClearTokenState,
      }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };