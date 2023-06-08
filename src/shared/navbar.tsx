/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useCallback, useEffect, useState } from 'react';
import { ReactComponent as Logoblue } from '@assets/logo_blue.svg';
import { ReactComponent as Logowhite } from '@assets/logo_white.svg';
import { ReactComponent as MenuIcon } from '@assets/icons/menu.svg';
import { ReactComponent as MenuClose } from '@assets/icons/cross.svg';
import { ReactComponent as Linkedln } from '@assets/icons/linkedln.svg';
import { ReactComponent as Fb } from '@assets/icons/fb.svg';
import { ReactComponent as Twitter } from '@assets/icons/twitter.svg';
import { ReactComponent as MyJobs } from '@assets/icons/MyJobs.svg';
import { ReactComponent as ArrowLeft } from '@assets/icons/Arrow.svg';
import { ReactComponent as ProfileUser } from '@assets/icons/profile-user.svg';
import { ReactComponent as TransactionDetails } from '@assets/icons/TransactionDetails.svg';
import { ReactComponent as SignOut } from '@assets/icons/SignOut.svg';
import { ReactComponent as WorkNowIcon } from '@assets/icons/WorkNow.svg';
import { ReactComponent as ApplicantDetailsIcon } from '@assets/icons/ApplicantsDetails.svg';
import PersonIcon from '@assets/icons/mask.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import CustomButton from './customButton';
import {
  GetStorage,
  IsAuthenticated,
  IsBusiness,
  IsJobSeeker,
  Logout,
} from './utils/authService';
import { setLayout } from './slices/LayoutSlice';

