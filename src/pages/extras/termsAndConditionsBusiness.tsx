import BackroundImage from '@src/shared/backgroundImage';
import BgBanner from '@assets/images/Banner.jpg';
import BgBannerMobile from '@assets/images/BannerMobile.png';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function TermsAndConditionsBusiness() {
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
    <div className="flex flex-col items-center space-y-24 sm:pt-[100px]  pb-8  min-h-[calc(100vh-5vh)]">
      <div className="relative">
        <img
          src={isMobileTab ? BgBannerMobile : BgBanner}
          alt="banner"
          className=" object-cover"
        />
        <h1 className="text-white font-semibold absolute top-[33%] w-3/4 mx-auto  left-0 right-0">
          Hospitality Jobs
        </h1>
        <h1 className="text-white font-semibold absolute top-[43%] w-3/4 mx-auto  left-0 right-0">
          Terms & Conditions
        </h1>
      </div>
      <section className="w-full">
        <div className="flex flex-col px-16 sm:px-4 items-start gap-12">
          <div className="space-y-3">
            <h3 className="text-black font-semibold text-left">
              HOSPITALITY JOBS AUSTRALIA TERMS OF USE FOR EMPLOYERS
            </h3>
            <p className="text-gray text-left">
              These are the Terms of Use ("Terms") for the use of this Website
              and our Services by Employers. We may modify and update these
              Terms at any time, without notice. Employers need to review the
              Terms from time to time. The amended Terms will then take effect
              from the next time an Employer uses the Website. In using our
              Website and Services, you agree to be bound by these Terms as well
              as any and all general Terms and Conditions and our Privacy Policy
              that is posted on our Website from time to time. If you do not
              accept these Terms, you are not permitted to use our Website or
              Services.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              1. DEFINITIONS
            </h4>
            <p className="text-gray text-left">
              "Advertising Material" means any and all material, links, words or
              images uploaded to the Website by any Employer, including but not
              limited to the content of any Webforms, Position Vacancy
              information or Employer’s information that an Employer submits or
              links to on the Website;
              <br />
              “Content” means any and all material, links, words, images
              uploaded to the Website by any Job Seeker, including but not
              limited to the content of any Webforms, Job Seeker information,
              Employers' information that a Job Seeker submits or links to on
              the Website; “Employer” means any eligible business or
              organisation which advertises a Position Vacancy on our Website.
              Employers may hire Job Seekers as employees, as contractors or in
              any other manner they choose in accordance with Australian law;
              <br />
              “Fees” means the fees payable by an Employer in order to access
              our Services and our Website;
              <br />
              “Job” means any Job advertised via a Position Vacancy on our
              <br />
              “Job Seekers” means any person lodging a Webform through our
              Website to seek a Job or apply for a Position Vacancy which is
              published on this Website;
              <br />
              "Personal Information" has the same meaning as set out in the
              Privacy Act 1988 (Cth) and includes your name, mobile phone
              number, email and residential address as required by the Webform;
              <br />
              “Position Vacancy” and “Position Vacancies” means any description
              of any Job, role or appointment, including any casual, part time,
              full time or temporary employment, or contract for services to
              hire an independent contractor that is posted on the Website by an
              <br />
              “Services” means the introduction services to help match Job
              Seekers to Position Vacancies that involve Employers posting a
              Position Vacancy or Position Vacancies to our Website and Job
              Seekers selecting any Position Vacancy and sending an application
              for the position to the Employer using the communication services
              provided on our Website;
              <br />
              “Services” means the introduction services to help match Job
              Seekers to Position Vacancies that involve Employers posting a
              Position Vacancy or Position Vacancies to our Website and Job
              Seekers selecting any Position Vacancy and sending an application
              for the position to the Employer using the communication services
              provided on our Website;
              <br />
              “Website” means www.hospitalityJobs.com.au
              <br />
              “Webform” means our online webforms that are used to register as a
              Job Seeker or Employer on the Website;
              <br />
              “Work Now Positions” has the meaning described in the “Work Now
              Positions” clause of these Terms.
              <br />
              "You", "your" means any Employer whether an individual, company,
              or other organisation.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              2. HOW IT WORKS
            </h4>
            <p className="text-gray text-left leading-loose">
              2.1 Our Website provides a Job board for the hospitality industry.
              <br />
              2.2 Via our Website, we allow Employers (including business owners
              and other Job providers) to advertise Position Vacancies and we
              allow Job Seekers to promote themselves and apply for Position
              Vacancies.
              <br />
              2.3 We are not a Job provider or Job Seeker and are not a party to
              any agreement between an Employer and a Job Seeker.
              <br />
              2.4 If you wish to appear as an Employer on our Website or
              advertise a Position Vacancy, you must create a profile on our
              <br />
              2.5 We offer Monthly Subscription memberships for Employers as
              described below and as described on our Website from time to time.
              <br />
              2.6 Employers may advertise Position Vacancies which relate to
              permanent positions. Alternatively, Employers may advertise
              Position Vacancies for “Work Now Positions”, which are described
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              3. ROLE OF THE WEBSITE
            </h4>
            <p className="text-gray text-left leading-loose">
              3.1 We facilitate the opportunity for interactions between Job
              Seekers and Employers to occur and we take no responsibility for
              the contents of any Position Vacancy or other Content posted to
              the Website. <br />
              3.2 We are not an employer, labour hire firm, employment agency or
              recruiting firm and we do not take responsibility for:
              <br />
              (a) any background, qualification checks or other checks,
              enquiries or investigations into any Job Seeker;
              <br />
              (b) the accuracy of the information provided by Job Seekers; and
              <br />
              (c) the selection of Job Seekers, Job interviews or the
              negotiation of any services agreement or employment agreement or
              any arrangements between Employers and Job Seekers.
              <br />
              3.3 Employers must independently verify and make their own
              assessment of the suitability and experience of any Job Seekers
              for any Position Vacancy. We cannot guarantee that you will locate
              suitable Job Seekers for any Position Vacancy.
              <br />
              3.4 At no time are we responsible for any remuneration, or any
              costs incurred by any Employer in relation to their hiring of a
              Job Seeker or their other use of our Services or Website.
              <br />
              3.5 We are in no way responsible for remitting any tax or other
              payments to any employment regulator or government department or
              agency on behalf of any Employer or Job Seeker. We have no
              affiliation or association with any Employer or Job Seeker at any
              time beyond providing these Services.
              <br />
              3.6 The use of our Website is intended only for lawful and ethical
              purposes by Employers seeking to fill any Position Vacancy and for
              Job Seekers seeking employment or to work as an independent
              contractor. Employers and Job Seekers may not use our Website (or
              encourage or assist others to use it).
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              4. REGISTRATION
            </h4>
            <p className="text-gray text-left leading-loose">
              4.1 In order to use our Services and our Website, all Employers
              must lodge a Webform with us to register as an Employer and must
              pay the applicable Fees. <br />
              4.2 Employers must provide basic information including business
              name, street address, email address and phone number, and job
              description for any Position Vacancies. For further information on
              how we deal with this information, see our privacy policy. <br />
              4.3 Employers lodge Position Vacancies on our Website. They will
              automatically be posted on the Website once payment is received
              and all required information is provided.
              <br />
              4.4 As an Employer, you must keep your log-in name and password in
              a secure place and you must not allow any unauthorised person to
              use your log-in name and password to gain access to our Website or
              any of our Services. <br />
              4.5 Where Employers are required to provide information on the
              Webform, you agree: <br />
              (a) to provide true, accurate, current and complete information as
              requested during the registration process or at any time we
              request that you update your information; and <br />
              (b) to maintain and promptly update your information to ensure it
              is up-to-date, complete and accurate at all times. <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              5. WORK NOW POSITIONS
            </h4>
            <p className="text-gray text-left leading-loose">
              5.1 In addition to advertising ordinary Position Vacancies on our
              Website, Employers are able to advertise Work Now Positions.
              <br />
              5.2 Work Now Positions are Position Vacancies that are immediately
              available. For example, they might relate to a vacancy for one
              shift that evening. <br />
              5.3 Work Now Positions may lead to ongoing work or may be limited
              to as little as one shift. <br />
              5.4 If and when we receive two or more applications from Job
              Seekers for the Work Now Position, we will forward their contact
              details to the Employer, and will provide each Job Seeker with the
              Employer’s contact details.
              <br />
              5.5 If we do not receive at least two applications for the Work
              Now Position, we will not forward any Job Seeker’s contact details
              to the Employer.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              6. FEES AND SUBSCRIPTIONS
            </h4>
            <p className="text-gray text-left leading-loose">
              6.1 In order to use our Services and our Website, Employers must
              pay the Fees in accordance with this clause.
              <br />
              6.2 All Monthly Subscriptions are auto-renewed unless you log into
              your account and cancel or suspend this. You will receive an
              auto-renew notice before the next payment date. <br />
              6.3 Up to date Fees for payment options are published on our
              Website. By registering for our Services, Employers agree to the
              applicable Fees as published at the time of registration.
              <br />
              6.4 Monthly Subscription
              <br />
              (a) We may offer different levels of Membership as described on
              our Website from time to time. <br />
              (b) Each Position Vacancy will remain online until you confirm
              that the Job has been filled (unless your access to our Website
              and Services is terminated in accordance with these Terms) or for
              thirty (30) days at which time the Position Vacancy advertisement
              will expire and be removed, whichever is the lesser time period.
              <br />
              (c) Our Monthly Subscription Fees may be updated from time to time
              and will be published on our Website. It is up to you to check our
              Website periodically for our current Fees. By continuing to use
              our Website and Services after updated Fees have been published on
              our Website, you agree to those updated Fees.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              7. WARRANTIES
            </h4>
            <p className="text-gray text-left leading-loose">
              7.1 As an Employer you warrant that at all times: <br />
              (a) you will comply with the Australian Competition and Consumer
              Commission (ACCC) guide on Job advertising, including ‘Misleading
              Job and business opportunity adverts: how to handle them’, which
              publication can be accessed at
              http://www.accc.gov.au/publications/misleading-Job-and-business-opportunity-adverts-how-to-handle-them;{' '}
              <br />
              (b) any Position Vacancy that you upload to the Website does not
              contravene applicable anti-discrimination and/or equal opportunity
              legislation as amended from time to time, including
              anti-discrimination legislation relating to age, disability, sex
              or sexual orientation, race, religion or ethnicity; <br />
              (c) you will not use our Services for any illicit, unlawful,
              fraudulent, inappropriate, escort, sexual, soliciting, offensive
              or otherwise illegal activities; <br />
              (d) the terms and conditions of Position Vacancy offered by the
              Employer to the Job Seeker must comply with any relevant award or
              registered agreement and the provisions of the Fair Work Act 2009
              (Cth), including the National Employment Standards (NES); <br />
              (e) you will provide a safe working environment for workers and
              you will comply with the relevant workplace health and safety
              legislation and will have and maintain any insurance policies or
              workers’ compensation arrangements that are required by any
              relevant legislation; <br />
              (f) the information you post, provide on and through the Website
              is true correct, and up to date and not false or misleading;{' '}
              <br />
              (g) you will only interact and communicate with Job Seekers
              through us, until we consent to you contacting them directly;{' '}
              <br />
              (h) you have all relevant permits, licenses and facilities to
              support your claims in any Webform; <br />
              (i) you have the right to hire workers in Australia; <br />
              (j) you will comply with all laws, regulations, by-laws, industry
              standards and any other requirements of any government, council or
              other authority; and <br />
              (k) by submitting any Content to the Website, you represent that
              you have the ownership rights and title to this information and
              material. You also represent that you are not breaching any
              regulations, restrictions or third party rights in doing so.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              8. ACKNOWLEDGEMENTS
            </h4>
            <p className="text-gray text-left leading-loose">
              8.1 As an Employer, you acknowledge and agree: <br />
              (d) we are a facilitator only for the purposes of permitting
              matching Job Seekers with Employers and Position Vacancies; <br />
              (e) we cannot guarantee that we will find you an appropriate Job
              Seeker for your Position Vacancy; <br />
              (f) we are not responsible for, nor affiliated with any particular
              Job Seeker beyond providing the Services; <br />
              (g) you need to make all your own enquiries and do your own due
              diligence about any Job Seeker. You need to independently verify
              any claims made by any Job Seeker including any qualifications or
              experience, and make your own assessment of their suitability for
              you. We do not do any background or other checks on any Job
              Seeker. We are in no way responsible for any interaction,
              experience or meeting with a Job Seeker or other arrangement and
              you engage any Job Seeker and use our Service entirely at your own
              <br />
              (h) you permit us to do any background and reference checks on you
              as we require;
              <br />
              (i) in the event that you engage any Job Seeker to perform a Job,
              that engagement constitutes a contractual relationship between you
              and the Job Seeker. Any disputes, issues, dealings and complaints
              are to be dealt with directly and we are not to be involved. You
              agree to indemnify us for any claim which may result directly or
              indirectly from your action or inaction;
              <br />
              (j) by using this Website, you authorise us to use, reuse and to
              grant others the right to use and reuse your Content and any
              reproduction or similar in any form of media or technology for any
              purpose related to the Website;
              <br />
              (k) if we receive any complaints, disputes or other such feedback
              from any Job Seeker, visitor to the Website or any third party, we
              may remove your advertisement pending review and may remove the
              advertisement permanently if we find, in our sole discretion,
              there is any cause to do so; and <br />
              (l) in the event of any breach of these Terms including but not
              limited to any illegal or inappropriate advertisements or any
              advertisements that may breach any law or regulation, we may, in
              our sole discretion remove the advertisement and ban the Employer
              from our Website in our sole discretion. No refund will be due and
              payable to the Employer for any such removal.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">9. PRIVACY</h4>
            <p className="text-gray text-left leading-loose">
              9.1 We will comply with the Privacy Act 1988 (Cth) and the
              Australian Privacy Principles (APPs) in relation to Personal
              Information, you provide to the Website. Please refer to our full
              privacy policy on this Website for details of how we collect,
              store and use your Personal Information. <br />
              9.2 We reserve the right to disclose any Employer’s name and any
              other Personal Information to any law enforcement authority or
              other competent authority or to any person for the purpose of
              legal proceedings, prosecution, investigation or any breach or
              alleged breach of the law or these Terms.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              10. DUTIES OF EMPLOYERS
            </h4>
            <p className="text-gray text-left leading-loose">
              10.1 As an Employer you warrant that as soon as practicable after
              receipt of a Job Seeker’s Personal Information from the Website or
              directly from the Job Seeker, or as soon as practicable
              thereafter, you will: <br />
              (a) provide the Job Seeker with a copy of your privacy policy or a
              link to your privacy policy; and
              <br />
              (b) advise the Job Seeker that any information you collect about
              them will be stored, used and disclosed in accordance with your
              privacy policy.
              <br />
              10.2 Employers agree to defend, indemnify and hold us and our
              officers, directors, employees, contractors, members, agents and
              licensees harmless from and against any and all claims, charges,
              actions, liabilities, investigations, demands and similar
              including but not limited to any costs, losses, damages whether
              direct, indirect, consequential or special and all legal fees that
              we may incur, including but not limited to any civil penalties
              which may be imposed, as a result of:
              <br />
              (a) a breach of the Privacy Act 1988 (Cth) or the APPs by you; or
              <br />
              (b) any indirect breach of the Privacy Act 1988 (Cth) or the APPs
              by us that is caused by your non-compliance with paragraph 9.1 (a)
              & (b) above;
              <br />
              (c) your breach of any warranties you give in these Terms or your
              breach of any other provisions of these Terms, including but not
              limited to, any failure by you to comply with paragraph 9.1 (a) &
              (b) above; and
              <br />
              (d) Content you upload to our Website.
              <br />
              10.3 As an Employer, you agree to provide correct, accurate,
              reliable and up-to-date information abousst your organisation and
              any Position Vacancies.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              11. DEALING WITH CONTENT AND ADVERTISING MATERIAL
            </h4>
            <p className="text-gray text-left leading-loose">
              11.1 We may, but are not obligated to, remove any Advertising
              Material, Content or other information from the Website that we
              determine in our sole discretion violates these Terms or may be
              unlawful, offensive, defamatory, obscene, or otherwise or illegal,
              or that might violate the rights of, harm, or threaten the safety
              of Job Seekers, Employers or third parties, or violates a third
              party’s intellectual property. <br />
              11.2 By submitting any Content to the Website you grant to us an
              unrestricted, worldwide, royalty-free license to use, reproduce,
              modify and adapt the Content and you authorise us to grant others
              the right to reproduce, use and re-use your Content in any form of
              media or technology for the promotion of the Website, including,
              but not limited to, in print or on any social media platform or
              any communication media. <br />
              11.3 We grant you a non-exclusive, royalty free, revocable licence
              to share Content from our Website on your social media platform on
              the condition that you will do so in good faith, keeping the
              integrity of the information, and attributing the Content to us.
            </p>
          </div>{' '}
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              12. ACCESS TO WEBSITE
            </h4>
            <p className="text-gray text-left leading-loose">
              12.1 The Website uses third party vendors and hosting partners to
              provide the necessary software, hardware, service and storage.{' '}
              <br />
              12.2 We make no warranty that the Website or the Services will
              meet your requirements or be available on an uninterrupted, secure
              or error-free basis. We will use our best endeavors to ensure the
              Website is always available and error free but from time-to-time,
              and in some instances, this may not be the case as it may be out
              of our immediate control. <br />
              12.3 As an Employer you agree that you will not do any of the
              following: <br />
              (a) up-load, post or transmit any viruses, malware, trojans, worms
              or any other forms of malicious computer script to our Website;{' '}
              <br />
              (b) use any robot, spider, scraper or other automated means to
              perform searches on our Website; or <br />
              (c) copy, disassemble, decompile or reverse engineer the Website
              or the Services.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              13. INTELLECTUAL PROPERTY
            </h4>
            <p className="text-gray text-left leading-loose">
              13.1 All custom graphics, icons, logos and service names on the
              Website or accessed via the Services are our registered
              trademarks, copyright, trade or service marks. <br />
              13.2 All other trademarks or service marks within the Website are
              the property of their respective owners. Nothing in these Terms
              grants you any right to use any trademark, service mark, logo,
              and/or our name or anything you access through our Services.{' '}
              <br />
              13.3 Employers agree and acknowledge that we retain all right,
              title and interest in the Website and the Services, including but
              not limited to the inventions and intellectual property rights
              contained or embodied within the Services. <br />
              13.4 Employers are solely responsible for obtaining written
              permission before re-using any copyrighted material that is
              available on the Website. Any unauthorised use of the material
              appearing on the Website may violate copyright, trademark and
              other applicable laws and could result in criminal or civil
              penalties.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              14. CANCELLATION AND TERMINATION OF YOUR ACCESS TO THE WEBSITE
            </h4>
            <p className="text-gray text-left leading-loose">
              14.1 As an Employer you agree that we may, in our sole discretion,
              terminate or suspend your access to the Website with or without
              notice and for any reason, including, without limitation: <br />
              (a) your breach of these Terms; <br />
              (b) any suspected misleading or deceptive, fraudulent, abusive or
              illegal activity you engage in, or benefit from, in relation to
              your use of the Website or Services; and <br />
              (c) your providing false or misleading information when you
              complete the Webform or when you update or change your information
              on our Website. <br />
              14.2 Upon such termination or suspension of your account,
              regardless of the reasons, your right to access and use the
              Website immediately ceases and we may immediately deactivate your
              account and delete all your Content and other information. <br />
              14.3 In the event of a termination under this clause, we will not
              be liable to you for: <br />
              (a) any refund of Fees; and <br />
              (b) any claims or damages made by you arising out of any
              termination or suspension or any other actions taken by us in
              connection with such termination or suspension. <br />
              14.4 You can log into your account and suspend or stop your
              Subscription Membership at any time. You may also choose to remove
              and delete your profile. <br />
              14.5 We reserve the right to disclose your name and any other
              Personal Information to any law enforcement authority or other
              competent authority or to any person for the purpose of legal
              proceedings, prosecution, investigation or any breach or alleged
              breach of the law or these Terms.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              15. DISCLAIMER
            </h4>
            <p className="text-gray text-left leading-loose">
              15.1 All the Content on our Website is for informational purposes
              only, is general in nature, and is not in any way to be construed
              as individual or personal advice. The Content does not take into
              account your individual situation or job requirements. You should,
              before you act or use any of the Content, consider the
              appropriateness of this information having regard to your own
              situation, your organisation’s situation and your needs. You take
              full responsibility and risk for making any decision based on the
              Content on our Website or any interactions with any Job Seeker or
              other Employer.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              16. INDEMNITY
            </h4>
            <p className="text-gray text-left leading-loose">
              16.1 As an Employer, you agree to defend, indemnify and hold us
              and our officers, directors, employees, contractors, members,
              agents and licensees harmless from and against any and all claims,
              charges, actions, liabilities, investigations, demands and similar
              including but not limited to any costs, losses, damages whether
              direct, indirect, consequential or special and all legal fees
              resulting from (i) your breach of these Terms, (ii) Content you
              upload to our Website, (iii) any activity you may engage in
              through our Website or any use of our Services, (iv) unauthorised
              use of our Website by you or anyone obtaining your login
              information, (v) any claim by you in relation to, or arising out
              of, any Position Vacancy on the Website or in relation to, or
              arising out of, a Job Seeer’s communications with you or dealings
              with you, and (vi) any claim you make arising under any contract
              of service or contract for services with a Job Seeker in relation
              to the Job Seeker's acts or omissions to act that may be claimed
              to be breaches of contract, torts or statutes governing the
              relationship between you and the Job Seeker.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              17. LIMITATION OF LIABILITY
            </h4>
            <p className="text-gray text-left leading-loose">
              17.1 Under no circumstances will we be responsible for any loss,
              damage, injury or death resulting from the failure of an Employer
              and/or Job Seeker to comply with their obligations under the
              relevant workplace health and safety legislation, or contractual
              obligations or obligations arising under the law of negligence, as
              to safety of the workplace at which the services described in the
              Position Vacancy or other material posted to the Website will be
              carried out. <br />
              17.2 Certain legislation including the Australian Consumer Law
              (ACL) in the Consumer and Competition Act 2010 (Cth), and similar
              consumer protection laws and regulations may confer you with
              rights, warranties, guarantees and remedies relating to the
              provision of services by us to you which cannot be excluded,
              restricted or modified (Statutory Rights). <br />
              17.3 Our liability to you is governed solely by the ACL and these
              Terms. We make no representations or warranties of any kind,
              express or implied, about: <br />
              (a) the completeness, accuracy or reliability of the information
              you obtain from the use of the Website or our Services; or <br />
              (b) whether the Services provided on the Website will be available
              on an uninterrupted, secure or error-free basis. <br />
              17.4 We expressly disclaim all conditions and warranties implied
              by custom, law or statute except for your Statutory Rights. <br />
              17.5 Subject to your Statutory Rights, we will in no way be liable
              to Job Seekers or Employers for any direct, indirect, incidental,
              special, or consequential loss or damage of any nature or type
              (including any physical, mental or emotional injury, death, loss
              of opportunity or loss of revenue or profits) as a result of your
              use of this Website, or anything related directly or indirectly to
              your use of our Services. We also do not accept any responsibility
              for and are not liable for any loss or damage resulting from
              reliance by any Job Seeker on any information on this Website or
              accessed by any Job Seeker though the Services provided on this
              Website. <br />
              17.6 When your Statutory Rights apply, to the extent possible, our
              liability in respect of any claim is limited to, at our option:{' '}
              <br />
              (a) The supply of any services again; or <br />
              (b) The payment of the cost of having any services supplied again;
              and <br />
              in any event, our liability to you will not exceed the amount of
              the Fees paid by you to us. <br />
              17.7 Our failure to exercise or enforce any right or provision of
              these Terms will not constitute a waiver of such right or
              provision. <br />
              17.8 No agency, partnership, joint venture, or employment
              relationship is created between you and us as a result of these
              Terms and you do not have any authority of any kind to bind us in
              any respect whatsoever.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              18. JOB PAYMENT
            </h4>
            <p className="text-gray text-left leading-loose">
              18.1 At no time are we responsible for any remuneration, or any
              costs incurred by any Job Seeker that are not reimbursed by any
              Employer. It is solely up to the Employer to ensure they pay the
              Job Seeker correctly, and that they provide reimbursement for any
              allowances that the Job Seeker may be entitled to in performance
              of the Job. <br />
              18.2 We are in no way responsible for remitting any tax or other
              payments to any regulator or government organisation on behalf of
              any Employer or Job Seeker. We have no affiliation or association
              with any Employer or Job Seeker at any time beyond providing these
              Services including but not limited to employment, tax, payments,
              superannuation or any other business or legal requirement.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              19. MEDIATION AND DISPUTE RESOLUTION
            </h4>
            <p className="text-gray text-left leading-loose">
              19.1 All disputes, issues, dealings and complaints arising from
              any dealings or arrangements between Job Seekers and Employers:{' '}
              <br />
              (a) in relation to a Job described in any Position Vacancy or in
              any other information posted on the Website; or <br />
              (b) arising from the use of the Services, <br />
              are matters directly between Job Seekers and the Employers only
              and Employers hereby waive any legal claims against us in respect
              of such disputes. Job Seekers and Employers agree to indemnify us
              for any costs we incur in relation to any claim which may result
              directly or indirectly from any disputes, issues, dealings and
              complaints arising from any dealings or arrangements between Job
              Seekers and Employers. <br />
              19.2 In the event of a dispute between a Job Seeker and Employer,
              we encourage Employers to try and resolve disputes directly or
              through mediation provided by a provider of alternative dispute
              resolution (ADR) services. Job Seekers are responsible for paying
              any costs associated with the ADR service in accordance with the
              terms and conditions of the ADR service. <br />
              19.3 If a dispute, claim or issue arises between any Employer and
              any other Employer, Job Seeker or third party in connection with
              the Website, the Services or these Terms: <br />
              (a) the dispute, claim or issue arising out of or in connection
              with our Services may be settled by confidential ADR at either
              party’s election and each party will bear its own costs for the
              ADR services; and <br />
              (b) those parties agree that confidentiality is paramount to the
              reputation of those parties. At no time must any communications or
              discussions be made blic, including but not limited to any social
              media platforms or other websites. Any public discussions or
              comments about a party are considered defamatory, negative or
              otherwise damaging and will be the subject of compensation in any
              mediation or litigation claim.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              20. PARTIAL INVALIDITY OF PROVISIONS
            </h4>
            <p className="text-gray text-left leading-loose">
              20.1 If any provision of these Terms is void, illegal, invalid, or
              unenforceable in whole or in part, such provision will be
              severable from all other provisions herein and will not affect or
              impair the validity or enforceability of any other provisions of
              this agreement; provided, however, that a court having
              jurisdiction may revise such provision to the extent necessary to
              make such provision valid and enforceable. <br />
              20.2 Where any provision of these Terms would by any applicable
              statute be illegal, void, or unenforceable in any State or
              Territory of Australia then such provision shall not apply in that
              State or Territory and will be deemed never to have been included
              in these terms and conditions in that State or Territory. Such a
              provision if legal and enforceable in any other State or Territory
              shall continue to be fully enforceable and part of this agreement
              in those other States and Territories. The deemed exclusion of any
              term pursuant to this paragraph will not affect or modify the full
              enforceability and construction of the other provisions of these
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              21. MODIFICATION OF WEBSITE AND CONTENT
            </h4>
            <p className="text-gray text-left leading-loose">
              21.1 We reserve the right at any time and from time to time to
              remove, delete, alter or amend any Content or the website. In
              particular, if we believe the Content to be inappropriate,
              potentially breach regulations, receive complaints or for any
              other reason and in our reasonable discretion, we may remove or
              modify Content at any time without notice. We shall not be liable
              to you or any third party for any modification when it is
              required. <br />
              21.2 We reserve the right to disclose your name and any other
              personal details to any law enforcement authority or other
              competent authority or to any person for the purpose of legal
              proceedings, prosecution, investigation or any breach or alleged
              breach of the law or these Terms.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              22. THIRD-PARTY LINKS
            </h4>
            <p className="text-gray text-left leading-loose">
              22.1 Our Website may contain links to third-party web sites or
              services that are not owned or controlled by us. We have no
              control over, and assume no responsibility for, the content,
              privacy policies, or practices of any third party websites. You
              further acknowledge and agree that we shall not be liable,
              directly or indirectly, for any damage or loss caused by or in
              connection with your use of or reliance on any such content, goods
              or services available on or through any such website.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              23. WHOLE AGREEMENT
            </h4>
            <p className="text-gray text-left leading-loose">
              23.1 These Terms represent the whole agreement between you and us
              concerning your use and access to our Website and your use and
              access to the documents and information on it. No other term is to
              be included in this agreement except where it is required to be
              included by any legislation of the Commonwealth of Australia or
              any State or Territory of Australia.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              24. GOVERNING LAW
            </h4>
            <p className="text-gray text-left leading-loose">
              24.1 These Terms are governed by the laws of Queensland,
              Australia, which are in force from time to time and both you and
              we agree to submit to the exclusive jurisdiction of the Courts of
              Queensland for determining any dispute concerning these Terms.{' '}
              <br />
              24.2 These Terms were last modified February 2023 and are
              effective from that date. <br />
              [INSERT CHECKBOX] I have read and understood these Terms and agree
              to be bound by them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TermsAndConditionsBusiness;
