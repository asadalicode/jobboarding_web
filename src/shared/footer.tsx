/* eslint-disable jsx-a11y/no-static-element-interactions */

import { ReactComponent as Linkedln } from '@assets/icons/linkedln.svg';
import { ReactComponent as Fb } from '@assets/icons/fb.svg';
import { ReactComponent as Instagram } from '@assets/icons/instagram.svg';
import { ReactComponent as Linkedin } from '@assets/icons/Linkedin.svg';
import { ReactComponent as Twitter } from '@assets/icons/twitter.svg';
import { ReactComponent as Greater } from '@assets/icons/greater.svg';

import FooterBg from '@assets/images/FooterBg.png';
import { ReactComponent as Logowhite } from '@assets/Logo_white.svg';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Avatar } from '@material-tailwind/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import BackgroundImage from './backgroundImage';
import { IsBusiness, IsJobSeeker } from './utils/authService';
import { setLayout } from './slices/LayoutSlice';

export interface IFooterProps {
  isShow?: boolean;
}
function Footer({ isShow }: IFooterProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleRoute = (route: string) => {
    IsJobSeeker;
    navigate(route);
  };

  const handletermsAndCondition = () => {
    const route = IsJobSeeker()
      ? '/jobSeeker/termsAndConditions'
      : IsBusiness()
      ? '/business/termsAndConditions'
      : '/termsAndConditions';
    handleRoute(route);
  };
  return isShow ? (
    <footer className="bg-blue px-16 sm:px-8 pt-16 pb-6">
      <BackgroundImage
        url={FooterBg}
        classes="relative bg-contain bg-center bg-no-repeat h-80 sm:h-full flex flex-col justify-between"
      >
        <div
          className={`grid grid-cols-3 sm:grid-cols-1 items-start ${
            location.pathname === '/faqAndContactUs' ? 'mt-16' : 'mt-0'
          }`}
        >
          <div className="flex flex-start w-full">
            <Logowhite className="w-96" />
          </div>

          <div className="grid justify-end sm:justify-start sm:pt-4 space-y-3">
            <h5 className="text-white font-bold mr-auto">Explore</h5>
            <div className="flex flex-col gap-1">
              <span
                className="inline-flex items-center gap-2 text-white opacity-85 cursor-pointer "
                onClick={() => handleRoute('/')}
              >
                {' '}
                <Greater className="h-3 w-3 font-extrabold" />
                Home
              </span>
              <span
                className="inline-flex items-center gap-2 text-white opacity-85 cursor-pointer "
                onClick={handletermsAndCondition}
              >
                {' '}
                <Greater className="h-3 w-3 font-extrabold" />
                Hospitality Jobs Terms & Conditions
              </span>
              <span
                className="inline-flex items-center gap-2 text-white opacity-85 cursor-pointer "
                onClick={handletermsAndCondition}
              >
                {' '}
                <Greater className="h-3 w-3 font-extrabold" />
                Disclaimer
              </span>
              <span
                className="inline-flex items-center gap-2 text-white opacity-85 cursor-pointer "
                onClick={() => handleRoute('/faqAndContactUs')}
              >
                {' '}
                <Greater className="h-3 w-3 font-extrabold" />
                FAQS
              </span>
              <span
                className="inline-flex items-center gap-2 text-white opacity-85 cursor-pointer "
                onClick={() => handleRoute('/privacyPolicy')}
              >
                {' '}
                <Greater className="h-3 w-3 font-extrabold" />
                Privacy Policy
              </span>
              <span
                className="inline-flex items-center gap-2 text-white opacity-85 cursor-pointer "
                onClick={() => handleRoute('/faqAndContactUs')}
              >
                {' '}
                <Greater className="h-3 w-3 font-extrabold" />
                Contact Us
              </span>
            </div>
          </div>

          <div className="grid justify-end sm:justify-center sm:pt-4 items-start">
            <h5 className="text-white font-bold mr-auto sm:mr-1 pb-1">
              Follow Us
            </h5>
            <div className="flex  gap-4">
              <a
                href="https://www.linkedin.com/company/hospitality-jobs-australia/"
                target="blank"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.facebook.com/hospitalityjobsaustralia/"
                target="blank"
              >
                <Fb />
              </a>
              <a
                href="https://www.instagram.com/hospitalityjobsaus/"
                target="blank"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6  text-center space-y-4">
          <hr className="solid opacity-40" />
          <p className="font-normal text-white opacity-85">
            Copyright©
            {new Date().getFullYear()} 2022 All Rights Reserved
          </p>
        </div>
      </BackgroundImage>
    </footer>
  ) : (
    <footer className="bg-white px-16 sm:px-8 py-3">
      <div className="text-center">
        <hr className="solid opacity-40" />
        <p className="font-normal text-sm text-dark-gray opacity-75">
          Copyright©
          {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
