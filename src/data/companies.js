import { generateRandomDate } from '../utils/dateGenerator.js';

export const companies = [
  {
    id: 1,
    name: 'MotorZen отзывы',
    category: 'Автомобили',
    date: '23.08.2023',
    description: 'Автосервис и продажа автомобилей. Отзывы клиентов о качестве ремонта, обслуживании и продаже автомобилей.',
    logo: 'MOTORZEN',
    logoImage: '/images/logos/motorzen.png',
    slug: 'motorzen'
  },
  {
    id: 2,
    name: 'Сбербанк отзывы',
    category: 'Банки',
    date: '15.04.2024',
    description: 'Крупнейший банк России. Отзывы клиентов о качестве обслуживания, кредитах, депозитах и мобильном приложении.',
    logo: 'СБЕРБАНК',
    logoImage: '/images/logos/sberbank.png',
    slug: 'sberbank'
  },
  {
    id: 3,
    name: 'Яндекс отзывы',
    category: 'IT и интернет',
    date: '02.01.2025',
    description: 'Российская IT-компания. Отзывы о поисковике, Яндекс.Такси, Яндекс.Еде, Яндекс.Маркете и других сервисах.',
    logo: 'ЯНДЕКС',
    logoImage: '/images/logos/yandex.png',
    slug: 'yandex'
  },
  {
    id: 4,
    name: 'Wildberries отзывы',
    category: 'Интернет-магазины',
    date: '18.09.2022',
    description: 'Крупнейший российский маркетплейс. Отзывы покупателей о доставке, качестве товаров и обслуживании.',
    logo: 'WB',
    logoImage: '/images/logos/wildberries.png',
    slug: 'wildberries'
  },
  {
    id: 5,
    name: 'Ozon отзывы',
    category: 'Интернет-магазины',
    date: '07.11.2023',
    description: 'Российский интернет-магазин и маркетплейс. Отзывы о покупках, доставке Ozon и программе лояльности.',
    logo: 'OZON',
    logoImage: '/images/logos/ozon.png',
    slug: 'ozon'
  },
  {
    id: 6,
    name: 'Тинькофф Банк отзывы',
    category: 'Банки',
    date: '30.06.2021',
    description: 'Частный российский банк. Отзывы клиентов о картах, кредитах, депозитах и качестве обслуживания.',
    logo: 'ТИНЬКОФФ',
    logoImage: '/images/logos/inkoff.png',
    slug: 'tinkoff'
  },
  {
    id: 7,
    name: 'МТС отзывы',
    category: 'Мобильная связь',
    date: '14.03.2024',
    description: 'Крупнейший оператор сотовой связи России. Отзывы о тарифах, качестве связи и обслуживании.',
    logo: 'МТС',
    logoImage: '/images/logos/mts.png',
    slug: 'mts'
  },
  {
    id: 8,
    name: 'Магнит отзывы',
    category: 'Торговля',
    date: '25.07.2022',
    description: 'Российская сеть продуктовых магазинов. Отзывы покупателей о качестве товаров и обслуживании.',
    logo: 'МАГНИТ',
    logoImage: '/images/logos/magnit.png',
    slug: 'magnit'
  },
  {
    id: 9,
    name: 'Билайн отзывы',
    category: 'Мобильная связь',
    date: '12.05.2025',
    description: 'Российский оператор сотовой связи. Отзывы абонентов о тарифах, интернете и качестве связи.',
    logo: 'БИЛАЙН',
    logoImage: '/images/logos/beeline.png',
    slug: 'beeline'
  },
  {
    id: 10,
    name: 'Пятёрочка отзывы',
    category: 'Торговля',
    date: '08.10.2023',
    description: 'Сеть продуктовых магазинов формата "у дома". Отзывы о ценах, ассортименте и обслуживании.',
    logo: 'ПЯТЁРОЧКА',
    logoImage: '/images/logos/pyaterochka.png',
    slug: 'pyaterochka'
  },
  {
    id: 11,
    name: 'М.Видео отзывы',
    category: 'Электроника',
    date: '03.02.2024',
    description: 'Сеть магазинов электроники и бытовой техники. Отзывы о покупках, доставке и гарантийном обслуживании.',
    logo: 'М.ВИДЕО',
    logoImage: '/images/logos/mvideo.png',
    slug: 'mvideo'
  },
  {
    id: 12,
    name: 'Авито отзывы',
    category: 'Объявления',
    date: '19.12.2020',
    description: 'Крупнейший российский сайт объявлений. Отзывы пользователей о покупках, продажах и безопасности сделок.',
    logo: 'АВИТО',
    logoImage: '/images/logos/avito.png',
    slug: 'avito'
  },
  {
    id: 13,
    name: 'МегаФон отзывы',
    category: 'Мобильная связь',
    date: '26.08.2024',
    description: 'Российский оператор сотовой связи. Отзывы о тарифах, роуминге и качестве обслуживания клиентов.',
    logo: 'МЕГАФОН',
    logoImage: '/images/logos/megafon.png',
    slug: 'megafon'
  },
  {
    id: 14,
    name: 'DNS отзывы',
    category: 'Электроника',
    date: '11.06.2025',
    description: 'Сеть магазинов цифровой и бытовой техники. Отзывы покупателей о товарах, ценах и сервисе.',
    logo: 'DNS',
    logoImage: '/images/logos/dns.png',
    slug: 'dns'
  },
  {
    id: 15,
    name: 'Лента отзывы',
    category: 'Торговля',
    date: '04.01.2022',
    description: 'Российская сеть гипермаркетов. Отзывы покупателей о качестве продуктов и уровне обслуживания.',
    logo: 'ЛЕНТА',
    logoImage: '/images/logos/lenta.png',
    slug: 'lenta'
  },
  {
    id: 16,
    name: 'Газпром отзывы',
    category: 'Энергетика',
    date: '17.09.2021',
    description: 'Крупнейшая российская энергетическая компания. Отзывы о поставках газа и обслуживании клиентов.',
    logo: 'ГАЗПРОМ',
    logoImage: '/images/logos/gazprom.png',
    slug: 'gazprom'
  },
  {
    id: 17,
    name: 'Роснефть отзывы',
    category: 'Энергетика',
    date: '29.04.2023',
    description: 'Российская нефтяная компания. Отзывы о качестве топлива на АЗС и программе лояльности.',
    logo: 'РОСНЕФТЬ',
    logoImage: '/images/logos/rosneft.png',
    slug: 'rosneft'
  },
  // 10 новых компаний
  {
    id: 18,
    name: 'Альфа-Банк отзывы',
    category: 'Банки',
    date: '22.03.2024',
    description: 'Частный российский банк. Отзывы клиентов о банковских картах, кредитах и мобильном банкинге.',
    logo: 'АЛЬФА-БАНК',
    logoImage: '/images/logos/placeholder.svg',
    slug: 'alfabank'
  },
  {
    id: 19,
    name: 'ВТБ отзывы',
    category: 'Банки',
    date: '15.08.2023',
    description: 'Второй по величине банк России. Отзывы о корпоративном и розничном банкинге, ипотеке.',
    logo: 'ВТБ',
    logoImage: '/images/logos/placeholder.svg',
    slug: 'vtb'
  },
  {
    id: 20,
    name: 'Теле2 отзывы',
    category: 'Мобильная связь',
    date: '07.01.2025',
    description: 'Федеральный оператор мобильной связи. Отзывы о тарифах без переплат и качестве связи.',
    logo: 'ТЕЛЕ2',
    logoImage: '/images/logos/placeholder.svg',
    slug: 'tele2'
  },
  {
    id: 21,
    name: 'Кинопоиск отзывы',
    category: 'IT и интернет',
    date: '18.11.2024',
    description: 'Российский кинопортал и стриминговый сервис. Отзывы о фильмах, сериалах и подписке.',
    logo: 'КИНОПОИСК',
    logoImage: '/images/logos/placeholder.svg',
    slug: 'kinopoisk'
  },
  {
    id: 22,
    name: 'ВкусВилл отзывы',
    category: 'Торговля',
    date: '24.05.2022',
    description: 'Сеть магазинов здорового питания. Отзывы о качестве продуктов и концепции магазинов.',
    logo: 'ВКУСВИЛЛ',
    logoImage: '/images/logos/placeholder.svg',
    slug: 'vkusvill'
  },
  {
    id: 23,
    name: 'Ситилинк отзывы',
    category: 'Электроника',
    date: '13.09.2023',
    description: 'Сеть магазинов цифровой техники. Отзывы покупателей о компьютерах, смартфонах и гаджетах.',
    logo: 'СИТИЛИНК',
    logoImage: '/images/logos/placeholder.svg',
    slug: 'citilink'
  },
  {
    id: 24,
    name: 'Lamoda отзывы',
    category: 'Интернет-магазины',
    date: '06.02.2025',
    description: 'Интернет-магазин одежды и обуви. Отзывы о качестве товаров, доставке и возвратах.',
    logo: 'LAMODA',
    logoImage: '/images/logos/placeholder.svg',
    slug: 'lamoda'
  },
  {
    id: 25,
    name: 'Додо Пицца отзывы',
    category: 'Ресторан',
    date: '31.07.2024',
    description: 'Сеть пиццерий с доставкой. Отзывы о качестве пиццы, скорости доставки и обслуживании.',
    logo: 'ДОДО ПИЦЦА',
    logoImage: '/images/logos/placeholder.svg',
    slug: 'dodo'
  },
  {
    id: 26,
    name: 'Юла отзывы',
    category: 'Объявления',
    date: '10.04.2021',
    description: 'Сервис объявлений и торговая площадка. Отзывы пользователей о покупках и продажах.',
    logo: 'ЮЛА',
    logoImage: '/images/logos/placeholder.svg',
    slug: 'youla'
  },
  {
    id: 27,
    name: 'Эльдорадо отзывы',
    category: 'Электроника',
    date: '28.12.2022',
    description: 'Сеть магазинов электроники и бытовой техники. Отзывы о покупках, кредитах и гарантии.',
    logo: 'ЭЛЬДОРАДО',
    logoImage: '/images/logos/placeholder.svg',
    slug: 'eldorado'
  }
];