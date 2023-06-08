import CustomCard from '@src/shared/cards/customCard';
import { Avatar } from '@material-tailwind/react';
import PersonIcon from '@assets/icons/person_img.png';
import RatingStars from '@src/shared/ratingStars';
import { ReactComponent as PdfIcon } from '@assets/icons/pdf.svg';
import { ReactComponent as DownloadIcon } from '@assets/icons/download.svg';
import { ReactComponent as PencilIcon } from '@assets/icons/pencil.svg';
import CustomButton from '@src/shared/customButton';
import { useNavigate, useParams } from 'react-router-dom';
import ContentContainer from '@src/containers/contentContainer';
import { useDispatch } from 'react-redux';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import { useEffect } from 'react';
import { GetStorage } from '@src/shared/utils/authService';
import environment from '@src/environment';

function BusinessProfileSetting() {
  const userDetail = GetStorage()?.data;
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(
    setLayout({
      isShowFooter: false,
      isShowHeader: false,
    })
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const routeTo = (link: string) => {
    navigate(link);
  };
  return (
    <ContentContainer>
      <div className="flex flex-col justify-center gap-3 w-full px-16 sm:px-0">
        <CustomCard styleClass="flex w-full  mx-auto flex-col  space-y-8 pt-6 pb-24 px-8 ">
          <div className="flex justify-end">
            <CustomButton
              handleButtonClick={() => routeTo('/business/subscriptionHistory')}
              label="Subscription History"
              isLoading={false}
              type="button"
              styleClass="btn-yellow !px-16   !rounded "
            />
          </div>
          <div className="flex flex-wrap gap-12 sm:gap-6 justify-between items-center">
            <div className="flex flex-wrap gap-12 sm:gap-6 items-center">
              <div className="flex items-center gap-6">
                {userDetail.company_logo_url ? (
                  <img
                    className="w-20 "
                    src={environment.serverUrl + userDetail.company_logo_url}
                    alt="Company logo here"
                  />
                ) : (
                  <Avatar size="xxl" src={PersonIcon} />
                )}

                <div className="text-left">
                  <h4 className="text-black font-semibold leading-none">
                    {userDetail.company_name}
                  </h4>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="text-left space-y-3">
                  <p className="text-black font-semibold">Email</p>
                  <p className="text-gray">{userDetail.email}</p>
                </div>
                <div className="text-left space-y-3">
                  <p className="text-black font-semibold">Phone</p>
                  <p className="text-gray">{userDetail.phone}</p>
                </div>
              </div>
            </div>
            <PencilIcon
              onClick={() => routeTo(`/businessRegister/?id=${1}`)}
              className="cursor-pointer"
            />
          </div>

          <section className="space-y-6">
            <hr className="text-gray-light" />

            <div className="flex flex-wrap gap-6 justify-between">
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">Contact Person</p>
                <div>
                  <p className="text-gray">{userDetail.contact_person}</p>
                </div>
              </div>
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">Address-Street</p>
                <p className="text-gray">{userDetail.address}</p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">Suburb & State</p>
                <p className="text-gray">{userDetail.location}</p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-black font-semibold">Post Code</p>
                <p className="text-gray">{userDetail.postal_code}</p>
              </div>
            </div>
          </section>
        </CustomCard>
      </div>
    </ContentContainer>
  );
}
export default BusinessProfileSetting;
