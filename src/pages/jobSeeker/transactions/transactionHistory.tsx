import ContentContainer from '@src/containers/contentContainer';
import CustomCard from '@src/shared/cards/customCard';
import CustomTable from '@src/shared/customTable';
import { useEffect, useState } from 'react';

function createData(
  id: number,
  company_name: string,
  job_role: string,
  date: string,
  amount: string
) {
  return {
    id,
    company_name,
    job_role,
    date,
    amount,
  };
}
function columnData(name: string, sort: boolean) {
  return { name, sort };
}
const tableHead = [
  columnData('ID', true),
  columnData('Company name', true),
  columnData('Job Role', true),
  columnData('Date', true),
  columnData('Amount', true),
];
const rows = [
  createData(1, 'Paella Joes', 'Bar Staff', '22-09-2022', '50'),
  createData(1, 'Paella Joes', 'Bar Staff', '22-09-2022', '50'),
  createData(1, 'Paella Joes', 'Bar Staff', '22-09-2022', '50'),
  createData(1, 'Paella Joes', 'Bar Staff', '22-09-2022', '50'),
];

function TransactionHistory() {
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
      <div className="flex flex-col justify-center gap-3 w-full px-16 sm:px-0">
        <CustomCard styleClass="flex w-full mx-auto flex-col  space-y-8 py-4   ">
          {/* overflow-auto max-h-[75vh] */}
          <div className=" text-left space-y-6">
            <h4 className="text-black font-semibold leading-none px-8 pt-4">
              Transactions Detail
            </h4>
            <hr className="text-gray-light" />
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
export default TransactionHistory;
