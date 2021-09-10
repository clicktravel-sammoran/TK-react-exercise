import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import styles from './Recipes.module.css';
import Recipe from '../../types/Recipe';
import getRecipes from '../../api/getRecipes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Recipes = ({ query }:{query?:string}):JSX.Element => {
  const [recipes, setRecipes] = useState<Recipe[] | null>([]);

  const getAndSetRecipes = async () => {
    try {
      const newRecipes = await getRecipes({});
      setRecipes(newRecipes);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAndSetRecipes();
  }, []);
  return (
    <Container fluid="xl">
      {recipes?.map((recipe) => {
        const {
          name, description, ingredients, id,
        } = recipe;

        return (
          <Card key={id}>
            <Card.Header className={styles.Header}>
              {`Id: ${id}`}
              {' '}
              <Button variant="primary">Edit Recipe</Button>
            </Card.Header>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              {ingredients?.map((ingredient) => (<Badge key={`${Math.random()}_${ingredient.name}`} bg="success" className={styles.Ingredient_pill}>{ingredient.name}</Badge>))}
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};
export default Recipes;
