import { useState, useEffect } from "react";
import axios from "axios";

const useFetchImages = (query) => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  console.log(query);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchImages = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e52a287d86469bf01ea901dfd92cf8a5&te
      xt=${query}&media=photos&per_page=15&page=1&format=json&nojsoncallback=1`,
          {
            cancelToken: source.token,
          }
        );

        setImages((prev) => [...new Set([...prev, ...data.photos.photo])]);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

    return () => source.cancel();
  }, [query]);

  return { loading, images, setImages };
};

export default useFetchImages;
