import player_img from "../assets/images/3.jpg";

import classes from "../styles/MiniPlayer.module.css";
export default function MiniPlayer() {
  return (
<div class={`${classes.miniPlayer} ${classes.floatingBtn}`}>
          <span class={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
          <span class={`material-icons-outlined ${classes.close}`}> close </span>
          <img src={player_img} alt="" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
  );
}
