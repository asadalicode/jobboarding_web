import { setLayout } from '@src/shared/slices/LayoutSlice';
import { useDispatch } from 'react-redux';

function NotFound() {
  const dispatch = useDispatch();
  dispatch(
    setLayout({
      isShowFooter: false,
      isShowHeader: false,
    })
  );
  return (
    <p className="flex justify-center items-center h-screen text-9xl bg-gray-light">
      404
    </p>
  );
}

export default NotFound;
