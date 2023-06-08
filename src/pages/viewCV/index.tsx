import CustomCard from '@src/shared/cards/customCard';
import { useSearchParams } from 'react-router-dom';
import ContentContainer from '@src/containers/contentContainer';
import PDFViewer from '@src/shared/pdfViewer';
import { useEffect } from 'react';

function ViewCV() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [queryParams, setQueryParams] = useSearchParams();
  const resume = queryParams.get('resume');
  return (
    <ContentContainer>
      <div className="flex flex-col justify-center gap-3 w-full px-16 sm:px-8">
        <PDFViewer resume={resume} />
      </div>
    </ContentContainer>
  );
}
export default ViewCV;
