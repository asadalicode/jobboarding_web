import ReactPlayer from 'react-player';
import MainVideo from '@assets/videos/videoMain.mp4';
import Style from './player.module.scss';

interface IVideo {
  src: string;
  className?: string;
}

function VideoPlayer(props: IVideo) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
         <video
           loop
           muted
           autoplay
          
           playsinline
           src="${props.src}"
           class="${props.className}"
         />,
       `,
      }}
    />
  );
}

export default VideoPlayer;
