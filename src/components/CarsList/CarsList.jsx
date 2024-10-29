// import { useSelector } from "react-redux";
// import { selectCars } from "../../redux/cars/carsSelectors";
import css from "./CarsList.module.css";
import Car from "../Car/Car";

const CarsList = ({ cars }) => {
  // const cars = useSelector(selectCars);

  return (
    <ul className={css.carList}>
      {cars.map((car) => (
        <li className={css.cardLi} key={car.id}>
          <Car data={car}></Car>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
