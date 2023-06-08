import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import About from '@pages/about';
import Login from '@pages/auth/login';
import Home from '@src/pages/home';
import BusinessRegister from '@pages/auth/businessRegister';
import ForgotPassword from '@pages/auth/forgotPassword';
import ResetPassword from '@pages/auth/resetPassword';
import ResetSuccess from '@pages/auth/resetSuccess';
import JobSeekerRegister from '@pages/auth/JobSeekerRegister/index';
import WorkNowHistory from '@pages/business/workNowHistory';
import WorkNowJobPost from '@pages/workNowJob/workNowJobPost';
import ViewProfile from '@pages/profile/viewProfile';
import JobSeekerWorkHistory from '@pages/jobSeeker/workNowHistory';
import JobSeekerProfileSetting from '@pages/jobSeeker/profileSettings';
import BusinessProfileSetting from '@pages/business/profileSettings';
import ChooseMembership from '@pages/business/membership';
import WorkNowJobs from '@pages/workNowJob/workNowJobs';
import JobSeekersAvailable from '@pages/jobSeeker/jobSeekersAvailable/jobSeekersAvailable';
import PermanentJobsFilter from '@pages/permanentJob/permanentJobsFilter';
import ScreeningQuestions from '@pages/screeningQuestions';
import PermanentJobPost from '@pages/permanentJob/permanentJobPost';
import SubscriptionHistory from '@pages/business/subscription/subscriptionHistory';
import TransactionHistory from '@src/pages/jobSeeker/transactions/transactionHistory';
import TermsAndConditionsBusiness from '@src/pages/extras/termsAndConditionsBusiness';
import PrivacyPolicy from './pages/extras/privacyPolicy';
import HomeContainer from './containers/homeContainer';
import AuthGuard from './shared/guards/authGuard';
import TermsAndConditionsJobSeeker from './pages/extras/termsAndConditionsSeeker';
import FaqAndContactUs from './pages/extras/faqAndContactUs';
import { GetStorage } from './shared/utils/authService';
import TermsAndCondition from './pages/extras/termsAndCondition';
import ViewCV from './pages/viewCV';
import NotFound from './pages/notFound';
import OTP from './pages/auth/otp';
import StripeCancellation from './pages/business/membership/stripeCancellation';
import StripeConfirmation from './pages/business/membership/stripeConfirmation';

const routes = [
  {
    path: '/',
    component: <HomeContainer />,
    children: [
      { path: '/', component: <Home />, protectedPath: false },
      { path: '/businessLogin', component: <Login />, protectedPath: false },
      { path: '/jobseekerLogin', component: <Login />, protectedPath: false },
      {
        path: '/businessRegister',
        component: <BusinessRegister />,
        protectedPath: false,
      },
      {
        path: '/business/chooseMembership',
        component: <ChooseMembership />,
        protectedPath: true,
      },
      {
        path: '/business/stripeConfirmation',
        component: <StripeConfirmation />,
        protectedPath: true,
      },
      {
        path: '/business/stripeCancellation',
        component: <StripeCancellation />,
        protectedPath: true,
      },

      {
        path: '/otp',
        component: <OTP />,
        protectedPath: false,
      },
      {
        path: '/jobSeekerRegister',
        component: <JobSeekerRegister />,
        protectedPath: false,
      },
      {
        path: '/forgotPassword',
        component: <ForgotPassword />,
        protectedPath: false,
      },
      {
        path: '/resetPassword',
        component: <ResetPassword />,
        protectedPath: false,
      },
      {
        path: '/ResetSuccess',
        component: <ResetSuccess />,
        protectedPath: false,
      },
      {
        path: '/businessWorkNowJobs',
        component: <WorkNowHistory />,
        protectedPath: true,
      },
      {
        path: '/workNowJobs',
        component: <WorkNowJobs />,
        protectedPath: true,
      },
      {
        path: '/permanentJobs',
        component: <PermanentJobsFilter />,
        protectedPath: true,
      },
      {
        path: '/business/permanentJobPost',
        component: <PermanentJobPost />,
        protectedPath: true,
      },
      {
        path: '/business/subscriptionHistory',
        component: <SubscriptionHistory />,
        protectedPath: true,
      },

      {
        path: '/jobSeeker/jobSeekersAvailable',
        component: <JobSeekersAvailable />,
        protectedPath: true,
      },

      {
        path: '/businessWorkNowJobs/jobPost',
        component: <WorkNowJobPost />,
        protectedPath: true,
      },

      {
        path: '/jobSeekerWorkHistory',
        component: <JobSeekerWorkHistory />,
        protectedPath: true,
      },

      {
        path: '/viewProfile/:id',
        component: <ViewProfile />,
        protectedPath: true,
      },
      {
        path: '/viewCV',
        component: <ViewCV />,
        protectedPath: true,
      },
      {
        path: '/jobseeker/profileSetting',
        component: <JobSeekerProfileSetting />,
        protectedPath: true,
      },
      {
        path: '/business/profileSetting',
        component: <BusinessProfileSetting />,
        protectedPath: true,
      },
      {
        path: '/business/subscriptionHistory',
        component: <SubscriptionHistory />,
        protectedPath: true,
      },
      {
        path: '/jobSeeker/transactionHistory',
        component: <TransactionHistory />,
        protectedPath: true,
      },

      {
        path: '/screeningQuestions',
        component: <ScreeningQuestions />,
        protectedPath: true,
      },
      {
        path: '/myProfile',
        component: <JobSeekerProfileSetting />,
        protectedPath: true,
      },
      {
        path: '/jobSeeker/termsAndConditions',
        component: <TermsAndConditionsJobSeeker />,
        protectedPath: false,
      },
      {
        path: '/business/termsAndConditions',
        component: <TermsAndConditionsBusiness />,
        protectedPath: false,
      },
      {
        path: '/termsAndConditions',
        component: <TermsAndCondition />,
        protectedPath: false,
      },
      {
        path: '/faqAndContactUs',
        component: <FaqAndContactUs />,
        protectedPath: false,
      },
      {
        path: '/privacyPolicy',
        component: <PrivacyPolicy />,
        protectedPath: false,
      },
      {
        path: '/not-found',
        component: <NotFound />,
        protectedPath: false,
      },
      // { path: "/businessReg", component: <BusinessReg />, protectedPath: false },
      // { path: "/businessReg", component: <BusinessReg />, protectedPath: false },
      // { path: "/jobseekerReg", component: <JobseekerReg />, protectedPath: false },
      // { path: "/forgotPassword", component: <ForgotPassword />, protectedPath: false },
      // { path: "/newPassword", component: <NewPassword />, protectedPath: false },
      // { path: "/reset", component: <Reset />, protectedPath: false },
      // { path: "/home", component: <Home />, protectedPath: true },
      { path: '/about', component: <About />, protectedPath: false },
    ],
  },
];
function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component, children }) => (
          <Route key={Math.random()} path={path} element={component}>
            {children?.map((item: any) => (
              <Route
                key={Math.random()}
                path={item.path}
                element={
                  <AuthGuard protectedPath={item.protectedPath}>
                    {item.component}
                  </AuthGuard>
                }
              />
            ))}
          </Route>
        ))}
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouting;
