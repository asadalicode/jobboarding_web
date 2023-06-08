import React from 'react';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#ffffff',
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#006AB5 !important',
    opacity: 1,
  },
  '.MuiSwitch-track': {
    backgroundColor: '#e7e7e7 !important',
    opacity: 1,
  },
}));
function SwitchButton({ flag, onSwitchButton = () => {} }: SwitchProps) {
  return (
    <CustomSwitch
      defaultChecked={flag}
      onChange={(e) => onSwitchButton(e.target.checked)}
    />
  );
}

export default SwitchButton;
interface SwitchProps {
  flag?: boolean;
  onSwitchButton?: (falg: boolean) => void;
}
