import CustomCard from '@src/shared/cards/customCard';
import { ReactComponent as CheckIcon } from '@assets/icons/check.svg';
import CustomButton from '@src/shared/customButton';
import { useNavigate } from 'react-router-dom';
import ContentContainer from '@src/containers/contentContainer';
import Popup from '@src/shared/popup';
import StripePopup from '@src/shared/stripePopup';
import { useEffect, useState } from 'react';
import { getAllSubscriptoionAPICall } from '@src/shared/service/subscriptionService';

const popupContent = `
<p style="width:75%; text-align: center; margin-top:20px">
Please be aware your membership will automatically renew each month unless you pause it.
</p>

  `;

function ChooseMembership() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [planId, setPlanId] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [subscriptionList, setSubscriptionList] = useState<
    ISubscription.Payload[]
  >([]);
  const navigate = useNavigate();
  const navigateTo = (link: string) => {
    navigate(link);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getSubscription = async () => {
      setIsLoading(true);
      const _result = await getAllSubscriptoionAPICall();
      console.log(_result);
      setIsLoading(false);
      if (_result.success) {
        setSubscriptionList(_result.data);
      }
    };
    getSubscription();
  }, []);

  return (
    <ContentContainer>
      <Popup width={700} isOpen={isOpenPopup} setIsOpenPopup={setIsOpenPopup}>
        <StripePopup content={popupContent} buttonLabel="Ok" planId={planId} />
      </Popup>
      <div className="flex flex-col justify-center gap-6 w-full px-16 sm:px-8">
        <h4 className="text-black font-semibold uppercase">Membership</h4>
        <div className="flex sm:flex-col justify-center gap-6">
          {subscriptionList.map((subscription: any) => (
            <MembershipCard
              membership={subscription}
              setIsOpenPopup={setIsOpenPopup}
              setPlanId={setPlanId}
            />
          ))}
        </div>
        <CustomButton
          handleButtonClick={() => navigateTo('/')}
          type="button"
          label="Skip"
          isLoading={false}
          styleClass="btn-yellow !w-max mx-auto capitalize !rounded-md !px-16"
        />
      </div>
    </ContentContainer>
  );
}

export default ChooseMembership;

interface IMembershipCard {
  membership: ISubscription.Payload;
  setIsOpenPopup: (value: boolean) => void;
  setPlanId: (value: number) => void;
}

function MembershipCard({
  membership,
  setIsOpenPopup,
  setPlanId,
}: IMembershipCard) {
  const handlePopup = (planId: number) => {
    setIsOpenPopup(true);
    setPlanId(planId);
  };
  return (
    <CustomCard styleClass="flex w-auto ease-out duration-300 hover:border-4 hover:border-yellow border-4 border-transparent  flex-col  space-y-10 px-6 py-12 ">
      <div className="space-y-2">
        <h5 className="text-black font-semibold">
          {membership.title} <br />{' '}
        </h5>
        <hr className="text-yellow-secondary w-1/4 mx-auto border-2" />
      </div>

      <div className="space-y-3">
        <div className="flex gap-3 items-center">
          <CheckIcon className="h-5 w-auto" />{' '}
          <p className="text-gray">
            {membership.work_now_jobs} Work Now Job Ads
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <CheckIcon className="h-5 w-auto" />{' '}
          <p className="text-gray">
            {membership.no_of_candidates} Employee Profiles To Contact
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <CheckIcon className="h-5 w-auto" />{' '}
          <p className="text-gray">
            {membership.permanent_jobs} Permanent Job Ad
          </p>
        </div>
      </div>
      <div className="space-y-5 mx-auto flex flex-col">
        <CustomButton
          type="button"
          label="$19 Per Month"
          isLoading={false}
          styleClass="btn-gray !w-max !text-yellow  capitalize !rounded-3xl !h-auto !px-8"
        />
        <CustomButton
          type="button"
          label="Start Free Trial"
          isLoading={false}
          styleClass="btn-yellow !w-max capitalize !rounded-md !px-8"
          handleButtonClick={() => handlePopup(membership?.id ?? 0)}
        />
      </div>
    </CustomCard>
  );
}
