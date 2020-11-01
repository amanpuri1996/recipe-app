import './App.css';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = "88ab18fe";
  const APP_KEY = "50b72a3100211897cbe2f0edd3c703e3";
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipe();
    console.log("effect has been run");
  }, [query]);


  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const inputSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  return (
    <div className="container-fluid">
        <div className="col-md-12 text-center my-4">
          <form onSubmit={getSearch} className="search-form">
            <input
              className="search-bar"
              type="text"
              value={search}
              onChange={inputSearch}
              placeholder="Search"
            />
            <button
              type="submit"
              className=" col-1 btn-danger">
              Search
         </button>
                     </form>
        </div>
        <div className="card-columns">

          {
            recipes.map(recipe => (
              <Recipe
                key={Math.random() *102}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            ))
          }
        </div>
      </div>
  );
}

export default App;
