import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function UseVideoList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchVideos() {
      const db = getDatabase();
      const videoref = ref(db, "videos");
      const videoquery = query(videoref, orderByKey());
      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(videoquery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevideos) => {
            return [...prevideos, ...Object.values(snapshot.val())];
          });
        } else {
          //
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchVideos();
  }, []);
  return {
    loading,
    videos,
    error,
  };
}
