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

const Signin = ({ navigation }) => {
  // state
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async () => {
    await authtStore.signin(user);
    if (authtStore.user) navigation.replace('ManufactureList');
  };

  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
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
        <AuthButtonText>Signin</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate('Signup')}>
        Tap Here To Signup
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);
