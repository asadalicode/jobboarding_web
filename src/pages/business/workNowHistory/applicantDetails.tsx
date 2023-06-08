import CustomButton from '@src/shared/customButton';
import Person from '@assets/icons/person_.png';
import { ReactComponent as PersonIcon } from '@assets/icons/Person.svg';
import CustomTable from '@src/shared/customTable';
import RatingStars from '@src/shared/ratingStars';
import MaterialTable from '@mui/material';
import CustomDialog from '@src/shared/dialog';
import { useEffect, useState } from 'react';
import VerifyDelete from '@src/shared/verify';
import Input from '@src/shared/input';
import { useNavigate } from 'react-router-dom';
import { getApplicationDetail } from '@src/shared/service/businessServices/jobHistoryService';

function createData(
  id: string,
  profile_picture: any,
  employee_name: string,
  job_role: string,
  job_type: string,
  email_id: string,
  phone_number: string,
  date: string,
  myRating: number
) {
  return {
    id,
    profile_picture,
    employee_name,
    job_role,
    job_type,
    email_id,
    phone_number,
    date,
    myRating,
  };
}
function columnData(name: string, sort: boolean) {
  return { name, sort };
}

const tableHead = [
  columnData('ID', true),
  columnData('Profile Picture', true),
  columnData('Employee Name', true),
  columnData('Job Role', true),
  columnData('Job Type', true),
  columnData('Email ID', true),
  columnData('Phone Number', true),
  columnData('Date', true),
  columnData('Your rating', true),
  // columnData("Action", false),
];

