import { ImageInfo } from '@interfaces/imageInfo.interfaces';

enum ImageType {
  albina = 'albina',
  danya = 'danya',
  ilana = 'ilana',
  ilana2 = 'ilana2',
  ilyaK = 'ilyaK',
  ilyaU = 'ilyaU',
  strikethroughText = 'strikethroughText',
  casePreviewEither = 'casePreviewEither',
  casePreviewHotline = 'casePreviewHotline',
  casePreviewPn = 'casePreviewPn',
  casePreviewPn2 = 'casePreviewPn2',
  casePreviewSilent = 'casePreviewSilent',
  casePreviewSpbedu = 'casePreviewSpbedu',
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
  [ImageType.strikethroughText]: {
    link: 'assets/images/strikethrough-text.svg',
    description: 'strikethrough text effect',
  },
  [ImageType.casePreviewEither]: {
    link: 'assets/images/projects/case-preview-either.png',
    description: 'either project preview image',
  },
  [ImageType.casePreviewHotline]: {
    link: 'assets/images/projects/case-preview-hotline.png',
    description: 'hotline project preview image',
  },
  [ImageType.casePreviewPn]: {
    link: 'assets/images/PN-case-preview.png',
    description: 'pn project preview image',
  },
  [ImageType.casePreviewPn2]: {
    link: 'assets/images/projects/case-preview-pn.png',
    description: 'pn project preview image',
  },
  [ImageType.casePreviewSilent]: {
    link: 'assets/images/projects/case-preview-silent.png',
    description: 'silent project preview image',
  },
  [ImageType.casePreviewSpbedu]: {
    link: 'assets/images/projects/case-preview-spbedu.png',
    description: 'spbedu project preview image',
  },
};

export { ImageList };
