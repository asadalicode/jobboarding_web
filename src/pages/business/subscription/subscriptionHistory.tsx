import { Chip } from '@material-tailwind/react';
import ContentContainer from '@src/containers/contentContainer';
import CustomCard from '@src/shared/cards/customCard';
import CustomButton from '@src/shared/customButton';
import CustomTable from '@src/shared/customTable';
import { useEffect } from 'react';

function createData(
  invoice: string,
  date: string,
  amount: string,
  status: string
) {
  return {
    invoice,
    date,
    amount,
    status,
  };
}
function columnData(name: string, sort: boolean) {
  return { name, sort };
}
const tableHead = [
  columnData('INVOICE', true),
  columnData('Date', true),
  columnData('Amount', true),
  columnData('Status', true),
];
const rows = [
  createData('https:invoice.pdf', '22-09-2022', '50', 'Unpaid'),
  createData('https:invoice.pdf', '22-09-2022', '50', 'Paid'),
  createData('https:invoice.pdf', '22-09-2022', '50', 'Paid'),
  createData('https:invoice.pdf', '22-09-2022', '50', 'Paid'),
];

function SubscriptionHistory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChangePage = (value: number) => {
    console.log('Page Clicked ==', value);
    return value;
  };
  const handleChangeRowsPerPage = (value: number) => {
    console.log('Row per page Clicked ==', value);
    return value;
  };
  const sortData = (sort: string, sortBy: string) => {
    console.log('Sort data ==', sort, sortBy);
    return sort;
  };

  return (
    <ContentContainer>
      <div className="flex flex-col justify-center gap-3 w-full px-16 sm:px-8 ">
        <CustomCard styleClass="flex w-full mx-auto flex-col  space-y-8 py-4   ">
          {/* overflow-auto max-h-[75vh] */}
          <div className=" text-left space-y-6">
            <h4 className="text-black font-semibold leading-none px-8 pt-4">
              Subscription History
            </h4>
            <hr className="text-gray-light" />
            <div className="flex sm:flex-col  gap-12 sm:gap-6 items-start bg-[#006AB508] p-8 sm:p-4 mx-8 sm:mx-2 rounded-lg">
              <div className="flex flex-col gap-4">
                <div className="flex items-end gap-12">
                  <div>
                    <h4 className="text-black font-semibold ">Membership</h4>
                    <h5 className="text-black font-semibold  ">
                      Entree Membership
                    </h5>
                  </div>
                  <CustomButton
                    type="button"
                    label="Monthly"
                    isLoading={false}
                    styleClass="btn-gray !text-yellow !rounded-md !h-auto !py-1 !px-5 relative bottom-2"
                  />
                </div>

                <CustomCard styleClass="!bg-blue p-6">
                  <h5 className="font-normal text-white">
                    You Are Currently Billed
                  </h5>
                  <h2 className="text-white font-semibold pt-5  leading-none">
                    $19
                  </h2>
                  <p className="text-white"> Per Month</p>
                </CustomCard>
              </div>
              <hr className="solid text-gray   h-56 sm:h-auto sm:w-full" />
              <div className="flex flex-col gap-6">
                <div className="flex items-end gap-12">
                  <div>
                    <h4 className="text-black font-semibold ">Billing Cycle</h4>
                    <p className="text-gray font-normal  ">
                      You will be charged on 16th every month
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6">
                  <CustomButton
                    type="button"
                    label="Change Plan"
                    isLoading={false}
                    styleClass="btn-yellow !px-12 sm:!h-auto sm:!px-6  !rounded-md "
                  />
                  <CustomButton
                    type="button"
                    label="Cancel Plan"
                    isLoading={false}
                    styleClass="btn-gray !text-gray !px-12 sm:!h-auto sm:!px-6  !rounded-md  "
                  />
                </div>
              </div>
            </div>
            <div className="">
              <CustomTable
                tableHead={tableHead}
                //   height={30}
                rows={rows}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                sortData={sortData}
              />
            </div>
          </div>
        </CustomCard>
      </div>
    </ContentContainer>
  );
}

export default SubscriptionHistory;
