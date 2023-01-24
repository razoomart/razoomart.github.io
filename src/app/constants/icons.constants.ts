import { IconInfo } from '@interfaces/iconInfo.interfaces';

enum IconType {
  arrowRightBlack = 'arrowRightBlack',
  arrowRightWhite = 'arrowRightWhite',
  logo = 'logo',
  logoAntiHype = 'logoAntiHype',
  logoDobro = 'logoDobro',
  logoDrzhk = 'logoDrzhk',
  logoKorean = 'logoKorean',
  logoMaxfont = 'logoMaxfont',
  logoMinecraft = 'logoMinecraft',
  logoRu = 'logoRu',
  logoUwu = 'logoUwu',
  razoomartLogo = 'razoomartLogo',
  sparkles = 'sparkles',
  equalSign = 'equalSign',
}

const IconList: { [key in IconType]: IconInfo } = {
  [IconType.arrowRightBlack]: {
    link: 'assets/icons/arrow-right-black.svg',
    description: 'arrow to right icon',
  },
  [IconType.arrowRightWhite]: {
    link: 'assets/icons/arrow-right-white.svg',
    description: 'arrow to right icon',
  },
  [IconType.logo]: {
    link: 'assets/icons/logo.svg',
    description: 'logo icon',
  },
  [IconType.logoAntiHype]: {
    link: 'assets/icons/logo_antihype.svg',
    description: 'logo icon',
  },
  [IconType.logoDobro]: {
    link: 'assets/icons/logo_dobro.svg',
    description: 'logo icon',
  },
  [IconType.logoDrzhk]: {
    link: 'assets/icons/logo_drzhk.svg',
    description: 'logo icon',
  },
  [IconType.logoKorean]: {
    link: 'assets/icons/logo_korean.svg',
    description: 'logo icon',
  },
  [IconType.logoMaxfont]: {
    link: 'assets/icons/logo_maxfont.svg',
    description: 'logo icon',
  },
  [IconType.logoMinecraft]: {
    link: 'assets/icons/logo_minecraft.svg',
    description: 'logo icon',
  },
  [IconType.logoRu]: {
    link: 'assets/icons/logo_ru.svg',
    description: 'logo icon',
  },
  [IconType.logoUwu]: {
    link: 'assets/icons/logo_uwu.svg',
    description: 'logo icon',
  },
  [IconType.razoomartLogo]: {
    link: 'assets/icons/razoomart_logo.jpg',
    description: 'razoomart icon',
  },
  [IconType.sparkles]: {
    link: 'assets/icons/sparkles.png',
    description: 'sparkles icon',
  },
  [IconType.equalSign]: {
    link: 'assets/icons/equal-sign.svg',
    description: 'equal sign icon',
  },
};

export { IconList };
