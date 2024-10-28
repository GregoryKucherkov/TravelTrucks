import { useSelector } from "react-redux";
import css from "./CarsList.module.css";
import { selectCars } from "../../redux/cars/carsSelectors";
import Car from "../Car/Car";

const CarsList = () => {
  const cars = useSelector(selectCars);

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
