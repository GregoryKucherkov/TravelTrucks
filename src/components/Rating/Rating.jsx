import css from "./Rating.module.css";
import sprite from "../../assets/sprite.svg";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((value) => (
        <svg
          key={value}
          className={`${css.ratingStar} ${
            value <= Math.round(rating) ? css.isActive : ""
          }`}
        >
          <use href={`${sprite}#star`} />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
