import { ImageInfo } from '@interfaces/imageInfo.interfaces';

enum ImageType {
  albina = 'albina',
  danya = 'danya',
  ilana = 'ilana',
  ilana2 = 'ilana2',
  ilyaK = 'ilyaK',
  ilyaU = 'ilyaU',
  pnCasePreview = 'pnCasePreview',
  strikethroughText = 'strikethroughText',
}

const ImageList: { [key in ImageType]: ImageInfo } = {
  [ImageType.albina]: {
    link: 'assets/images/Albina.png',
    description: 'memoji image',
  },
  [ImageType.danya]: {
    link: 'assets/images/Danya.png',
    description: 'memoji image',
  },
  [ImageType.ilana]: {
    link: 'assets/images/Ilana.png',
    description: 'memoji image',
  },
  [ImageType.ilana2]: {
    link: 'assets/images/Ilana2.png',
    description: 'memoji image',
  },
  [ImageType.ilyaK]: {
    link: 'assets/images/IlyaK.png',
    description: 'memoji image',
  },
  [ImageType.ilyaU]: {
    link: 'assets/images/IlyaU.png',
    description: 'memoji image',
  },
  [ImageType.pnCasePreview]: {
    link: 'assets/images/PN-case-preview.png',
    description: 'PN case preview image',
  },
  [ImageType.strikethroughText]: {
    link: 'assets/images/strikethrough-text.svg',
    description: 'strikethrough text effect',
  },
};

export { ImageList };