export interface IHeaderProps {
  isShow?: boolean;
}
function Header({ isShow }: IHeaderProps) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const [small, setSmall] = useState(false);
  const [userDetails, setUserDetails] = useState({ userType: '', data: '' });
  const handleRoute = (route: string) => {
    console.log('route ==', route);
    IsJobSeeker;
    if (route === '/jobseekerLogin') {
      dispatch(
        setLayout({
          isShowFooter: false,
          isShowHeader: false,
        })
      );
    }
    navigate(route);
    setNavbar(false);
  };
  const logout = () => {
    Logout().then(() => {
      navigate('/');
    });
  };
  const handletermsAndCondition = () => {
    const route = IsJobSeeker()
      ? '/jobSeeker/termsAndConditions'
      : IsBusiness()
      ? '/business/termsAndConditions'
      : '/termsAndConditions';
    handleRoute(route);
  };

  const jobSeekerMenuItems = [
    {
      title: 'My Jobs',
      icon: <MyJobs className="h-6" />,
      link: '/jobSeekerWorkHistory',
    },
    {
      title: 'Profile Settings',
      icon: <ProfileUser className="h-6" />,
      link: '/jobseeker/profileSetting',
    },
    {
      title: 'Transaction Details',
      icon: <TransactionDetails className="h-6" />,
      link: '/jobSeeker/transactionHistory',
    },
  ];

  const businessMenuItems = [
    {
      title: 'Work Now',
      icon: <WorkNowIcon className="h-6" />,
      link: '/businessWorkNowJobs?step=2',
    },
    {
      title: 'Permanent',
      icon: <MyJobs className="h-6" />,
      link: '/businessWorkNowJobs?step=3',
    },
    {
      title: 'Profile Settings',
      icon: <ProfileUser className="h-6" />,
      link: '/business/profileSetting',
    },
    {
      title: 'Application Details',
      icon: <ApplicantDetailsIcon className="h-6" />,
      link: '/businessWorkNowJobs?step=1',
    },
  ];

  useEffect(() => {
    const storageItems: any = GetStorage();
    if (storageItems) {
      setUserDetails(storageItems);
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setSmall(window.pageYOffset > 50);
      });
    }
  }, []);
  return (
    <nav
      className={`w-full sm:min-h-[100px] fixed z-10 sm:bg-blue  ${
        small && ' bg-blue bg-opacity-60 shadow-lg'
      } ${navbar ? 'nav_bg transition-all  text-white h-screen' : ''}`}
    >
      <div className="justify-between md:px-8 sm:px-8 px-16  mx-auto ">
        <div>
          <div className="flex items-start justify-between pt-8 pb-5 ">
            <div className={`flex ${!isShow ? 'hidden' : ''}`}>
              {!navbar && (
                <Link to="/">
                  <Logowhite
                    to="/"
                    className="w-10/12 h-auto sm:w-10/12  relative  "
                  />
                </Link>
              )}
            </div>
            <div className={`flex ${!IsAuthenticated() ? 'hidden' : ''}`}>
              {!navbar && !isShow && (
                <ArrowLeft
                  onClick={() => {
                    location.pathname === '/not-found'
                      ? navigate('/')
                      : navigate(-1);
                  }}
                  className="w-10/12 cursor-pointer h-auto  sm:w-[40px] relative  "
                />
              )}
            </div>

            <div className="w-full flex justify-end">
              <div className="flex items-start space-x-3">
                {/* {navbar ? */}

                <div
                  className={`grid sm:hidden md:hidden grid-cols-1 space-y-3 ${
                    (small && !navbar) || IsAuthenticated()
                      ? 'hidden'
                      : 'opacity-1'
                  } ${!isShow ? 'opacity-0' : ''} `}
                >
                  <div className="border-2 border-yellow bg-white !rounded ">
                    <CustomButton
                      label="Jobseekers: Sign In"
                      type="button"
                      isLoading={false}
                      variant="outlined"
                      handleButtonClick={() => handleRoute('/jobseekerLogin')}
                      styleClass="btn-white !border-r-0 !border-0  "
                    />
                    <span className=" border border-solid bg-yellow border-yellow" />
                    <CustomButton
                      label="Register"
                      type="button"
                      handleButtonClick={() => handleRoute('/jobseekerLogin')}
                      isLoading={false}
                      variant="outlined"
                      styleClass="btn-white !border-l-0 !border-0  "
                    />
                  </div>

                  <div className="border-2 border-yellow bg-yellow !rounded ">
                    <CustomButton
                      label="Business: Sign In"
                      type="button"
                      isLoading={false}
                      variant="outlined"
                      handleButtonClick={() => handleRoute('/businessLogin')}
                      styleClass="btn-yellow !border-r-0 !border-0  "
                    />
                    <span className="border border-solid bg-white border-white" />
                    <CustomButton
                      label="Register"
                      type="button"
                      isLoading={false}
                      variant="outlined"
                      handleButtonClick={() => handleRoute('/businessLogin')}
                      styleClass="btn-yellow !border-l-0 !border-0 "
                    />
                  </div>
                </div>
                {/* : <></>

                                } */}
                <div className="flex w-max">
                  {IsAuthenticated() && (
                    <Menu>
                      <MenuHandler>
                        <img
                          className="w-14 h-14 sm:w-10 sm:h-10 object-cover border border-white rounded-full"
                          src={PersonIcon}
                          alt="person"
                        />
                      </MenuHandler>
                      {GetStorage()?.userType === 'jobSeeker' && (
                        <MenuList className=" space-y-4  p-5 bg-white rounded-[7px] sm:p-3">
                          {jobSeekerMenuItems.map((item, key) => (
                            <MenuItem
                              key={key}
                              onClick={() => handleRoute(item.link)}
                              className="capitalize pb-0 space-y-3  items-start opacity-85  "
                            >
                              <p className=" inline-flex gap-2 w-full sm:text-sm">
                                {item.icon} {item.title}
                              </p>
                              <hr className="text-gray-light" />
                            </MenuItem>
                          ))}
                          <MenuItem
                            onClick={logout}
                            className="capitalize pb-0 space-y-3  items-start opacity-85  "
                          >
                            <p className=" inline-flex gap-2 w-full sm:text-sm">
                              <SignOut className="h-6" /> Sign Out
                            </p>
                          </MenuItem>
                        </MenuList>
                      )}

                      {GetStorage()?.userType === 'business' && (
                        <MenuList className=" space-y-4 p-5 bg-white rounded-[7px] sm:p-3">
                          {businessMenuItems.map((item, key) => (
                            <MenuItem
                              key={key}
                              onClick={() => handleRoute(item.link)}
                              className="capitalize pb-0 space-y-3  items-start opacity-85  "
                            >
                              <p className=" inline-flex gap-2 w-full sm:text-sm">
                                {item.icon} {item.title}
                              </p>
                              <hr className="text-gray-light" />
                            </MenuItem>
                          ))}
                          <MenuItem
                            onClick={logout}
                            className="capitalize pb-0 space-y-3  items-start opacity-85  "
                          >
                            <p className=" inline-flex gap-2 w-full sm:text-sm">
                              <SignOut className="h-6" /> Sign Out
                            </p>
                          </MenuItem>
                        </MenuList>
                      )}
                    </Menu>
                  )}

                  <button
                    type="button"
                    className={`pl-5 rounded-md outline-none ${
                      !isShow ? '!ml-auto' : ''
                    }`}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <MenuClose className="w-14 h-14 sm:w-10 sm:h-10" />
                    ) : (
                      <MenuIcon className="w-14 h-14 sm:w-10 sm:h-10" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="duration-75">
          <div
            className={`flex justify-between sm:flex-col xs:flex-col flex-1 py-10 sm:pt-3   ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="flex items-start flex-wrap sm:mb-4">
              <Link to="/" onClick={() => setNavbar(!navbar)}>
                <Logoblue
                  onClick={() => setNavbar(!navbar)}
                  className="h-auto w-full sm:h-14 sm:mb-4"
                />
              </Link>
              <p className=" text-gray opacity-70 justify-start text-left">
                An affordable and innovative employment market place created by
                Hospitality professionals with the needs and budgets of the
                Hospitality Industry in mind.
              </p>
            </div>
            <ul className="items-center justify-center space-y-6 sm:space-y-3  w-full whitespace-nowrap duration-300 cursor-pointer  ">
              <p
                onClick={() => handleRoute('/')}
                className="font-normal text-yellow  px-3 text-right sm:text-left text-3xl sm:text-base md:text-base  hover:text-yellow hover:underline"
              >
                Home
              </p>
              <p
                onClick={handletermsAndCondition}
                className="font-normal text-yellow  text-right sm:text-left text-3xl sm:text-base md:text-base  px-3 hover:text-yellow hover:underline"
              >
                Hospitality Jobs Terms & Conditions
              </p>
              <p
                onClick={handletermsAndCondition}
                className="font-normal text-yellow  text-right sm:text-left text-3xl sm:text-base md:text-base  px-3 hover:text-yellow hover:underline"
              >
                Disclaimer
              </p>

              <p
                onClick={() => handleRoute('/faqAndContactUs')}
                className="font-normal text-yellow  text-right sm:text-left text-3xl sm:text-base md:text-base  px-3 hover:text-yellow hover:underline"
              >
                FAQs & Contact Us
              </p>

              <p
                onClick={() => handleRoute('/privacyPolicy')}
                className="font-normal text-yellow  text-right sm:text-left text-3xl sm:text-base md:text-base  px-3 hover:text-yellow hover:underline"
              >
                Privacy & Policy
              </p>
            </ul>
          </div>
          <div
            className={`grid  lg:hidden xl:hidden grid-cols-1 space-y-3 ${
              navbar ? 'opacity-1' : 'hidden'
            }`}
          >
            <div className="border-2 border-yellow bg-white !rounded">
              <CustomButton
                label="Jobseekers: Sign In"
                handleButtonClick={() => handleRoute('/jobseekerLogin')}
                type="button"
                isLoading={false}
                variant="outlined"
                styleClass="btn-white !border-r-0 !border-0  "
              />
              <span className=" border border-solid bg-yellow border-yellow" />
              <CustomButton
                label="Register"
                type="button"
                handleButtonClick={() => handleRoute('/jobseekerLogin')}
                isLoading={false}
                variant="outlined"
                styleClass="btn-white !border-l-0 !border-0  "
              />
            </div>

            <div className="border-2 border-yellow bg-yellow !rounded ">
              <CustomButton
                label="Business: Sign In"
                type="button"
                handleButtonClick={() => handleRoute('/businessLogin')}
                isLoading={false}
                variant="outlined"
                styleClass="btn-yellow !border-r-0 !border-0  "
              />
              <span className="border border-solid bg-white border-white" />
              <CustomButton
                label="Register"
                handleButtonClick={() => handleRoute('/businessLogin')}
                type="button"
                isLoading={false}
                variant="outlined"
                styleClass="btn-yellow !border-l-0 !border-0 "
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
