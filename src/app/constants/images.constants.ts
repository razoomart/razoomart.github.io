import { ImageInfo } from '@interfaces/imageInfo.interfaces';

enum ImageType {
  albina = 'albina',
  smallAlbina = 'smallAlbina',
  artem = 'artem',
  smallArtem = 'smallArtem',
  ilana = 'ilana',
  smallIlana = 'smallIlana',
  ilana2 = 'ilana2',
  ilyaK = 'ilyaK',
  smallIlyaU = 'smallIlyaU',
  maksim = 'maksim',
  smallMaksim = 'smallMaksim',
  ivan = 'ivan',
  bogdan = 'bogdan',
  smallBogdan = 'smallBogdan',
  vova = 'vova',
  liza = 'liza',
  amir = 'amir',
  hearts = 'hearts',
  stars = 'stars',
  strikethroughText = 'strikethroughText',
  casePreviewEither = 'casePreviewEither',
  casePreviewHotline = 'casePreviewHotline',
  casePreviewHotline2 = 'casePreviewHotline2',
  casePreviewHotlineMobile = 'casePreviewHotlineMobile',
  casePreviewPn = 'casePreviewPn',
  casePreviewPn2 = 'casePreviewPn2',
  casePreviewSilent = 'casePreviewSilent',
  casePreviewBequick = 'casePreviewBequick',
  casePreviewSpbedu = 'casePreviewSpbedu',
  bubble1 = 'bubble1',
  bubble2 = 'bubble2',
  bubble3 = 'bubble3',
  hotlinePreview = 'hotlinePreview',
  hotlineColors = 'hotlineColors',
  hotlineDatacenter = 'hotlineDatacenter',
  hotlineServers = 'hotlineServers',
  hotlineFloppyDisk = 'hotlineFloppyDisk',
  hotlinePhoneCase = 'hotlinePhoneCase',
  hotlineCoins = 'hotlineCoins',
  hotlineHelp = 'hotlineHelp',
  hotlineScreen = 'hotlineScreen',
  hotlineMainPage = 'hotlineMainPage',
  hotlineHosting = 'hotlineHosting',
  hotlineVirtualServers = 'hotlineVirtualServers',
  hotlinePhone1 = 'hotlinePhone1',
  hotlinePhone2 = 'hotlinePhone2',
  hotlinePhone3 = 'hotlinePhone3',
  hotlineClouds = 'hotlineClouds',
  hotlineCloudsMobile = 'hotlineCloudsMobile',
  hotlineLogo = 'hotlineLogo',
}

