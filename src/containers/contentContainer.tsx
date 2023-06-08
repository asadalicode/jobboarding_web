import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
  styleClass?: string;
}

function ContentContainer({ styleClass, children }: ContentProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center pt-32 pb-8   min-h-[calc(100vh-5vh)] bg-gradient-to-r from-bluish-gradient via-yellow-gradient to-yellow-gradient ${styleClass}`}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
