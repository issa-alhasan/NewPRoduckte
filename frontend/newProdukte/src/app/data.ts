import { kategorie } from './shared/models/kategorie';
import { Produkt } from './shared/models/produkte';
import { Tag } from './shared/models/tag';

export const sample_produkte: Produkt[] = [
  {
    name: 'Headphones',
    id: 1,
    kat_id: 1,
    tag:'phone',
    price: 150,
    imgUrl: 'assets/4.jpg',
    favorite: false,
    description: '789 Pine Road',
    stars: 3,
  },
  {
    name: 'Headphones',
    id: 2,
    kat_id: 2,
    price: 150,
    tag:'phone',

    imgUrl: 'assets/4.jpg',
    favorite: true,
    description: '789 Pine Road',
    stars: 3,
  },
  {
    name: 'Headphones',
    id: 3,
    kat_id: 3,
    tag:'شاشات حماية',

    price: 150,
    imgUrl: 'assets/4.jpg',
    favorite: true,
    description: '789 Pine Road',
    stars: 3,
  },
  {
    name: 'Headphones',
    id: 4,
    tag:'phone',

    kat_id: 4,
    price: 1150,
    imgUrl: 'assets/2.jpg',
    favorite: true,
    description: '789 Pine Road',
    stars: 3,
  },
  {
    name: 'kkmm',
    id: 5,
    kat_id: 5,
    tag:'سماعات',

    price: 110,
    imgUrl: 'assets/1.jpg',
    favorite: true,


    description: '789 Pine Road',
    stars: 3,
  },
  {
    name: 'kk',
    id: 6,
    kat_id: 5,
    price: 50,
    imgUrl: 'assets/3.jpg',
    favorite: true,
    tag:'كبلات',

    description: '789 Pine Road',
    stars: 3,
  },
];

export const sample_tag: Tag[] = [
  { name: 'All', id: 0 },
  { name: 'عروض', id:1 },
  { name: 'كبلات', id: 2 },
  { name: 'سماعات', id: 3 },
  
  { name: 'شاشات حماية', id: 3 },
];
export const sample_kategorie: kategorie[] = [
    { name: 'headphone', id: 1 },
    { name: 'computer', id: 2 },
    { name: 'Phon', id: 3 },
  ];
  