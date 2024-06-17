import { ButtonType } from '../shared/interfaces/button-type';
import { Button } from '../shared/enum/button';

export const BUTTONS_CONTROL: ButtonType[] = [
  {
    title: 'Ссылки',
    alt: Button.LINK,
    icon: 'assets/icons/link.svg',
  },
  {
    title: 'Контакты',
    alt: Button.CONTACTS,
    icon: 'assets/icons/contacts.svg',
  },
  {
    title: 'Теги',
    alt: Button.TAG,
    icon: 'assets/icons/tag.svg',
  },
  {
    title: 'Избранное',
    alt: Button.FAVORITES,
    icon: 'assets/icons/favorites.svg',
  },
  {
    title: 'Посещения',
    alt: Button.HISTORY,
    icon: 'assets/icons/history.svg',
  },
];

export const BUTTONS_SEARCH: ButtonType[] = [
  {
    alt: Button.SEARCH,
    icon: 'assets/icons/search.svg',
  },
  {
    alt: Button.ADD,
    icon: 'assets/icons/add.svg',
  },
];


export const BUTTONS_MOBILE: ButtonType[] = [
  {
    alt: Button.ADD,
    icon: 'assets/icons/add.svg',
  },
  {
    title: 'Посещения',
    alt: Button.HISTORY,
    icon: 'assets/icons/history.svg',
  },
  {
    alt: Button.SEARCH,
    icon: 'assets/icons/search.svg',
  },
]
