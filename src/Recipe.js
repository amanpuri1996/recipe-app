import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        // <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-4">
        // <div class="card-columns">
            <div className="card" style={{boxShadow: "-4px 8px 5px darkgrey"}}>
                <img src={image} class="img-fluid w-100 mx-auto" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">Name : {title}</h5>
                    <p className="card-text"> Calories : {calories}</p>
                </div>
                <h5 className="text-center"><b>Ingredient </b></h5>
                <ul className="list-group list-group-flush">
                    {
                        ingredients.map(ingredient => (
                            <>
                                <li class="list-group-item"> {ingredient.text}</li>
                            </>
                        ))
                    }
                </ul>
            </div>
       
    );
}
export default Recipe;
