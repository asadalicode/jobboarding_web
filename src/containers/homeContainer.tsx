import Footer from '@src/shared/footer';
import Header from '@src/shared/navbar';
import RemainingCredits from '@src/shared/remainingCredits';
import { selectLayout } from '@src/shared/slices/LayoutSlice';
import { RootState } from '@src/shared/store/store';
import { IsBusiness } from '@src/shared/utils/authService';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import { Outlet } from 'react-router-dom';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function HomeContainer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const shellProps: any = useTypedSelector(selectLayout);
  const [layoutProps, setLayout] = useState({
    isShowHeader: false,
    isShowFooter: false,
    isShowCreditLabel: false,
  });
  useMemo(() => {
    setLayout(shellProps);
  }, [shellProps]);
  return (
    <div className="relative">
      <Header isShow={layoutProps.isShowHeader} />
      {IsBusiness() && <RemainingCredits isShow />}
      <Outlet />
      <Footer isShow={layoutProps.isShowFooter} />
    </div>
  );
}
export default HomeContainer;
