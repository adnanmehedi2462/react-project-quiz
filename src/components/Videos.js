import { Link } from "react-router-dom";
import UseVideoList from "../hooks/usevideoList";
import classes from "../styles/Videos.module.css";
import Video from "./Video";
export default function Videos() {
  const { loading, error, videos } = UseVideoList();
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to="/quiz" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        ))}

      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && (
        <div>
          <h3>
            <b>Loading...</b>
          </h3>
        </div>
      )}
    </div>
  );
}
