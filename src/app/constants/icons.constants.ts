import { IconInfo } from '@interfaces/iconInfo.interfaces';

enum IconType {
  arrowRight = 'arrowRight',
  arrowTop = 'arrowTop',
  logo = 'logo',
  logoAntiHype = 'logoAntiHype',
  logoDobro = 'logoDobro',
  logoDrzhk = 'logoDrzhk',
  logoKorean = 'logoKorean',
  logoMaxfont = 'logoMaxfont',
  logoMinecraft = 'logoMinecraft',
  logoRu = 'logoRu',
  logoUwu = 'logoUwu',
  logoLove = 'logoLove',
  logoAustralian = 'logoAustralian',
  logoAmbid = 'logoAmbid',
  logoRzmrt = 'logoRzmrt',
  razoomartLogo = 'razoomartLogo',
  sparkles = 'sparkles',
  equalSign = 'equalSign',
  afterEffects = 'afterEffects',
  blender = 'blender',
  figma = 'figma',
  kotlin = 'kotlin',
  notion = 'notion',
  photoshop = 'photoshop',
  readymag = 'readymag',
  swift = 'swift',
  telegram = 'telegram',
  webflow = 'webflow',
  vscode = 'vscode',
  bequick = 'bequick',
  either = 'either',
  hotline = 'hotline',
  pn = 'pn',
  silent = 'silent',
  spbedu = 'spbedu',
  mono = 'mono',
}

const IconList: { [key in IconType]: IconInfo } = {
  [IconType.arrowRight]: {
    link: 'assets/icons/arrow-right.svg',
    description: 'arrow to right icon',
  },
  [IconType.arrowTop]: {
    link: 'assets/icons/arrow-top.svg',
    description: 'arrow to top icon',
  },
  [IconType.logo]: {
    link: 'assets/icons/headers/logo.svg',
    description: 'logo icon',
  },
  [IconType.logoAntiHype]: {
    link: 'assets/icons/headers/logo_antihype.svg',
    description: 'logo icon',
  },
  [IconType.logoDobro]: {
    link: 'assets/icons/headers/logo_dobro.svg',
    description: 'logo icon',
  },
  [IconType.logoDrzhk]: {
    link: 'assets/icons/headers/logo_drzhk.svg',
    description: 'logo icon',
  },
  [IconType.logoKorean]: {
    link: 'assets/icons/headers/logo_korean.svg',
    description: 'logo icon',
  },
  [IconType.logoMaxfont]: {
    link: 'assets/icons/headers/logo_maxfont.svg',
    description: 'logo icon',
  },
  [IconType.logoMinecraft]: {
    link: 'assets/icons/headers/logo_minecraft.svg',
    description: 'logo icon',
  },
  [IconType.logoRu]: {
    link: 'assets/icons/headers/logo_ru.svg',
    description: 'logo icon',
  },
  [IconType.logoUwu]: {
    link: 'assets/icons/headers/logo_uwu.svg',
    description: 'logo icon',
  },
  [IconType.logoLove]: {
    link: 'assets/icons/headers/logo_love.svg',
    description: 'logo icon',
  },
  [IconType.logoAustralian]: {
    link: 'assets/icons/headers/logo_australian.svg',
    description: 'logo icon',
  },
  [IconType.logoAmbid]: {
    link: 'assets/icons/headers/logo_ambid.svg',
    description: 'logo icon',
  },
  [IconType.logoRzmrt]: {
    link: 'assets/icons/headers/logo_rzmrt.svg',
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
  [IconType.afterEffects]: {
    link: 'assets/icons/technologies/afterEffects.webp',
    description: 'after effects logo icon',
  },
  [IconType.blender]: {
    link: 'assets/icons/technologies/blender.webp',
    description: 'blender logo icon',
  },
  [IconType.figma]: {
    link: 'assets/icons/technologies/figma.webp',
    description: 'figma logo icon',
  },
  [IconType.kotlin]: {
    link: 'assets/icons/technologies/kotlin.webp',
    description: 'kotlin logo icon',
  },
  [IconType.notion]: {
    link: 'assets/icons/technologies/notion.webp',
    description: 'notion logo icon',
  },
  [IconType.photoshop]: {
    link: 'assets/icons/technologies/photoshop.webp',
    description: 'photoshop logo icon',
  },
  [IconType.readymag]: {
    link: 'assets/icons/technologies/readymag.webp',
    description: 'readymag logo icon',
  },
  [IconType.swift]: {
    link: 'assets/icons/technologies/swift.webp',
    description: 'swift logo icon',
  },
  [IconType.telegram]: {
    link: 'assets/icons/technologies/telegram.webp',
    description: 'telegram logo icon',
  },
  [IconType.webflow]: {
    link: 'assets/icons/technologies/webflow.webp',
    description: 'webflow logo icon',
  },
  [IconType.vscode]: {
    link: 'assets/icons/technologies/vscode.webp',
    description: 'vscode logo icon',
  },
  [IconType.bequick]: {
    link: 'assets/icons/projects/icon-bequick.png',
    description: 'project logo icon',
  },
  [IconType.either]: {
    link: 'assets/icons/projects/icon-either.png',
    description: 'project logo icon',
  },
  [IconType.hotline]: {
    link: 'assets/icons/projects/icon-hotline.png',
    description: 'project logo icon',
  },
  [IconType.pn]: {
    link: 'assets/icons/projects/icon-pn.png',
    description: 'project logo icon',
  },
  [IconType.silent]: {
    link: 'assets/icons/projects/icon-silent.png',
    description: 'project logo icon',
  },
  [IconType.spbedu]: {
    link: 'assets/icons/projects/icon-spbedu.png',
    description: 'project logo icon',
  },
  [IconType.mono]: {
    link: 'assets/icons/projects/icon-mono.svg',
    description: 'project logo icon',
  },
};

export { IconList };
