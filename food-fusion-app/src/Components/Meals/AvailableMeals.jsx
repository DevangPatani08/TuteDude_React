import React from 'react';
import classes from './AvailableMeals.module.css'
import Cards from '../UI/Cards'; 
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    { id: 'm1', name: 'Sushi', description: 'Finest fish and seafood', price: 22.99 },
    { id: 'm2', name: 'Schnitzel', description: 'Crunchy fried chicken', price: 18.99 },
    { id: 'm3', name: 'Burger', description: 'Juicy beef patty', price: 12.99 },
    { id: 'm4', name: 'Risotto', description: 'Creamy rice dish', price: 24.99 }
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

    return (
        <section className={classes.meals}>
            <Cards>
                <ul>{mealsList}</ul>
            </Cards>
        </section>
    )
};

export default AvailableMeals;