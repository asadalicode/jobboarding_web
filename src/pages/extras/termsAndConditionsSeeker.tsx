import BackroundImage from '@src/shared/backgroundImage';
import BgBanner from '@assets/images/Banner.jpg';
import BgBannerMobile from '@assets/images/BannerMobile.png';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function TermsAndConditionsJobSeeker() {
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
    <div className="flex flex-col items-center space-y-24 sm:pt-[100px] pb-8  min-h-[calc(100vh-5vh)]">
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
              HOSPITALITY JOBS AUSTRALIA TERMS OF USE FOR JOB SEEKERS
            </h3>
            <p className="text-gray text-left">
              These are the Terms of Use ("Terms") for the use of this Website
              and our Services by Job Seekers. We may modify and update these
              Terms at any time, without notice. Job Seekers need to review the
              Terms from time to time. The amended Terms will then take effect
              from the next time a Job Seeker uses the Website. In using our
              Website and Services, you agree to be bound by these Terms as well
              as any and all general Terms and Conditions and our Privacy Policy
              that is posted on our website from time to time. If you do not
              accept these Terms, you are not permitted to use our website or
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
              links to on the Website.
              <br />
              “Content” means any and all material, links, words, images
              uploaded to the Website by any Job Seeker, including but not
              limited to the content of any Webforms, Job Seeker information,
              Employers' information that a Job Seeker submits or links to on
              the Website.
              <br />
              “Employer” means any eligible business or organisation which
              advertises a Position Vacancy on our Website. Employers may hire
              Job Seekers as employees, as contractors or in any other manner
              they choose in accordance with Australian law.
              <br />
              “Job” means any Job advertised via a Position Vacancy on our
              <br />
              “Job Seekers” means any person lodging a Webform through our
              Website to seek a Job or apply for a Position Vacancy which is
              published on this Website.
              <br />
              "Personal Information" has the same meaning as set out in the
              Privacy Act 1988 (Cth) and includes your name, mobile phone
              number, email and residential address as required by the Webform.
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
              provided on our website.
              <br />
              “We”, “our” and “us” means The Trustee for the Jim Rice Investment
              Trust trading as Hospitality Jobs Australia (ABN 47 367 573 095);
              <br />
              “Website” means www.hospitalityJobs.com.au
              <br />
              “Webform” means our online webforms that are used to register as a
              Job Seeker on the Website.
              <br />
              “Work Now Positions” has the meaning described in the “Work Now
              Positions” clause of these Terms.
              <br />
              "You", "your" means any Job Seeker.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              2. HOW IT WORKS
            </h4>
            <p className="text-gray text-left leading-loose">
              2.1 Our website provides a Job board for the hospitality industry.
              <br />
              2.2 Via our website, we allow Employers (including business owners
              and other Job providers) to advertise Position Vacancies, and we
              allow Job Seekers to promote themselves and apply for Position
              Vacancies.
              <br />
              2.3 We are not a Job provider and are not a party to any agreement
              between an Employer and a Job Seeker.
              <br />
              2.4 If you wish to promote yourself as a Job Seeker or respond to
              a Position Vacancy, you must create a profile on our website.
              <br />
              2.5 You do not need to pay to create a profile as a Job Seeker or
              to respond to an ordinary Position Vacancy. However, if you wish
              to respond to an advertised Work Now Position, a small fee applies
              (see the “Work Now Positions” clause for further information).
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
              (a) any background, financial security or other checks, enquiries
              or investigations into any Employer or as to whether any Position
              Vacancy is complete or accurate.
              <br />
              (b) the accuracy of the information provided by Job Seekers or
              Employers; and
              <br />
              (c) the selection of Job Seekers, Job interviews or the
              negotiation of any services agreement or employment agreement or
              any arrangements between Employers and Job Seekers.
              <br />
              3.3 As a Job Seeker, you must independently verify the
              requirements of any Job that is advertised in any Position Vacancy
              and make your own assessment of your suitability for that Job and
              your capacity to carry out the services set out in any Position
              Vacancy that you apply for. We cannot guarantee that you will
              locate suitable work using our Services.
              <br />
              3.4 At no time are we responsible for any remuneration, or any
              costs incurred by any Job Seeker that are not reimbursed by any
              <br />
              3.5 We are in no way responsible for remitting any tax or other
              payments to any employment regulator or government department or
              agency on behalf of any Job Seeker. We have no affiliation or
              association with any Employer at any time beyond providing these
              Services.
              <br />
              3.6 The use of our website is intended only for lawful and ethical
              purposes by Employers seeking to fill any Position Vacancy and for
              Job Seekers seeking employment or to work as an independent
              contractor. Job Seekers may not use our website (or encourage or
              assist others to use it) for any purpose that is prohibited by our
              Terms or by any applicable law.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              4. REGISTRATION
            </h4>
            <p className="text-gray text-left leading-loose">
              4.1 All Job Seekers must register in order to gain access to the
              Website and our Services. <br />
              4.2 You must lodge a Webform with us to register your interest as
              a Job Seeker. Lodging a Webform and using our Services as a Job
              Seeker is free (unless you choose to apply for a Work Now
              Position). <br />
              4.3 Job Seekers must provide basic personal information including
              name, street address, email address and phone number. Job seekers
              must also provide various other information including, but not
              limited to:
              <br />
              (a) date and country of birth, languages spoken, Australian
              citizen or permanent residence status;
              <br />
              (b) a list of skills, experience, capacities, certificates,
              licenses and any other relevant certificates or qualifications
              which may include but not be limited to a National Police
              Certificate and where required a Working with Children
              certificate; and (c) up to date information about their
              availability.
              <br />
              For further information on how we deal with this information, see
              our privacy policy.
              <br />
              4.4 Employers lodge Position Vacancies with us. We assess their
              information and eligibility. <br />
              4.5 We may share your information with relevant Employers to
              enable them to consider you for a Position Vacancy.
              <br />
              4.6 As a Job Seeker, you must keep your log-in name and password
              in a secure place, and you must not allow any unauthorised person
              to use your log-in name and password to gain access to any of our
              Services.
              <br />
              4.7 Where Job Seekers are required to provide information on the
              Webform, you agree:
              <br />
              (a) to provide true, accurate, current and complete information
              about yourself as a Job Seeker as requested during the
              registration process or at any time, we request that you update
              your information; and
              <br />
              (b) to maintain and promptly update your information to ensure it
              is up-to-date, complete and accurate at all times.
              <br />
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
              shift that evening.
              <br />
              5.3 Work Now Positions may lead to ongoing work or may be limited
              to as little as one shift.
              <br />
              5.4 If you wish to apply for a Work Now Position as a Job Seeker,
              you must register as a Job Seeker on our Website, and authorise
              payment of an administration fee to us in the amount of $1AUD per
              application (Administration Fee).
              <br />
              5.5 If and when we receive two or more applications for the Work
              Now Position, we will forward your contact details (and the
              details of any other applicants) to the Employer, will provide you
              with the Employer’s contact details, and will debit the
              Administration Fee via your nominated payment method.
              <br />
              5.6 If we do not receive at least two applications for the Work
              Now Position, we will not forward your contact details to the
              Employer, and you will not be charged the Administration Fee.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              6. WARRANTIES
            </h4>
            <p className="text-gray text-left leading-loose">
              6.1 As a Job Seeker, you warrant that at all times:
              <br />
              (a) you have the right to work in Australia;
              <br />
              (b) if there is an age requirement specified in any Position
              Vacancy, that you meet this age requirement;
              <br />
              (c) you will not use our Website or Services for any illicit,
              unlawful, fraudulent, inappropriate, escort, sexual, soliciting,
              offensive or otherwise illegal activities;
              <br />
              (d) you are 18 years of age or older and able to form a legal
              binding contract;
              <br />
              (e) the information you post, provide on and through the Website
              is true correct, and up to date and not false or misleading;
              <br />
              (f) you will only interact and communicate with Employers through
              us, until we consent to you contacting them directly;
              <br />
              (g) you have all relevant certifications, licenses and experience
              to support your claims in any Webform;
              <br />
              (h) you are legally and professionally qualified, have the
              relevant skills, experience and are competent to perform the
              <br />
              (i) you will perform the relevant Job to the best of your ability
              with due care and skill and to a reasonable standard for someone
              in your industry with your level of qualifications and experience;
              <br />
              (j) in performing the relevant Job you will comply with all laws,
              regulations, by-laws, industry standards and any other
              requirements of any government, council or other authority;
              <br />
              (k) by submitting any Content to the Website, you represent that
              you have the ownership rights and title to this information and
              material. You also represent that you are not breaching any
              regulations, restrictions or third party rights in doing so.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              7. ACKNOWLEDGEMENTS
            </h4>
            <p className="text-gray text-left leading-loose">
              7.1 As a Job Seeker, you acknowledge and agree:
              <br />
              (a) we are a facilitator only for the purposes of permitting
              matching Job Seekers with Position Vacancies;
              <br />
              (b) we cannot guarantee that we will find you an appropriate Job
              or Position Vacancy;
              <br />
              (c) we are not responsible for, nor affiliated with any particular
              Employer beyond providing the Services;
              <br />
              (d) you need to make all your own enquiries and do your own due
              diligence about any Employer. You need to independently verify any
              Position Vacancy and make your own assessment of the suitability
              of any Job for you. We do not do any background or other checks on
              any Employer. We are in no way responsible for any interaction,
              experience or meeting with an Employer or other arrangement and
              you engage in any Job and use our Service entirely at your own
              risk; (e) you permit us to do any background and reference checks
              on you as we require;
              <br />
              (f) in the event that an Employer engages you to perform a Job,
              that engagement constitutes a contractual relationship between you
              and the Employer. Any disputes, issues, dealings and complaints
              are to be dealt with directly and we are not to be involved. You
              agree to indemnify us for any claim which may result directly or
              indirectly from your action or inaction; and
              <br />
              (g) by using this Website, you authorise us to use, reuse and to
              grant others the right to use and reuse your Content and any
              reproduction or similar in any form of media or technology for any
              purpose related to the Website.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">8. PRIVACY</h4>
            <p className="text-gray text-left leading-loose">
              8.1 We will comply with the Privacy Act 1988 (Cth) and the
              Australian Privacy Principles (APPs) in relation to Personal
              Information, you provide to the Website. Please refer to our full
              privacy policy on this Website for details of how we collect,
              store and use your Personal Information.
              <br />
              8.2 We reserve the right to disclose any Job Seeker’s name and any
              other Personal Information to any law enforcement authority or
              other competent authority or to any person for the purpose of
              legal proceedings, prosecution, investigation or any breach or
              alleged breach of the law or these Terms.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              9. DUTIES OF JOB SEEKERS
            </h4>
            <p className="text-gray text-left leading-loose">
              9.1 As a Job Seeker, you agree:
              <br />
              (a) to provide correct, accurate, reliable and up-to-date
              information about educational achievements and qualifications,
              certificates, licenses to provide specialist services, list of
              skills, experience, capacities and all other matters related to
              your skills and expertise, including your availability for work;
              <br />
              (b) to ensure you are reasonably qualified and legally entitled to
              perform any Job that is advertised in any Position Vacancy, which
              you expressly or impliedly represent yourself as capable of
              filling; and
              <br />
              (c) where it is a requirement of any Position Vacancy, you must
              also hold or be entitled to hold a national police certificate or
              a working with children certificate.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              10. DEALING WITH CONTENT AND ADVERTISING MATERIAL
            </h4>
            <p className="text-gray text-left leading-loose">
              10.1 We may, but are not obligated to, remove any Advertising
              Material, Content or other information from the Website that we
              determine in our sole discretion violates these Terms or may be
              unlawful, offensive, defamatory, obscene, or otherwise or illegal,
              or that might violate the rights of, harm, or threaten the safety
              of Job Seekers, Employers or third parties, or violates a third
              party’s intellectual property.
              <br />
              10.2 By submitting any Content to the Website you grant to us an
              unrestricted, worldwide, royalty-free license to use, reproduce,
              modify and adapt the Content and you authorise us to grant others
              the right to reproduce, use and re-use your Content in any form of
              media or technology for the promotion of the Website, including,
              but not limited to, in print or on any social media platform or
              any communication media.
              <br />
              10.3 We grant you a non-exclusive, royalty free, revocable licence
              to share Content from our Website on your social media platform on
              the condition that you will do so in good faith, keeping the
              integrity of the information, and attributing the Content to us.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              11. ACCESS TO WEBSITE
            </h4>
            <p className="text-gray text-left leading-loose">
              11.1 The Website uses third party vendors and hosting partners to
              provide the necessary software, hardware, service and storage.
              <br />
              11.2 We make no warranty that the Website or the Services will
              meet your requirements or be available on an uninterrupted, secure
              or error-free basis. We will use our best endeavors to ensure the
              Website is always available and error free but from time-to-time,
              and in some instances, this may not be the case as it may be out
              of our immediate control.
              <br />
              11.3 As a Job Seeker you agree that you will not do any of the
              following:
              <br />
              (a) up-load, post or transmit any viruses, malware, trojans, worms
              or any other forms of malicious computer script to our Website;
              <br />
              (b) use any robot, spider, scraper or other automated means to
              perform searches on our Website; or
              <br />
              (c) copy, disassemble, decompile or reverse engineer the Website
              or the Services.
              <br />
            </p>
          </div>{' '}
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              12. INTELLECTUAL PROPERTY
            </h4>
            <p className="text-gray text-left leading-loose">
              12.1 All custom graphics, icons, logos and service names on the
              Website or accessed via the Services are our registered
              trademarks, copyright, trade or service marks. <br />
              12.2 All other trademarks or service marks within the Website are
              the property of their respective owners. Nothing in these Terms
              grants you any right to use any trademark, service mark, logo,
              and/or our name or anything you access through our Services.{' '}
              <br />
              12.3 Job Seekers agree and acknowledge that we retain all right,
              title and interest in the Website and the Services, including but
              not limited to the inventions and intellectual property rights
              contained or embodied within the Services. <br />
              12.4 Job Seekers are solely responsible for obtaining written
              permission before re-using any copyrighted material that is
              available on the Website. Any unauthorised use of the material
              appearing on the Website may violate copyright, trademark and
              other applicable laws and could result in criminal or civil
              penalties. <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              13. CANCELLATION AND TERMINATION OF YOUR ACCESS TO THE WEBSITE
            </h4>
            <p className="text-gray text-left leading-loose">
              13.1 As a Job Seeker you agree that we may, in our sole
              discretion, terminate or suspend your access to the Website with
              or without notice and for any reason, including, without
              <br />
              (a) your breach of these Terms;
              <br />
              (b) any suspected misleading or deceptive, fraudulent, abusive or
              illegal activity you engage in, or benefit from, in relation to
              your use of the Website or Services; and
              <br />
              (c) your providing false or misleading information when you
              complete the Webform or when you update or change your information
              on our Website.
              <br />
              13.2 Upon such termination or suspension of your account,
              regardless of the reasons, your right to access and use the
              Website immediately ceases and we may immediately deactivate your
              profile or delete your Job Seeker account and all your Content and
              other information.
              <br />
              13.3 In the event of a termination under this clause, we will not
              be liable to you for:
              <br />
              (a) any refund of fees; and
              <br />
              (b) any claims or damages made by you arising out of any
              termination or suspension or any other actions taken by us in
              connection with such termination or suspension.
              <br />
              13.4 If you want to cancel your registration to our Website, you
              can log into your account to edit and ‘hide’ or remove your
              <br />
              13.5 We reserve the right to disclose your name and any other
              Personal Information to any law enforcement authority or other
              competent authority or to any person for the purpose of legal
              proceedings, prosecution, investigation or any breach, alleged
              breach of the law or these Terms.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              14. DISCLAIMER
            </h4>
            <p className="text-gray text-left leading-loose">
              14.1 All the Content on our Website is for informational purposes
              only, is general in nature, and is not in any way to be construed
              as individual or personal advice. The Content does not take into
              account your individual situation or job requirements. You should,
              before you act or use any of the Content, consider the
              appropriateness of this information having regard to your own
              personal situation and needs. You take full responsibility and
              risk for making any decision based on the Content on our Website
              or any interactions with any Employer or other Job Seeker.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              15. INDEMNITY
            </h4>
            <p className="text-gray text-left leading-loose">
              15.1 As a Job Seeker you agree to defend, indemnify and hold us
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
              arising out of, the Employer's communications with you or dealings
              with you, and (vi) any claim you make arising under any contract
              of service or contract for services with an Employer in relation
              to the Employer's acts or omissions to act that may be claimed to
              be breaches of contract, torts or statutes governing the
              relationship between you and the Employer.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              16. LIMITATION OF LIABILITY
            </h4>
            <p className="text-gray text-left leading-loose">
              16.1 Under no circumstances will we be responsible for any loss,
              damage, injury or death resulting from the failure of an Employer
              and/or Job Seeker to comply with their obligations under the
              relevant workplace health and safety legislation, or contractual
              obligations or obligations arising under the law of negligence, as
              to safety of the workplace at which the services described in the
              Position Vacancy or other material posted to the Website will be
              carried out.
              <br />
              16.2 Certain legislation including the Australian Consumer Law
              (ACL) in the Consumer and Competition Act 2010 (Cth), and similar
              consumer protection laws and regulations may confer you with
              rights, warranties, guarantees and remedies relating to the
              provision of services by us to you which cannot be excluded,
              restricted or modified (Statutory Rights).
              <br />
              16.3 Our liability to you is governed solely by the ACL and these
              Terms. We make no representations or warranties of any kind,
              express or implied, about:
              <br />
              (a) the completeness, accuracy or reliability of the information
              you obtain from the use of the Website or our Services; or
              <br />
              (b) whether the Services provided on the Website will be available
              on an uninterrupted, secure or error-free basis.
              <br />
              16.4 We expressly disclaim all conditions and warranties implied
              by custom, law or statute except for your Statutory Rights.
              <br />
              16.5 Subject to your Statutory Rights, we will in no way be liable
              to Job Seekers for any direct, indirect, incidental, special, or
              consequential loss or damage of any nature or type (including any
              physical, mental or emotional injury, death, loss of opportunity
              or loss of revenue or profits) as a result of your use of this
              Website, or anything related directly or indirectly to your use of
              our Services. We also do not accept any responsibility for and are
              not liable for any loss or damage resulting from reliance by any
              Job Seeker on any information on this Website or accessed by any
              Job Seeker though the Services provided on this Website.
              <br />
              16.6 When your Statutory Rights apply, to the extent possible, our
              liability in respect of any claim is limited to, at our option:
              <br />
              (a) The supply of any services again; or
              <br />
              (b) The payment of the cost of having any services supplied again;
              <br />
              in any event, our liability to you will not exceed AUD$100.
              <br />
              16.7 Our failure to exercise or enforce any right or provision of
              these Terms will not constitute a waiver of such right or
              <br />
              16.8 No agency, partnership, joint venture, or employment
              relationship is created between you and us as a result of these
              Terms and you do not have any authority of any kind to bind us in
              any respect whatsoever.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              17. JOB PAYMENT
            </h4>
            <p className="text-gray text-left leading-loose">
              17.1 At no time are we responsible for any remuneration, or any
              costs incurred by any Job Seeker that are not reimbursed by any
              Employer. It is solely up to the Job Seeker to ensure they are
              paid correctly, and that they provide receipts to the Employer and
              obtain reimbursement for any allowances that they may be entitled
              to in performance of the Job.
              <br />
              17.2 We are in no way responsible for remitting any tax or other
              payments to any regulator or government organisation on behalf of
              any Job Seeker. We have no affiliation or association with any
              Employer at any time beyond providing these Services including but
              not limited to employment, tax, payments, superannuation or any
              other business or legal requirement.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              18. MEDIATION AND DISPUTE RESOLUTION
            </h4>
            <p className="text-gray text-left leading-loose">
              18.1 All disputes, issues, dealings and complaints arising from
              any dealings or arrangements between Job Seekers and Employers:
              <br />
              (a) in relation to a Job described in any Position Vacancy or in
              any other information posted on the Website; or
              <br />
              (b) arising from the use of the Services,
              <br />
              are matters directly between Job Seekers and the Employers only
              and Job Seekers hereby waive any legal claims against us in
              respect to such disputes. Job Seekers and Employers agree to
              indemnify us for any costs we incur in relation to any claim which
              may result directly or indirectly from any disputes, issues,
              dealings and complaints arising from any dealings or arrangements
              between Job Seekers and Employers.
              <br />
              18.2 In the event of a dispute between a Job Seeker and Employer,
              we encourage Job Seekers to try and resolve disputes directly or
              through mediation provided by a provider of alternative dispute
              resolution (ADR) services. Job Seekers are responsible for paying
              any costs associated with the ADR service in accordance with the
              terms and conditions of the ADR service.
              <br />
              18.3 If a dispute, claim or issue arises between any Job Seeker
              and any other Job Seeker, Employer or third party in connection
              with the Website, the Services or these Terms:
              <br />
              (a) the dispute, claim or issue arising out of or in connection
              with our Services may be settled by confidential ADR at either
              party’s election and each party will bear its own costs for the
              ADR services; and
              <br />
              (b) those parties agree that confidentiality is paramount to the
              reputation of those parties. At no time must any communications or
              discussions be made public, including but not limited to any
              social media platforms or other websites. Any public discussions
              or comments about a party are considered defamatory, negative or
              otherwise damaging and will be the subject of compensation in any
              mediation or litigation claim.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              19. PARTIAL INVALIDITY OF PROVISIONS
            </h4>
            <p className="text-gray text-left leading-loose">
              19.1 If any provision of these Terms is void, illegal, invalid, or
              unenforceable in whole or in part, such provision will be
              severable from all other provisions herein and will not affect or
              impair the validity or enforceability of any other provisions of
              this agreement; provided, however, that a court having
              jurisdiction may revise such provision to the extent necessary to
              make such provision valid and enforceable.
              <br />
              19.2 Where any provision of these Terms would by any applicable
              statute be illegal, void, or unenforceable in any State or
              Territory of Australia then such provision shall not apply in that
              State or Territory and will be deemed never to have been included
              in these terms and conditions in that State or Territory. Such a
              provision if legal and enforceable in any other State or Territory
              shall continue to be fully enforceable and part of this agreement
              in those other States and Territories. The deemed exclusion of any
              term pursuant to this paragraph will not affect or modify the full
              enforceability and construction of the other provisions of these
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              20. MODIFICATION OF WEBSITE AND CONTENT
            </h4>
            <p className="text-gray text-left leading-loose">
              20.1 We reserve the right at any time and from time to time to
              remove, delete, alter or amend any Content or the website. In
              particular, if we believe the Content to be inappropriate,
              potentially breach regulations, receive complaints or for any
              other reason and in our reasonable discretion, we may remove or
              modify Content at any time without notice. We shall not be liable
              to you or any third party for any modification when it is
              <br />
              20.2 We reserve the right to disclose your name and any other
              personal details to any law enforcement authority or other
              competent authority or to any person for the purpose of legal
              proceedings, prosecution, investigation or any breach or alleged
              breach of the law or these Terms.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              21. THIRD PARTY LINKS
            </h4>
            <p className="text-gray text-left leading-loose">
              21.1 Our Website may contain links to third-party web sites or
              services that are not owned or controlled by us. We have no
              control over, and assume no responsibility for, the content,
              privacy policies, or practices of any third party websites. You
              further acknowledge and agree that we shall not be liable,
              directly or indirectly, for any damage or loss caused by or in
              connection with your use of or reliance on any such content, goods
              or services available on or through any such website.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              22. WHOLE AGREEMENT
            </h4>
            <p className="text-gray text-left leading-loose">
              22.1 These Terms represent the whole agreement between you and us
              concerning your use and access to our Website and your use and
              access to the documents and information on it. No other term is to
              be included in this agreement except where it is required to be
              included by any legislation of the Commonwealth of Australia or
              any State or Territory of Australia.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              23. GOVERNING LAW
            </h4>
            <p className="text-gray text-left leading-loose">
              23.1 These Terms are governed by the laws of Queensland,
              Australia, which are in force from time to time and both you and
              we agree to submit to the exclusive jurisdiction of the Courts of
              Queensland for determining any dispute concerning these Terms.
              <br />
              These Terms were last modified January 2023 and are effective from
              <br />
              [INSERT CHECKBOX] I have read and understood these Terms and agree
              to be bound by them.
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TermsAndConditionsJobSeeker;
