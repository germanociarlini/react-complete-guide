import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const MEALS_URL =
  "https://react-http-d72a2-default-rtdb.firebaseio.com/meals.json";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMeals = async () => {
    const response = await fetch(MEALS_URL);
    const rawMeals = await response.json();

    const meals = [];

    for (const key in rawMeals) {
      meals.push({
        id: key,
        name: rawMeals[key].name,
        description: rawMeals[key].description,
        price: rawMeals[key].price,
      });
    }

    setMeals(meals);
    setIsLoading(false);
  };

  useEffect(() => {
    loadMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
