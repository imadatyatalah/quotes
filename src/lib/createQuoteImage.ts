// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));

export const createQuoteImage = ({
  author,
  quote,
  backgroundImage,
  height = 1920,
  width = 1080,
}: {
  author: string;
  quote: string;
  backgroundImage: string;
  height: number;
  width: number;
}) => {
  return (
    [
      // prefix: <domain/yourCloudinaryId/file_type/source_type>
      `https://res.cloudinary.com/diuulsqqw/image/upload`,

      // transform composed image: width, height, quality
      `w_${width},h_${height},q_100`,

      // -------------------------
      `l_text:Arial_75_bold:${e(author)},co_rgb:000,c_fit,w_1000`,
      `fl_layer_apply,g_center,y_-100`,

      `l_text:Arial_34_light:${e(quote)},co_rgb:000,c_fit,w_1100,h_210`,
      `fl_layer_apply,g_center,y_0`,

      // background image: <cloudinary_public_id>
      `${backgroundImage}`,
    ]
      // join parameters with a slash to form a valid URL
      // [a, b, c] => "a/b/c"
      .join("/")
  );
};
