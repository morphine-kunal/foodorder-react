import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Litti-chokha',
    description: `Bihar's Love`,
    price: 250,
  },
  {
    id: 'm2',
    name: 'Vada-Pav',
    description: 'A Maharashtrian specialty!',
    price: 350,
  },
  {
    id: 'm3',
    name: 'Chicken momos',
    description: 'North-eastern special',
    price: 300,
  },
  {
    id: 'm4',
    name: 'Chole-Kulche',
    description: 'Direct from Delhi',
    price: 400,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
