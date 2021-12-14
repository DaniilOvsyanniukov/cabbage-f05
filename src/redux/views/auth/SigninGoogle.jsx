import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

import b from '../../../components/ButtonAuth/Button.module.css';

const clientId =
  '969256354016-orno03n42ee5h75ii12h0s0lmfu5tfcn.apps.googleusercontent.com';

function SignInGoogle() {
  const onSuccess = res => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      ` Авторизация прошла успешно🎉 Добро пожаловать, ${res.profileObj.name} 😍. \n Рады Вас видеть!`,
    );
    // refreshTokenSetup(res);
  };

  const onFailure = res => {
    console.log('Login failed: res:', res);
    alert(
      `Ошибка авторизации. 😢\n Пожалуйста, попробуйте еще раз чуть позже`,
    );
  };

  return (
    <div className={`${b.btnGoogle} ${b.btn}`}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ borderRadius: '16px;' }}
        className={`${b.btnGoogle} ${b.btn}`}
        isSignedIn={true}
      />
    </div>
  );
}

export { SignInGoogle };
