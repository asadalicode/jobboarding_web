import React, { useEffect, useState } from 'react';
import BgBanner from '@assets/images/Banner.jpg';
import { useDispatch } from 'react-redux';
import BgBannerMobile from '@assets/images/BannerMobile.png';
import { setLayout } from '@src/shared/slices/LayoutSlice';

function TermsAndCondition() {
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
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">Disclaimer</h4>
            <p className="text-gray text-left font-semibold">
              Welcome to our website. If you continue to browse and use this
              website you are agreeing to comply with and be bound by the
              following disclaimer, together with our terms and conditions of
              use. The information contained in this website is for general
              information purposes only and is provided by
              hospitalityjobs.com.au. While we endeavour to keep the information
              up to date and correct, we make no representations
              <br />
              or warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability or availability
              with respect to
              <br />
              the website or the information, products, services, or related
              graphics contained on the website for any purpose. Any reliance
              you place on such information is therefore strictly at your own
              risk. You need to make your own enquiries to determine if the
              information or products are appropriate for your intended use.In
              no event will we be liable for any loss or damage including
              without limitation, indirect or consequential loss or damage, or
              any loss or damage whatsoever arising from loss of data or profits
              arising out of, or in connection with, the use of this website.
              Through this website you may be able to link to other websites
              which are not under the control of hospitalityjobs.com.au. We have
              no control over the nature, content and availability of those
              websites. The inclusion of any links does not necessarily imply a
              recommendation or endorse the views expressed within them.Every
              effort is made to keep the website up and running smoothly.
              <br />
              However, hospitalityjobs.com.au takes no responsibility for, and
              will not be liable for, the website being temporarily unavailable
              due to technical issues beyond our control.
              <br />
              <p className="font-bold text-black">COPYRIGHT NOTICE</p>
              This website and its contents are the copyright of Hospitality
              <br />
              Australia – © 2022. All rights reserved.
              <br />
              Any redistribution or reproduction of part or all of the contents
              in any form is prohibited other than the following. You may print
              or download contents to a local hard disk for your personal and
              non-commercial use only. You may copy some extracts only to
              individual third parties for their personal use, but only if you
              acknowledge the website as the source of the material.You may not,
              except with our express written permission, distribute or
              commercially exploit the content. You may not transmit it or store
              it on any other website or other form of electronic retrieval
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              AMENDMENT OF TERMS
            </h4>
            <p className="text-gray text-left leading-loose">
              We reserve the right to change, modify, add or remove portions of
              these terms at any time. Please check these terms regularly prior
              <br />
              website to ensure you are aware of any changes. We will endeavour
              to highlight any significant or substantive changes to you where
              possible. If you choose to use our website then we will regard
              that use as conclusive evidence of your agreement and acceptance
              that these terms govern your
              <br />
              and hospitalityjobs.com.au’s rights and obligations to each other.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              LIMITATION OF LIABILITY
            </h4>
            <p className="text-gray text-left leading-loose">
              It is an essential precondition to you using our website that you
              agree and accept that hospitalityjobs.com.au is not legally
              responsible for any loss or damage you might suffer related to
              your use of the website, whether from errors or from omissions in
              our documents or information, any goods or services we may offer
              or from any other use of the website. This includes your use or
              reliance on any third party content, links, comments or
              advertisements. Your use of, or reliance on, any information or
              materials on this website is entirely at your own risk, for which
              we shall not be liable. It shall be your own responsibility to
              ensure that any products, services or information available
              through this website meet your specific, personal requirements.
              You acknowledge that such information and materials may contain
              inaccuracies or errors and we expressly exclude liability for any
              such inaccuracies or errors to the fullest extent permitted by
              law.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              COMPETITION AND CONSUMER ACT
            </h4>
            <p className="text-gray text-left leading-loose">
              Our goods and services come with guarantees that cannot be
              excluded, modified or restricted under the Australian Consumer Law
              <br />
              addition to any manufacturer or supplier warranty. For the
              purposes of Schedule 2 of the Australian Consumer Law, in
              <br />
              particular Sections 51 to 53, 64 and 64A of Part 3-2, Division 1,
              Subdivision A of the Competition and Consumer Act 2010 (Cth),
              hospitalityjobs.com.au’s liability for any breach of a term of
              this agreement is limited to: the supplying of the goods or
              services to you again; the replacement of the goods; or the
              payment of the cost of having the goods or services supplied to
              you again.You must be over 18 years of age to use this website and
              to purchase any
              <br />
              goods or services.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              DELIVERY OF GOODS
            </h4>
            <p className="text-gray text-left leading-loose">
              Physical goods may be delivered by Australia Post and/or other
              reputable courier companies. Deliveries are processed promptly
              upon receipt of full payment. Delivery may take between 2 and 14
              days, depending on the delivery option. Damaged or lost orders
              should be resolved with Australia Post or the courier company
              directly and we are not responsible for goods that are damaged in
              transit or not received. Replacement of damaged or lost items is
              made at the discretion of hospitalityjobs.com.au.Digital goods are
              delivered immediately. Please be aware there are inherent risks
              associated with downloading any software and digital goods. Should
              you have any technical problems downloading any of our goods,
              <br />
              contact us so we may try to assist you.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              RETURNS AND REFUNDS
            </h4>
            <p className="text-gray text-left leading-loose">
              hospitalityjobs.com.au handles returns and processes refunds in
              accordance with the Australian Consumer Protection legislation.
              <br />
              Should you wish to return your order, please notify us within days
              of purchase with a valid reason for return. If we are unable to
              resolve your complaint or further assist you, we will process a
              refund upon timely receipt of the goods purchased. Unopened goods
              will be refunded in full. Refunds will be processed promptly and
              payment made by the same method that you made payment. All refunds
              are made at the discretion of hospitalityjobs.com.au.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              LINKS TO OTHER WEBSITES
            </h4>
            <p className="text-gray text-left leading-loose">
              Hospitalityjobs.com.au may from time to time provide on its
              website, links to other websites, advertisements and information
              on those websites for your convenience. This does not necessarily
              imply sponsorship, endorsement, or approval or arrangement between
              hospitalityjobs.com.au and the owners of those websites.
              hospitalityjobs.com.au takes no responsibility for any of the
              content found on the linked websites.
              <br />
              hospitalityjobs.com.au’s website may contain information or
              advertisements provided by third parties for which
              hospitalityjobs.com.au accepts no responsibility whatsoever for
              any information or advice provided to you directly by third
              parties. We are making a ‘recommendation’ only and are
              <br />
              not providing any advice nor do we take any responsibility for any
              advice received in this regard.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">DISCLAIMER</h4>
            <p className="text-gray text-left leading-loose">
              To the fullest extent permitted by law, hospitalityjobs.com.au
              absolutely disclaims all warranties, expressed or implied,
              including, but not limited to,
              <br />
              implied warranties of merchantability and fitness for any
              particular purpose. hospitalityjobs.com.au gives no warranty that
              the documents,
              <br />
              goods or services will be free of errors, or that defects will be
              corrected, or that our website or its server is free of viruses or
              any other harmful components. Whilst we, at all times endeavour to
              have the most accurate, reliable and up-to-date information on our
              website, we do not warrant or make any representations regarding
              the use or the result of the use of any document, product,
              service, link or information in its website or as to their
              correctness, suitability, accuracy, reliability, or otherwise. It
              is your sole responsibility and not the responsibility of
              hospitalityjobs.com.au to bear any and all costs of servicing,
              repairs, or correction. The applicable law in your state or
              territory may not permit these exclusions, particularly the
              exclusions of some implied warranties.
              <br />
              Some of the above may not apply to you but you must ensure you are
              aware of any risk you may be taking by using this website or any
              <br />
              or services that may be offered through it. It is your
              responsibility to do so.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">YOUR PRIVACY</h4>
            <p className="text-gray text-left leading-loose">
              At hospitalityjobs.com.au, we are committed to protecting your
              privacy. We use the information we collect about you to maximise
              the services that we provide to you. We respect the privacy and
              confidentiality of the information provided by you and adhere to
              the Australian Privacy Principles. Please read our separate
              Privacy Policy carefully. You may change your details at any time
              by advising us in writing via email. All information we receive
              from our customers is protected by our secure servers.
              hospitalityjobs.com.au’s secure server software encrypts all
              customer information before it is sent to us. Furthermore, all
              customer data collected is secured against unauthorised use or
              access. Credit card information is not stored by us on our
              servers.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              THIRD PARTIES
            </h4>
            <p className="text-gray text-left leading-loose">
              We do not and will not sell or deal in personal or customer
              information. We may however use in a general sense without any
              reference to your name,
              <br />
              your information to create marketing statistics, identify user
              demands and assist in meeting customer needs generally. In
              addition, we may use the
              <br />
              information that you provide to improve our website and services
              but not for any other use.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              DISCLOSURE OF INFORMATION
            </h4>
            <p className="text-gray text-left leading-loose">
              Hospitalityjobs.com.au may be required, in certain circumstances,
              to disclose information in good faith and where
              hospitalityjobs.com.au is required to do so in the following
              circumstances: by law or by any court; to enforce the terms of any
              of our customer agreements; or to protect the rights, property or
              safety of our customers or third parties.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              EXCLUSION OF COMPETITORS
            </h4>
            <p className="text-gray text-left leading-loose">
              If you are in the business of creating similar documents, goods or
              services for the purpose of providing them for a fee to users,
              whether they be
              <br />
              business users or domestic users, then you are a competitor of
              <br />
              hospitalityjobs.com.au. hospitalityjobs.com.au expressly excludes
              and does not permit you to use or access our website, to download
              any documents or information from its website or obtain any such
              documents or information through a third party. If you breach this
              term then hospitalityjobs.com.au will hold you fully responsible
              for any loss that we may sustain and further hold you accountable
              for all profits that you might make from such unpermitted and
              improper use. hospitalityjobs.com.au reserves the right to exclude
              and deny any person access to our website, services or information
              in our sole discretion.
              <br />
              COPYRIGHT, TRADEMARK AND RESTRICTIONS OF USE
              <br />
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance,
              <br />
              trademarks and graphics. You are not permitted to reproduce the
              documents, information or materials on the website for the
              purposes of
              <br />
              sale or the use by any third party. In particular you are not
              permitted to republish, upload, transmit electronically or
              otherwise or distribute any of
              <br />
              the materials, documents or products that may be available for
              download from time to time on this website.
              <br />
              hospitalityjobs.com.au expressly reserves all copyright and
              trademark in all documents, information and materials on our
              website and we reserve the right to take action against you if you
              breach any of these terms. Any redistribution or reproduction part
              or all of the contents in any form is prohibited other than than
              the following: you may print or download to a local hard disk
              extracts for your personal and non-commercial use only; and you
              may copy the content to individual third parties for their
              personal use, but only if you acknowledge the website as the
              source of the material.
              <br />
              You may not, except with our express written permission,
              distribute or commercially exploit the content. Nor may you
              transmit it or store it in any other website or other form of
              electronic retrieval system.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              WHOLE AGREEMENT
            </h4>
            <p className="text-gray text-left leading-loose">
              These terms and conditions represent the whole agreement between
              you and hospitalityjobs.com.auconcerning your use and access
              <br />
              to hospitalityjobs.com.au’s website and your use and access to the
              documents and information on it. No other term is to be included
              in this agreement except where it is required to be included by
              any legislation of the Commonwealth or any State or Territory. All
              implied terms except those
              <br />
              implied by statute and which cannot be expressly excluded are
              hereby expressly excluded.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              EXCLUSION OF UNENFORCEABLE TERMS
            </h4>
            <p className="text-gray text-left leading-loose">
              Where any clause or term above would by any applicable statute be
              illegal, void, or unenforceable in any State or Territory then
              such a clause shall not
              <br />
              apply in that State or Territory and shall be deemed never to have
              been included in these terms and conditions in that State or
              Territory. Such a
              <br />
              clause if legal and enforceable in any other State or Territory
              shall continue to be fully enforceable and part of this agreement
              in those other States and Territories. The deemed exclusion of any
              term pursuant to this paragraph shall not affect or modify the
              full enforceability and construction of the other clauses of these
              terms and conditions.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              CLASSIFIEDS – ADVERTISERS
            </h4>
            <p className="text-gray text-left leading-loose">
              By providing content or posting directly on
              hospitalityjobs.com.au, you represent that you have the right to
              and title in this information and
              <br />
              content, you own it and have the right to present and publish it.
              You also represent that you are not breaching any regulations,
              restrictions or third party rights. If we have reasonable grounds
              to suspect the information you provide in any profile or on our
              site is untrue, inaccurate or incomplete, or that you have
              breached any terms and conditions on hospitalityjobs.com.au, or
              for any other reason including if, in our opinion, you have
              breached the purpose of our website, at our sole discretion we
              have the right to immediately withdraw the content and terminate
              your account. We may also deny the use of our website to you in
              the future and are not obligated to return any subscription or
              registration monies. You agree to defend, indemnify and hold
              hospitalityjobs.com.au, its officers, directors, members and
              agents harmless from and against any and all claims, charges,
              actions, liabilities, investigations, demands and similar,
              including but not limited to any costs, losses, damages whether
              direct, indirect, consequential or special and all legal fees
              resulting from your
              <br />
              breach of our terms and conditions, content you may provide to our
              website, and any activity you may engage in through our website or
              use of our website.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">
              CLASSIFIEDS – VISITORS
            </h4>
            <p className="text-gray text-left leading-loose">
              By using our website, you acknowledge that our advertisers are
              third party advertisers and we do not have any connection with
              them. We do not recommend, endorse or promote them, nor do they
              have any affiliation with hospitalityjobs.com.au.
              hospitalityjobs.com.au is merely a passive
              <br />
              conduit as provider for the advertising service and does not have
              any association beyond this.hospitalityjobs.com.au does not make
              any representation as to the accuracy or suitability of any of the
              information contained in those advertisements or
              <br />
              sites and does not accept any responsibility or liability for the
              conduct or content of those advertisements and sites and the
              offerings made by these third parties. Whilst we take reasonable
              care to monitor our website, we do not undertake any liability or
              obligation with regard to their content and you therefore use
              those websites and services at your own
              <br />
              risk.hospitalityjobs.com.au is not responsible for any loss,
              damage or issues you may have with the advertiser and cannot be
              held responsible for any direct or indirect loss you may suffer as
              a result of using their products or services. We also cannot
              confirm that the information on any of the third party advertising
              sites is accurate or up-to-date.
              <br />
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-black font-semibold text-left">JURISDICTION</h4>
            <p className="text-gray text-left leading-loose">
              This agreement and this website are subject to the laws of QLD and
              Australia. If there is a dispute between you and
              hospitalityjobs.com.au that
              <br />
              results in litigation then you must submit to the jurisdiction of
              the courts of QLD
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsAndCondition;
