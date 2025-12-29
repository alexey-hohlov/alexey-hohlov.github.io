import { SECTION_ID } from '@/constants';
import { MailIcon, TelegramIcon, GithubIcon, VkIcon } from '@/assets';

export const SOCIAL_LINKS = [
  {
    title: 'Telegram',
    href: 'https://t.me/alexeyOD',
    Icon: TelegramIcon,
  },
  { title: 'VK', href: 'https://vk.com/ypoenie', Icon: VkIcon },
];

export const MAIL_LINK = {
  title: 'Email',
  href: `#${SECTION_ID.CONTACTS}`,
  external: false,
  Icon: MailIcon,
};

export const GITHUB_LINK = {
  title: 'alexey-hohlov',
  href: 'https://github.com/alexey-hohlov',
  Icon: GithubIcon,
};
