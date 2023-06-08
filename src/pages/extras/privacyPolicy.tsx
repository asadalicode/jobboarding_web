import BackroundImage from '@src/shared/backgroundImage';
import BgBanner from '@assets/images/Banner.jpg';
import BgBannerMobile from '@assets/images/BannerMobile.png';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function PrivacyPolicy() {
  const [isMobileTab, setIsMobileTab] = useState(false);
  const dispatch = useDispatch();
  dispatch(
    setLayout({
      isShowFooter: true,
      isShowHeader: true,
    })
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('resize', handleResize);
    return window.removeEventListener('resize', handleResize());
  }, []);

  const handleResize: any = () => {
    setIsMobileTab(window.innerWidth <= 430);
  };
  return (
    <div className="flex flex-col items-center space-y-24   pb-8  min-h-[calc(100vh-5vh)]">
      <div className="relative">
        <img
          src={isMobileTab ? BgBannerMobile : BgBanner}
          alt="banner"
          className=" object-cover"
        />
        <h1 className="text-white font-semibold absolute top-[50%] w-1/2 mx-auto  left-0 right-0">
          Privacy & Policy
        </h1>
      </div>
      <section className="w-full">
        <div className="flex flex-col px-16 items-start gap-12">
          <p className="text-gray text-left">
            At hospitalityjobs.com.au, we are committed to protecting your
            privacy as a customer and an online visitor to our website. We use
            the information we collect about you to maximise the services that
            we provide to you. We respect the privacy and confidentiality of the
            information provided by you and adhere to the Australian Privacy
            Principles. Please read our privacy policy below carefully.
          </p>
          <div className="space-y-3">
            <h4 className="text-black font-semibold text-left">
              INFORMATION WE COLLECT FROM YOU
            </h4>
            <p className="text-gray text-left">
              In the course of your visits to our website or use of our products
              and services, we may obtain the following information about you:
              name, company name, email address, telephone number, credit card
              details, billing address, geographic location, IP address, survey
              responses, support queries, blog comments and social media handles
              (together ‘Personal Data’). Our services are not directed to
              persons under 18 and we do not knowingly collect Personal Data
              from anyone under 18. If we become aware that a child under 18 has
              provided us with Personal Data, we will delete that information as
              quickly as possible. If you are the parent or guardian of a child
              and you believe they have provided us with Personal Data without
              your consent, then please contact us. You can review, correct,
              update or delete your Personal Data by either logging into your
              account and making the changes yourself or contacting us directly
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-black font-semibold text-left">
              HOW WE USE YOUR INFORMATION
            </h4>
            <p className="text-gray text-left">
              Personally Identifiable Information: We use the information we
              collect to deliver our services to you, including: communicating
              with you, providing technical support, notifying you of updates
              and offers, sharing useful content, measuring customer
              satisfaction, diagnosing problems and providing you with a
              personalized website experience. Marketing communications are only
              sent to you if you have requested or subscribed to them. You can
              opt out of our marketing communications at any time by
              unsubscribing or emailing us and your request will be actioned
              immediately. Non-Personally Identifiable Information: We also use
              the information we collect in aggregated and anonymized forms to
              improve our services, including: administering our website,
              producing reports and analytics, advertising our products and
              services, identifying user demands and assisting in meeting
              customer needs generally. Any information you choose to make
              publicly available, such as blog comments and testimonials on our
              website, will be available for others to see. If you subsequently
              remove this information, copies may remain viewable in cached and
              archived pages on other websites or if others have copied or saved
              the information.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-black font-semibold text-left">
              STORAGE AND SECURITY OF YOUR INFORMATION
            </h4>
            <p className="text-gray text-left">
              We will use all reasonable means to protect the confidentiality of
              your Personal Data while in our possession or control. All
              information we receive from you is stored and protected on our
              secure servers from unauthorised use or access. Credit card
              information is encrypted before transmission and is not stored by
              us on our servers. To enable us to deliver our services, we may
              transfer information that we collect about you, including Personal
              Data, across borders for storage and processing in countries other
              than Australia. If your Personal Data is transferred and processed
              outside Australia, it will only be transferred to countries that
              have adequate privacy protections. We retain your personal
              information for as long as needed to provide services to you and
              as otherwise necessary to comply with our legal obligations,
              resolve disputes and enforce our agreements. In the event there is
              a breach of our security and your Personal Data is compromised, we
              will promptly notify you in compliance with the applicable law.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-black font-semibold text-left">
              COOKIES AND PIXELS
            </h4>
            <p className="text-gray text-left">
              A cookie is a small file placed in your web browser that collects
              information about your web browsing behaviour. Use of cookies
              allows a website to tailor its configuration to your needs and
              preferences. Cookies do not access information stored on your
              computer or any Personal Data (e.g. name, address, email address
              or telephone number). Most web browsers automatically accept
              cookies but you can choose to reject cookies by changing your
              browser settings. This may, however, prevent you from taking full
              advantage of our website. Our website uses cookies to analyse
              website traffic, provide social media sharing and liking
              functionality and help us provide a better website visitor
              experience. In addition, cookies and pixels may be used to serve
              relevant ads to website visitors through third party services such
              as Google Ads and Facebook Adverts. These ads may appear on this
              website or other websites you visit.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-black font-semibold text-left">
              SHARING YOUR INFORMATION WITH THIRD PARTIES
            </h4>
            <p className="text-gray text-left">
              We do not and will not sell or deal in Personal Data or any
              customer information. Your Personal Data details are only
              disclosed to third party suppliers when it is required by law, for
              goods or services which you have purchased, for payment processing
              or to protect our copyright, trademarks and other legal rights. To
              the extent that we do share your Personal Data with a service
              provider, we would only do so if that party has agreed to comply
              with our privacy standards as described in this privacy policy and
              in accordance with applicable law. Our contracts with third
              parties prohibit them from using any of your Personal Data for any
              purpose other than that for which it was shared.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-black font-semibold text-left">
              DISCLOSURE OF YOUR INFORMATION
            </h4>
            <p className="text-gray text-left">
              We may from time to time need to disclose certain information,
              which may include your Personal Data, to comply with a legal
              requirement, such as a law, regulation, court order, subpoena,
              warrant, in the course of a legal proceeding or in response to a
              law enforcement agency request. Also, we may use your Personal
              Data to protect the rights, property or safety of
              hospitalityjobs.com.au, our customers or third parties. If there
              is a change of control in one of our businesses (whether by
              merger, sale, transfer of assets or otherwise) customer
              information, which may include your Personal Data, could be
              transferred to a purchaser under a confidentiality agreement. We
              would only disclose your Personal Data in good faith and where
              required by any of the above circumstances.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-black font-semibold text-left">
              LINKS TO OTHER WEBSITES
            </h4>
            <p className="text-gray text-left">
              This website may contain links to other websites. These links are
              meant for your convenience only. Links to third party websites do
              not constitute sponsorship or endorsement or approval of these
              websites. Please be aware that we are not responsible for the
              privacy practices of such other websites. We encourage our users
              to be aware, when they leave our website, to read the privacy
              statements of each and every website that collects personally
              identifiable information. This privacy policy applies solely to
              information collected by this website
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-black font-semibold text-left">
              CHANGE IN PRIVACY POLICY
            </h4>
            <p className="text-gray text-left">
              As we plan to ensure our privacy policy remains current, this
              policy is subject to change. We may modify this policy at any
              time, in our sole discretion and all modifications will be
              effective immediately upon our posting of the modifications on
              this website. Please return periodically to review our privacy
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-black font-semibold text-left">CONTACT US</h4>
            <p className="text-gray text-left">
              If you have any questions or concerns at any time about our
              privacy policy or the use of your Personal Data, please contact us
              at info@sschospitality.com.au and we will respond within 48 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default PrivacyPolicy;
