import { VideoInfo } from '@interfaces/videoInfo.interfaces';

enum VideoType {
  hotlineDatacenter = 'hotlineDatacenter',
  hotlineDatacenterMobile = 'hotlineDatacenterMobile',
  hotlineCasePreview = 'hotlineCasePreview',
  pnCasePreview = 'pnCasePreview',
  eitherCasePreview = 'eitherCasePreview',
}

const VideoList: { [key in VideoType]: VideoInfo } = {
  [VideoType.hotlineDatacenter]: {
    link: 'assets/videos/cases/hotline-datacenter.webm',
    description: 'hotline servers video',
  },
  [VideoType.hotlineDatacenterMobile]: {
    link: 'assets/videos/cases/hotline-datacenter-mobile.mp4',
    description: 'hotline servers video',
  },
  [VideoType.hotlineCasePreview]: {
    link: 'assets/videos/cases/hotline-case-preview.webm',
    description: 'hotline site video preview',
  },
  [VideoType.pnCasePreview]: {
    link: 'assets/videos/cases/pn-case-preview.webm',
    description: 'pn site video preview',
  },
  [VideoType.eitherCasePreview]: {
    link: 'assets/videos/cases/either-case-preview.webm',
    description: 'either site video preview',
  },
};

export { VideoList };
