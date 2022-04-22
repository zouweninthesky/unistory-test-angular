export interface Article {
  id: number;
  title: string;
  content: string;
}

const articles: Article[] = [
  { id: 222, title: 'Breaking news', content: 'waow' },
  {
    id: 224,
    title: 'Second article',
    content:
      'enormous content enormous content enormous content enormous contentenormous content enormous content enormous content',
  },
  { id: 226, title: 'Third article', content: 'test' },
];

export default articles;
