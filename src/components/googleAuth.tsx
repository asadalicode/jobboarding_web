import React from 'react';
import GoogleLogin from 'react-google-login';
import { ReactComponent as Googleblue } from '@assets/icons/google_blue.svg';
import environment from '@src/environment';

const clientId = environment.googleClientId;

interface IGoogleAuth {
  handleAuthData?: (value: IAuth.ISocialLogin) => void;
  className?: string;
}

function GoogleAuth({ handleAuthData, className }: IGoogleAuth) {
  const responseGoogle = (res: any) => {
    const _authData = {
      email: res?.profileObj.email,
      social_media_token: res.googleId,
      social_media_platform: 'google',
    };
    handleAuthData?.(_authData);
  };

  return (
    <div className={`w-full ${className}`}>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            className="flex items-center justify-center focus:ring-0 focus:ring-offset-0 rounded-md btn-gray  !rounded-[5px] "
            onClick={renderProps.onClick}
          >
            <Googleblue className="w-5 h-auto mr-2" />
            <p className="font-normal ">Google </p>
          </div>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}

export default GoogleAuth;
