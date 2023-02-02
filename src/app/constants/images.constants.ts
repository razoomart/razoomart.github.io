import { ImageInfo } from '@interfaces/imageInfo.interfaces';

enum ImageType {
  albina = 'albina',
  artem = 'artem',
  danya = 'danya',
  danya2 = 'danya2',
  ilana = 'ilana',
  ilana2 = 'ilana2',
  ilyaK = 'ilyaK',
  ilyaU = 'ilyaU',
  maksim = 'maksim',
  ivan = 'ivan',
  bogdan = 'bogdan',
  vova = 'vova',
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
    link: 'assets/images/memojis/albina.webp',
    description: 'memoji image',
  },
  [ImageType.artem]: {
    link: 'assets/images/memojis/artem.webp',
    description: 'memoji image',
  },
  [ImageType.danya]: {
    link: 'assets/images/memojis/danya.webp',
    description: 'memoji image',
  },
  [ImageType.danya2]: {
    link: 'assets/images/memojis/danya2.webp',
    description: 'memoji image',
  },
  [ImageType.ilana]: {
    link: 'assets/images/memojis/ilana.webp',
    description: 'memoji image',
  },
  [ImageType.ilana2]: {
    link: 'assets/images/Ilana2.webp',
    description: 'memoji image',
  },
  [ImageType.ilyaK]: {
    link: 'assets/images/memojis/ilyaK.webp',
    description: 'memoji image',
  },
  [ImageType.ilyaU]: {
    link: 'assets/images/memojis/ilyaU.webp',
    description: 'memoji image',
  },
  [ImageType.maksim]: {
    link: 'assets/images/memojis/maksim.webp',
    description: 'memoji image',
  },
  [ImageType.ivan]: {
    link: 'assets/images/memojis/ivan.webp',
    description: 'memoji image',
  },
  [ImageType.bogdan]: {
    link: 'assets/images/memojis/bogdan.webp',
    description: 'memoji image',
  },
  [ImageType.vova]: {
    link: 'assets/images/memojis/vova.webp',
    description: 'memoji image',
  },
  [ImageType.strikethroughText]: {
    link: 'assets/images/strikethrough-text.svg',
    description: 'strikethrough text effect',
  },
  [ImageType.casePreviewEither]: {
    link: 'assets/images/projects/case-preview-either.webp',
    description: 'either project preview image',
  },
  [ImageType.casePreviewHotline]: {
    link: 'assets/images/projects/case-preview-hotline.webp',
    description: 'hotline project preview image',
  },
  [ImageType.casePreviewPn]: {
    link: 'assets/images/projects/case-preview-pn.webp',
    description: 'pn project preview image',
  },
  [ImageType.casePreviewPn2]: {
    link: 'assets/images/projects/case-preview-pn2.webp',
    description: 'pn project preview image',
  },
  [ImageType.casePreviewSilent]: {
    link: 'assets/images/projects/case-preview-silent.webp',
    description: 'silent project preview image',
  },
  [ImageType.casePreviewSpbedu]: {
    link: 'assets/images/projects/case-preview-spbedu.webp',
    description: 'spbedu project preview image',
  },
};

export { ImageList };
