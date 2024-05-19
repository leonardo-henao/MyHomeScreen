import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const useGetWallpaper = () => {
  const [wallpaper, setWallpaper] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const nameLocalStorageUpdate = 'last_update';
  const nameLocalStorageUrlBackground = 'img_background';

  const dataLocal = localStorage.getItem(nameLocalStorageUpdate);
  const dateToday = new Date().getDate();

  const apiKeyUnsplash = import.meta.env.VITE_UNSPLASH_API_KEY;
  const topicUnsplash = import.meta.env.VITE_UNSPLASH_TOPIC;

  const getNewWallpaper = async () => {
    if (!isLoading) {
      setIsLoading(true);
      toast.promise(
        new Promise<void>((resolve) => {
          const url = `https://api.unsplash.com/photos/random/?client_id=${apiKeyUnsplash}&count=1&orientation=landscape&topic=${topicUnsplash}`;

          axios.get(url).then((x) => {
            const data = x.data;
            const urlWallpaper = data[0].urls.full;
            localStorage.setItem(nameLocalStorageUpdate, dateToday.toString());
            localStorage.setItem(nameLocalStorageUrlBackground, urlWallpaper);
            setWallpaper(urlWallpaper);
            setIsLoading(false);
            resolve();
          });
        }),
        {
          loading: 'We changing your wallpaper',
          success: 'Congratulations, your wallpaper has been changed',
          error: null,
        }
      );
    }
  };

  useEffect(() => {
    if (dataLocal == null || dataLocal != dateToday.toString()) {
      const wallp = async () => {
        await getNewWallpaper();
      };
      wallp();
    } else {
      const urlWallpaper = localStorage.getItem(nameLocalStorageUrlBackground);
      setWallpaper(urlWallpaper!);
    }
  }, []);

  return { wallpaper, getNewWallpaper };
};