function ApplicantDetails() {
  const navigate = useNavigate();
  const [isShow, setModal] = useState(false);
  const [isShowVerifyModal, setVerifyModal] = useState(false);
  const [tableRows, setTableRows] = useState([]);
  const rows = [
    createData(
      '#01',
      '',
      'Alex John',
      'Bar Staff',
      'Work Now',
      'johndoe@gmail.com',
      '+82 54566645',
      '22-09-2022',
      5
    ),
    createData(
      '#01',
      '',
      'Alex John',
      'Bar Staff',
      'Work Now',
      'johndoe@gmail.com',
      '+82 54566645',
      '22-09-2022',
      4
    ),
    createData(
      '#01',
      '',
      'Alex John',
      'Bar Staff',
      'Work Now',
      'johndoe@gmail.com',
      '+82 54566645',
      '22-09-2022',
      1
    ),
    createData(
      '#01',
      '',
      'Alex John',
      'Bar Staff',
      'Work Now',
      'johndoe@gmail.com',
      '+82 54566645',
      '22-09-2022',
      5
    ),
    createData(
      '#01',
      '',
      'Alex John',
      'Bar Staff',
      'Work Now',
      'johndoe@gmail.com',
      '+82 54566645',
      '22-09-2022',
      5
    ),
    createData(
      '#01',
      '',
      'Alex John',
      'Bar Staff',
      'Work Now',
      'johndoe@gmail.com',
      '+82 54566645',
      '22-09-2022',
      5
    ),
    createData(
      '#01',
      '',
      'Alex John',
      'Bar Staff',
      'Work Now',
      'johndoe@gmail.com',
      '+82 54566645',
      '22-09-2022',
      5
    ),
  ];
  useEffect(() => {
    getJobs();
  }, []);
  const getJobs = async () => {
    const res = await getApplicationDetail();
    setTableRows(res.data);
    console.log('work Now Post ==', res);
  };
  const onEdit = (row: any) => {
    console.log('edit Clicked ==', row);
  };
  const onView = (row: any) => {
    navigate(`/viewProfile/${row.id}`);
  };
  const onDelete = (row: any) => {
    setVerifyModal(true);
    // <VerifyDelete isShow={isShowVerify}  />
    console.log('delete clicked', row);
  };
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

  const ratingChanged = (val: any) => {
    console.log(val);
  };
  const onRatingAction = (val: any) => {
    console.log('rating', val);
    setModal(true);
  };

  const handleVerifyDelete = () => {
    console.log('@@@@@');
  };

  const header = () => (
    <div className="flex w-full text-center justify-center place-content-center flex-col gap-1">
      <h4 className="text-black">Your Star Rating And Review</h4>
      <p className="text-black text-sm opacity-50 font-normal">
        Your Guide To Leaving A Review - Which Makes Our Site Much Stronger!
      </p>
    </div>
  );

  const footer = () => (
    <div className="flex justify-center gap-4">
      <CustomButton
        label="Submit"
        isLoading={false}
        type="button"
        styleClass="btn-yellow !px-16  w-full !rounded "
      />
    </div>
  );

  return (
    <div>
      <div className="flex flex-col gap-3 justify-between ">
        <div className="flex justify-between px-6 sm:px-2 sm:items-center">
          <h4 className="text-black font-semibold">Applicants Details </h4>
          <div className="flex">
            <Input
              name="search"
              placeholder="Search..."
              handldChange={(e: any) => {
                console.log('search ==', e.target.value);
              }}
            />
          </div>
        </div>
        <div className="">
          <VerifyDelete
            isOpen={isShowVerifyModal}
            handleSubmit={handleVerifyDelete}
            handleClose={() => setVerifyModal(false)}
            title="Are You Sure You Want To Delete This Candidate?"
          />
          <CustomDialog
            isOpen={isShow}
            size="lg"
            handleClose={() => setModal(false)}
            Header={header}
            Footer={footer}
          >
            <div className="flex flex-col gap-3 px-12 md:px-6 sm:px-0">
              <div className="flex w-full items-center justify-between  p-5 px-8 sm:px-4   md:px-4 rounded-md bg-gray-light">
                <h5 className="text-black font-semibold sm:text-xs max-w-[70%]">
                  Amazing! Well Presented And Hard Working!
                </h5>
                <div className="sm:hidden">
                  <RatingStars
                    count={4}
                    isEditable
                    color=""
                    activeColor="#ffd700"
                  />
                </div>
                <div className="md:hidden lg:hidden">
                  <RatingStars
                    count={4}
                    isEditable
                    size={16}
                    color=""
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <div className="flex w-full items-center justify-between  p-5 px-8 sm:px-4   md:px-4 rounded-md bg-gray-light">
                <h5 className="text-black font-semibold sm:text-xs max-w-[70%]">
                  A Good Worker, Reliable And Experienced.
                </h5>
                <div className="sm:hidden">
                  <RatingStars
                    count={3}
                    isEditable
                    color=""
                    activeColor="#ffd700"
                  />
                </div>
                <div className="md:hidden lg:hidden">
                  <RatingStars
                    count={3}
                    isEditable
                    size={16}
                    color=""
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <div className="flex w-full items-center justify-between  p-5 px-8 sm:px-4   md:px-4 rounded-md bg-gray-light">
                <h5 className="text-black font-semibold sm:text-xs max-w-[70%]">
                  Just "OK"
                </h5>
                <div className="sm:hidden">
                  <RatingStars
                    count={2}
                    isEditable
                    color=""
                    activeColor="#ffd700"
                  />
                </div>
                <div className="md:hidden lg:hidden">
                  <RatingStars
                    count={2}
                    isEditable
                    size={16}
                    color=""
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <div className="flex w-full items-center justify-between  p-5 px-8 sm:px-4   md:px-4 rounded-md bg-gray-light">
                <h5 className="text-black font-semibold sm:text-xs max-w-[70%]">
                  No Show Or Bad Presentation Or Attidue
                </h5>
                <div className="sm:hidden">
                  <RatingStars
                    count={1}
                    isEditable
                    color=""
                    activeColor="#ffd700"
                  />
                </div>
                <div className="md:hidden lg:hidden">
                  <RatingStars
                    count={1}
                    isEditable
                    size={16}
                    color=""
                    activeColor="#ffd700"
                  />
                </div>
              </div>
            </div>
          </CustomDialog>
          <CustomTable
            tableHead={tableHead}
            height={50}
            onRatingAction={onRatingAction}
            rows={tableRows}
            isEdit
            isDelete
            isView
            isViewText="View Profile"
            isAction
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            sortData={sortData}
            ratingChanged={ratingChanged}
          />
        </div>
      </div>
    </div>
  );
}

export default ApplicantDetails;
