import { VideoInfo } from '@interfaces/videoInfo.interfaces';

enum VideoType {
  hotlineDatacenter = 'hotlineDatacenter',
}

const VideoList: { [key in VideoType]: VideoInfo } = {
  [VideoType.hotlineDatacenter]: {
    link: 'assets/videos/hotline-datacenter.webm',
    description: 'hotline servers video',
  },
};

export { VideoList };
