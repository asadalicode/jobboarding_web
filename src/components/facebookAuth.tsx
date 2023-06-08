import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { ReactComponent as Fb } from '@assets/icons/facebook_blue.svg';
import environment from '@src/environment';

const { facebookAppId } = environment;

interface IFacebookAuth {
  handleAuthData?: (value: IAuth.ISocialLogin) => void;
  className?: string;
}

function FacebookAuth({ handleAuthData, className }: IFacebookAuth) {
  const responseFacebook = (res: any) => {
    if (res.id) {
      const _authData = {
        email: res?.email,
        social_media_token: res.id,
        social_media_platform: 'facebook',
      };
      handleAuthData?.(_authData);
    }
  };
  return (
    <div className={`w-full cursor-pointer ${className}`}>
      <FacebookLogin
        appId={facebookAppId}
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa fa-facebook"
        render={(renderProps) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            className="flex items-center justify-center focus:ring-0 focus:ring-offset-0 rounded-md btn-gray  !rounded-[5px] "
            onClick={renderProps.onClick}
          >
            <Fb className="w-5 h-auto mr-2" />
            <p className="font-normal ">Facebook </p>
          </div>
        )}
      />
    </div>
  );
}

export default FacebookAuth;
