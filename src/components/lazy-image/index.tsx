import { useState, Fragment, useEffect } from 'react';

/**
 * LazyImage component.
 *
 * @param {string} placeholder The placeholder image URL.
 * @param {string} src The image URL.
 * @param {string} alt The alt text for the image.
 * @param {object} rest Additional props for the image element.
 *
 * @returns {ReactElement} The LazyImage component.
 */
const LazyImage: React.FC<{
  placeholder: React.ReactElement;
  src: string | any;  // Allow `string` for URLs or `any` for local `require()`
  alt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}> = ({ placeholder, src, alt, ...rest }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let imageToLoad: HTMLImageElement | undefined;
    if (typeof src === 'string') {
      imageToLoad = new Image();
      imageToLoad.src = src;
    } else if (typeof src === 'object') {
      // Handle the case where `src` is a local `require` object
      imageToLoad = new Image();
      imageToLoad.src = src.default || src; // React/webpack often bundles the path as `default`
    }

    if (imageToLoad) {
      imageToLoad.onload = () => {
        setLoading(false);
      };
    }
  }, [src]);

  return (
    <Fragment>
      {loading ? placeholder : <img src={typeof src === 'string' ? src : src.default || src} alt={alt} {...rest} />}
    </Fragment>
  );
};

export default LazyImage;
