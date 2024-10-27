import { useSelector } from "react-redux";
import { selectCarDetails } from "../../redux/cars/carsSelectors";
import { nanoid } from "@reduxjs/toolkit";
import css from "./Reviews.module.css";
import Rating from "../Rating/Rating";

const Reviews = () => {
  const details = useSelector(selectCarDetails);

  return (
    <section className={css.reviewsSection}>
      {details.reviews?.length > 0 ? (
        <ul>
          {details.reviews.map((review) => (
            <li className={css.reviewLi} key={nanoid()}>
              <div className={css.titleWraper}>
                <h2 className={css.avatar}>{review.reviewer_name[0]}</h2>
                <div className={css.ratingWraper}>
                  <p>{review.reviewer_name}</p>
                  <Rating rating={details.rating} />
                </div>
              </div>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews for this car available</p>
      )}
    </section>
  );
};

export default Reviews;
