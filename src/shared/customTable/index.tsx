import React, { Fragment, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { ReactComponent as SortingIcon } from '@assets/icons/sortingIcon.svg';
import {
  ReactComponent as EditIcon,
  ReactComponent as DeleteIcon,
} from '@assets/icons/upload.svg';
import OptionIcon from '@assets/icons/option.png';
import PersonIcon from '@assets/icons/person_.png';

import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import environment from '@src/environment';
import Style from './customTable.module.scss';
import RatingStars from '../ratingStars';
import CustomButton from '../customButton';

function TableHeading({ tableHeading, isAction, isCheckBox, sortData }: any) {
  const [order, setOrder] = useState<string>('asc');
  const [orderBy, setOrderBy] = useState<string>('');

  useEffect(() => {
    if (orderBy) {
      sortData(order, orderBy);
    }
  }, [order, orderBy]);

  const createSortHandler = (label: string, isSort: boolean) => {
    if (isSort) {
      setOrder(order === 'asc' ? 'desc' : 'asc');
      setOrderBy(label);
    }
  };
  return (
    <TableHead>
      <TableRow>
        {isCheckBox && (
          <TableCell sx={{ backgroundColor: '#F4F4F4' }} padding="checkbox">
            <Checkbox
              color="default"
              indeterminate
              checked={false}
              // onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
        )}
        {tableHeading.map((heading: any, index: any) => (
          <TableCell
            key={index}
            sx={{
              backgroundColor: '#F4F4F4',
              whiteSpace: 'nowrap',
              textTransform: 'capitalize',
            }}
          >
            <TableSortLabel
              active={orderBy === heading.name}
              direction={order === 'asc' ? 'asc' : 'desc'}
              hideSortIcon={!heading.sort}
              IconComponent={SortingIcon}
              sx={{
                display: 'flex !important',
              }}
              onClick={() => createSortHandler(heading.name, heading.sort)}
            >
              <p className="font-bold mr-8 sm:text-sm">{heading.name}</p>
            </TableSortLabel>
          </TableCell>
        ))}
        {isAction && (
          <TableCell key={1} sx={{ backgroundColor: '#F4F4F4' }} colSpan={2}>
            <p className="font-bold mr-8">Action</p>
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
}

function Pagination({
  handleChangePage,
  handleChangeRowsPerPage,
  pageLength,
}: any) {
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const onHandleChangePage = (event: unknown, newPage: number) => {
    handleChangePage(newPage);
    setPage(newPage);
    return newPage;
  };
  const onHandleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // eslint-disable-next-line radix
    const _rowsPerPage = parseInt(event.target.value);
    handleChangeRowsPerPage(_rowsPerPage);
    setRowsPerPage(_rowsPerPage);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[2, 5, 10, 25, 100]}
      component="div"
      count={pageLength}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onHandleChangePage}
      onRowsPerPageChange={onHandleChangeRowsPerPage}
    />
  );
}

function CustomTable({
  tableHead,
  rows,
  isCheckBox,
  isEdit = false,
  isDelete = false,
  onEdit = () => {},
  onView = () => {},
  onDelete = () => {},
  onRatingAction = () => {},
  handleChangePage,
  handleChangeRowsPerPage,
  sortData,
  height = 50,
  isAction = false,
  isView,
  isViewText = 'View',
  rating = true,
  ratingChanged,
}: TableProps) {
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const onEditButton = (row: any) => {
    onEdit(row);
  };

  const onDeleteButton = (row: any) => {
    onDelete(row);
  };
  const onRatingButton = (row: any) => {
    onRatingAction(row);
  };
  const onHandleChangePage = (newPage: number) => {
    handleChangePage(newPage);
    setPage(newPage);
    return newPage;
  };
  const onHandleChangeRowsPerPage = (rows1: number) => {
    handleChangeRowsPerPage(rows1);
    setRowsPerPage(rows1);
    return rows1;
  };
  const onSelectClick = (itemId: number, check: boolean) => {
    // eslint-disable-next-line array-callback-return, consistent-return
    const _selected = rows.find((obj: any) => {
      const _obj = obj;
      if (_obj.id === itemId) {
        _obj.check = !check;
        return _obj;
      }
    });
    return _selected;
  };
  return (
    <div className={Style.container}>
      <Paper sx={{ width: '100%' }} className="!shadow-none   ">
        <TableContainer component={Paper} className="!shadow-none !h-[50vh]">
          <Table
            // sx={{ minWidth: 650, height: 400}}
            className=""
            aria-label="simple table"
            stickyHeader
          >
            <TableHeading
              tableHeading={tableHead}
              isCheckBox={isCheckBox}
              isAction={isAction}
              sortData={sortData}
            />

            <TableBody>
              {rows
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index: number) => (
                  <TableRow key={row.name}>
                    {isCheckBox && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="default"
                          checked={row.check}
                          inputProps={{
                            'aria-labelledby': 'label',
                          }}
                          onChange={() => onSelectClick(row.id, row.check)}
                        />
                      </TableCell>
                    )}
                    {Object.entries(row).map(([key, value]: any) => (
                      <Fragment key={key}>
                        <TableCell
                          style={{
                            width: 500,
                            color: '#747474',
                            textTransform: 'capitalize',
                          }}
                        >
                          <div className="inline-flex gap-2">
                            {key !== 'profile_picture' &&
                              key !== 'employee_name' &&
                              key !== 'myRating' &&
                              key !== 'invoice' &&
                              key !== 'applicant_name' &&
                              key !== 'status' && (
                                <p className="whitespace-nowrap sm:text-sm">
                                  {value}
                                </p>
                              )}
                            {key === 'profile_picture' && (
                              <img
                                className="h-10 w-auto"
                                src={
                                  value?.profile_picture
                                    ? environment.serverUrl +
                                      value.profile_picture
                                    : PersonIcon
                                }
                                alt="personIcon"
                              />
                            )}
                            {key === 'applicant_name' && (
                              <div className="flex">
                                <p className="w-20 sm:text-sm">
                                  {value.employee_name}
                                </p>
                                <RatingStars
                                  size={16}
                                  count={parseInt(value.rating, 10) || 2}
                                />
                                <p className="w-20 sm:text-sm text-yellow">{`(${value.totalReview})`}</p>
                              </div>
                            )}
                            {key === 'status' && (
                              <CustomButton
                                type="button"
                                label={value}
                                isLoading={false}
                                styleClass={
                                  value.toLowerCase() === 'closed' ||
                                  value.toLowerCase() === 'unpaid'
                                    ? 'btn-pink !rounded-3xl !h-auto !py-2 !w-24'
                                    : 'btn-green !rounded-3xl !h-auto !py-2 !w-24'
                                }
                              />
                            )}
                            {key === 'invoice' && (
                              <div className="flex items-center gap-3">
                                <p>{index + 1}</p>
                                <CustomButton
                                  type="button"
                                  label="Download"
                                  isLoading={false}
                                  styleClass="btn-white !h-auto !py-2 !rounded-md"
                                />
                              </div>
                            )}
                            {key === 'myRating' && (
                              // eslint-disable-next-line react/jsx-no-useless-fragment
                              <>
                                {value > 0 ? (
                                  <RatingStars
                                    size={16}
                                    count={parseInt(value, 10)}
                                  />
                                ) : (
                                  // eslint-disable-next-line max-len
                                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                                  <p
                                    onClick={() => onRatingButton(row)}
                                    className="text-blue cursor-pointer underline"
                                  >
                                    Your rating
                                  </p>
                                )}
                              </>
                            )}
                          </div>
                        </TableCell>
                      </Fragment>
                    ))}
                    {isAction && (
                      <TableCell>
                        <Menu>
                          <MenuHandler className="bg-gray-light py-4 px-3 rounded-lg cursor-pointer">
                            <img
                              className="cursor-pointer object-cover border border-white rounded-full"
                              src={OptionIcon}
                              alt="option"
                            />
                          </MenuHandler>
                          <MenuList className=" p-2 min-w-0 w-32 bg-white rounded-[7px]">
                            {isDelete && (
                              <>
                                <MenuItem
                                  onClick={() => onDeleteButton(row)}
                                  className="capitalize py-2  items-start opacity-85"
                                >
                                  <p className=" inline-flex sm:text-sm">
                                    Delete
                                  </p>
                                </MenuItem>
                                <hr className="solid opacity-30" />
                              </>
                            )}
                            {isView && (
                              <MenuItem
                                onClick={() => onView(row)}
                                className="capitalize py-2  items-start opacity-85"
                              >
                                <p className=" inline-flex sm:text-sm">
                                  {isViewText}
                                </p>
                              </MenuItem>
                            )}
                          </MenuList>
                        </Menu>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="flex sm:block xs:block justify-between items-center mt-2">
          <p className="mx-10 py-2 px-4  text-gray bg-gray-light rounded-sm">
            Recent 10 Jobs Posted
          </p>
          <Pagination
            pageLength={rows.length}
            handleChangePage={onHandleChangePage}
            handleChangeRowsPerPage={onHandleChangeRowsPerPage}
          />
        </div>
      </Paper>
    </div>
  );
}

export default CustomTable;

interface TableProps {
  tableHead: any;
  rows: any;
  onEdit?: (id: string) => void;
  onView?: (id: string) => void;
  onDelete?: (id: any) => void;
  onRatingAction?: (id: string) => void;
  handleChangePage: (id: number) => number;
  handleChangeRowsPerPage: (id: number) => number;
  sortData: (sort: string, srotBy: string) => string;
  height?: number;
  isCheckBox?: boolean;
  isAction?: boolean;
  isEdit?: boolean;
  isDelete?: boolean;
  isView?: boolean;
  isViewText?: string;
  rating?: boolean;
  ratingChanged?: any;
}
