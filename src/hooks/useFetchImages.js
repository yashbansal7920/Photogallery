import { useState, useEffect } from "react";
import axios from "axios";

const useFetchImages = (query, page) => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchImages = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e52a287d86469bf01ea901dfd92cf8a5&text=${query}&media=photos&per_page=15&page=${page}&format=json&nojsoncallback=1`,
          {
            cancelToken: source.token,
          }
        );
        setImages((prev) =>
          [...prev, ...data.photos.photo].filter(
            (v, i, a) => a.findIndex((t) => t.id === v.id) === i
          )
        );
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

    return () => source.cancel();
  }, [query, page]);

  return { loading, images, setImages };
};

export default useFetchImages;