const ImageList: { [key in ImageType]: ImageInfo } = {
  [ImageType.albina]: {
    link: 'assets/images/memojis/albina.webp',
    description: 'memoji image',
  },
  [ImageType.smallAlbina]: {
    link: 'assets/images/memojis/small/small-albina.webp',
    description: 'memoji image',
  },
  [ImageType.artem]: {
    link: 'assets/images/memojis/artem.webp',
    description: 'memoji image',
  },
  [ImageType.smallArtem]: {
    link: 'assets/images/memojis/small/small-artem.webp',
    description: 'memoji image',
  },
  [ImageType.ilana]: {
    link: 'assets/images/memojis/ilana.webp',
    description: 'memoji image',
  },
  [ImageType.smallIlana]: {
    link: 'assets/images/memojis/small/small-ilana.webp',
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
  [ImageType.smallIlyaU]: {
    link: 'assets/images/memojis/small/small-ilyaU.webp',
    description: 'memoji image',
  },
  [ImageType.maksim]: {
    link: 'assets/images/memojis/maksim.webp',
    description: 'memoji image',
  },
  [ImageType.smallMaksim]: {
    link: 'assets/images/memojis/small/small-maksim.webp',
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
  [ImageType.smallBogdan]: {
    link: 'assets/images/memojis/small/small-bogdan.webp',
    description: 'memoji image',
  },
  [ImageType.vova]: {
    link: 'assets/images/memojis/vova.webp',
    description: 'memoji image',
  },
  [ImageType.amir]: {
    link: 'assets/images/memojis/amir.webp',
    description: 'memoji image',
  },
  [ImageType.liza]: {
    link: 'assets/images/memojis/liza.webp',
    description: 'memoji image',
  },
  [ImageType.hearts]: {
    link: 'assets/images/team/hearts.webp',
    description: 'hearts image',
  },
  [ImageType.stars]: {
    link: 'assets/images/stars.webp',
    description: 'stars image',
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
  [ImageType.casePreviewHotline2]: {
    link: 'assets/images/projects/case-preview-hotline-2.webp',
    description: 'hotline project preview image',
  },
  [ImageType.casePreviewHotlineMobile]: {
    link: 'assets/images/projects/case-preview-hotline-mobile.webp',
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
  [ImageType.casePreviewBequick]: {
    link: 'assets/images/projects/case-preview-bequick.webp',
    description: 'bequick project preview image',
  },
  [ImageType.casePreviewSpbedu]: {
    link: 'assets/images/projects/case-preview-spbedu.webp',
    description: 'spbedu project preview image',
  },
  [ImageType.bubble1]: {
    link: 'assets/images/projects/hotline/bubble1.svg',
    description: 'bubble message image',
  },
  [ImageType.bubble2]: {
    link: 'assets/images/projects/hotline/bubble2.svg',
    description: 'bubble message image',
  },
  [ImageType.bubble3]: {
    link: 'assets/images/projects/hotline/bubble3.svg',
    description: 'bubble message image',
  },
  [ImageType.hotlinePreview]: {
    link: 'assets/images/projects/hotline/hotline-preview.webp',
    description: 'hotline site preview image',
  },
  [ImageType.hotlineColors]: {
    link: 'assets/images/projects/hotline/hotline-colors.svg',
    description: 'cards with colors image',
  },
  [ImageType.hotlineDatacenter]: {
    link: 'assets/images/projects/hotline/hotline-datacenter.webp',
    description: 'dataserver image',
  },
  [ImageType.hotlineServers]: {
    link: 'assets/images/projects/hotline/hotline-servers.webp',
    description: 'servers image',
  },
  [ImageType.hotlineFloppyDisk]: {
    link: 'assets/images/projects/hotline/hotline-floppy-disk.webp',
    description: 'hotline floppy disk image',
  },
  [ImageType.hotlinePhoneCase]: {
    link: 'assets/images/projects/hotline/hotline-phone-case.webp',
    description: 'hotline phone case image',
  },
  [ImageType.hotlineCoins]: {
    link: 'assets/images/projects/hotline/hotline-coins.svg',
    description: 'coins image',
  },
  [ImageType.hotlineHelp]: {
    link: 'assets/images/projects/hotline/hotline-help.svg',
    description: 'help text cards image',
  },
  [ImageType.hotlineScreen]: {
    link: 'assets/images/projects/hotline/hotline-screen.svg',
    description: 'screen border image',
  },
  [ImageType.hotlineMainPage]: {
    link: 'assets/images/projects/hotline/hotline-main-page.webp',
    description: 'hotline hosting site screenshot image',
  },
  [ImageType.hotlineHosting]: {
    link: 'assets/images/projects/hotline/hotline-hosting.webp',
    description: 'hotline hosting site screenshot image',
  },
  [ImageType.hotlineVirtualServers]: {
    link: 'assets/images/projects/hotline/hotline-virtual-servers.webp',
    description: 'hotline hosting site screenshot image',
  },
  [ImageType.hotlinePhone1]: {
    link: 'assets/images/projects/hotline/hotline-phone-1.webp',
    description: 'hotline hosting site screenshot image',
  },
  [ImageType.hotlinePhone2]: {
    link: 'assets/images/projects/hotline/hotline-phone-2.webp',
    description: 'hotline hosting site screenshot image',
  },
  [ImageType.hotlinePhone3]: {
    link: 'assets/images/projects/hotline/hotline-phone-3.webp',
    description: 'hotline hosting site screenshot image',
  },
  [ImageType.hotlineClouds]: {
    link: 'assets/images/projects/hotline/hotline-clouds.webp',
    description: 'clouds image',
  },
  [ImageType.hotlineCloudsMobile]: {
    link: 'assets/images/projects/hotline/hotline-clouds-mobile.webp',
    description: 'clouds image',
  },
  [ImageType.hotlineLogo]: {
    link: 'assets/images/projects/hotline/hotline-logo.svg',
    description: 'hotline logo image',
  },
};

export { ImageList };
