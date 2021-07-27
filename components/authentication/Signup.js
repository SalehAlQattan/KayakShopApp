// react
import React, { useState } from 'react';

// styles
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
} from './styles';

// mobx
import { observer } from 'mobx-react';
import authtStore from '../../stores/authStore';

const Signup = ({ navigation }) => {
  // state
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async () => {
    await authtStore.signup(user);
    if (authtStore.user) navigation.replace('ManufactureList');
  };

  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>
      <AuthTextInput
        placeholder="Enter username"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="Enter password"
        autoCapitalize="none"
        onChangeText={(password) => setUser({ ...user, password })}
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Signup</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate('Signin')}>
        Tap Here To Signin
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signup);
