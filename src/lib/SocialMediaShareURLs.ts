export const twitterShareQuoteURL = (quote: string, author: string) =>
  `https://twitter.com/intent/tweet?text=“${quote}”%0a%0a${author}`;
