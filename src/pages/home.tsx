import MainVideo from '@assets/videos/videoMain.mp4';
import { useDispatch } from 'react-redux';
import { setLayout } from '@src/shared/slices/LayoutSlice';
import { useEffect, useState } from 'react';
import VideoPlayer from '@src/shared/videoPlayer';
import { getHomePageData } from '@src/shared/service/homeService';
import PermanentJobs from './permanentJobs';
import WorkNow from './workNow';
import JobSeekers from './jobSeekers';

interface IHomePage {
  work_now_jobs: [];
  permanent_jobs: [];
  candidates: ICandidate.Payload[];
}

function Home() {
  const [isMobileTab, setIsMobileTab] = useState(false);
  const [homePageData, setHomePageData] = useState<IHomePage>();
  const handleResize: any = () => {
    setIsMobileTab(window.innerWidth <= 430);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('resize', handleResize);
    return window.removeEventListener('resize', handleResize());
  }, []);

  useEffect(() => {
    const getData = async () => {
      const _result = await getHomePageData();
      if (_result.success) {
        setHomePageData(_result.data);
      }
    };
    getData();
  }, []);

  const dispatch = useDispatch();
  dispatch(
    setLayout({
      isShowFooter: true,
      isShowHeader: true,
      isShowCreditLabel: false,
    })
  );
  return (
    <div className="space-y-24 sm:space-y-0 sm:pt-[100px]">
      <div className="relative h-fit">
        <VideoPlayer src={MainVideo} className="w-full h-full" />
        <div className="absolute bg-overlay top-0 bottom-0 w-full flex justify-center flex-col items-center text-center sm:px-8 space-y-6 sm:space-y-3">
          <h1 className=" text-white font-bold  ">
            Hospitality Jobs Australia
          </h1>
          <h5 className=" text-white font-bold">
            An affordable and innovative employment market place created by
            Hospitality professionals with the needs and budgets of the
            Hospitality Industry in mind.
          </h5>
        </div>
      </div>

      <div className="grid  space-y-24 sm:space-y-0">
        <WorkNow jobs={homePageData?.work_now_jobs ?? []} />
        <JobSeekers candidates={homePageData?.candidates ?? []} />
        <PermanentJobs jobs={homePageData?.permanent_jobs ?? []} />
      </div>
    </div>
  );
}

export default Home;
