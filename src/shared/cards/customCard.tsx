import { Card } from '@material-tailwind/react';
import { ReactNode } from 'react';

interface IStyleClass {
  children: ReactNode;
  styleClass?: string;
  handleClick?: any;
}

function CustomCard({ children, styleClass, handleClick }: IStyleClass) {
  return (
    <Card className={`${styleClass} bg-white`} onClick={handleClick}>
      {children}
    </Card>
  );
}

export default CustomCard;
