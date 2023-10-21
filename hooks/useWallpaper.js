import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { WALLPAPERS_SUBREDDIT, VALID_EXTENSIONS } from '../utils/constants';
import { choice } from '../utils/random';

const useWallpaper = () => {
  const [subreddit, setSubreddit] = useState();
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWallpapers();
  }, []);

  const getWallpapers = useCallback(async () => {
    const wallpapersFound = [];
    setLoading(true);

    const subreddit = choice(WALLPAPERS_SUBREDDIT);
    setSubreddit(subreddit);
    const subredditUrl = `http://www.reddit.com/r/${subreddit}/new.json?sort=new`;

    try {
      const {
        data: {
          data: { children: subredditPosts },
        },
      } = await axios.get(subredditUrl);

      for (const { data: post } of subredditPosts) {
        const imageNameExt = post.url.split('/').pop();
        const [imageName, imageExt] = imageNameExt.split('.');

        if (VALID_EXTENSIONS.indexOf(imageExt) === -1) {
          continue;
        }

        const wallpaper = {
          title: post.title,
          url: post.url,
          subreddit: subreddit,
        };
        wallpapersFound.push(wallpaper);
      }

      setWallpapers(wallpapersFound);
      setLoading(false);
    } catch (error) {
      console.error('[ERROR] getWallpapers:', error);
    }
  }, []);

  return { subreddit, wallpapers, loading };
};

export default useWallpaper;
