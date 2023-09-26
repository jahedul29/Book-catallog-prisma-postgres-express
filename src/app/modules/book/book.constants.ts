export const bookFilterableFields = [
  'search',
  'title',
  'category',
  'maxPrice',
  'minPrice',
];

export const bookSearchableFields = ['title', 'author', 'genre'];

export const bookRelationalFields: string[] = ['category'];

export const bookRelationalFieldsMapper: {
  [key: string]: string;
} = {
  category: 'category',
};
