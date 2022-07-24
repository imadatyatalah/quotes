export type TQuote = {
  quote_content: string;
  quote_author: string;
  date: Date;
};

export type RandomQuote = {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};
