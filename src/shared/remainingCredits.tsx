import React, { Fragment } from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Tooltip,
} from '@material-tailwind/react';
import { ReactComponent as Close } from '@assets/icons/close.svg';
import { ReactComponent as Information } from '@assets/icons/information-btn.svg';

const jobSeekerMenuItems = [
  {
    title: 'Work Now Job Ads',
    count: '1/2',
    content: 'You can post 2 Work Now Jobs!',
  },
  {
    title: 'Employee Profiles To Contact',
    count: '3/4',
    content: 'You can View Contect Detail of 4 Employess',
  },
  {
    title: 'Permanent Job Ad',
    count: '1/1',
    content: 'You can post 1 Permanent Job Ad',
  },
];
export interface IHeaderProps {
  isShow?: boolean;
}
function RemainingCredits({ isShow }: IHeaderProps) {
  return isShow ? (
    <Menu>
      <MenuHandler>
        <div className="btn-yellow z-10 fixed top-56 -right-14 md:-right-10 sm:-right-16 sm:!h-9 -rotate-90 flex justify-center items-center !rounded-md cursor-pointer">
          <p>Remaining Credits</p>
        </div>
      </MenuHandler>
      <MenuList className="-mt-44 bg-white rounded-md">
        <div className="flex justify-between">
          <p className="flex justify-center text-black font-semibold my-2 w-full">
            Your Remaining Credits
          </p>
          <Close height={25} className="cursor-pointer" />
        </div>
        {jobSeekerMenuItems.map((item, key) => (
          <Fragment key={key}>
            <hr className="text-gray-light" />
            <Tooltip
              className="bg-white text-blue shadow-gray shadow-md py-4"
              content={
                <p className="flex items-center">
                  <Information className="mx-2" />
                  {item.content}
                </p>
              }
              placement="top-start"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <MenuItem className="capitalize  space-y-3  opacity-85 !w-72 flex justify-start items-center hover:bg-white">
                <p className=" inline-flex gap-2 w-full text-black font-semibold">
                  {item.title}
                </p>
                <p className="bg-yellow w-9 h-8 rounded-full text-white flex justify-center items-center !mt-0">
                  {item.count}
                </p>
              </MenuItem>
            </Tooltip>
          </Fragment>
        ))}
      </MenuList>
    </Menu>
  ) : null;
}

export default RemainingCredits;
