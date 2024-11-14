// Sample JSON data
const recipes = [{
    "_id": {
      "$oid": "1"
    },
    "name": "Spaghetti Carbonara",
    "description": "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper",
    "cuisine": "Italian",
    "image": "Spaghetti Carbonara.jpg",
    "prepTime": 15,
    "cookTime": 20,
    "servings": 4,
    "difficulty": "medium",
    "ingredients": [
      {
        "item": "spaghetti",
        "amount": 400,
        "unit": "grams"
      },
      {
        "item": "pancetta",
        "amount": 200,
        "unit": "grams"
      },
      {
        "item": "eggs",
        "amount": 4,
        "unit": "whole"
      },
      {
        "item": "Pecorino Romano cheese",
        "amount": 100,
        "unit": "grams"
      },
      {
        "item": "black pepper",
        "amount": 2,
        "unit": "teaspoons"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "text": "Bring a large pot of salted water to boil"
      },
      {
        "step": 2,
        "text": "Cook spaghetti according to package instructions"
      },
      {
        "step": 3,
        "text": "While pasta cooks, crisp pancetta in a large pan"
      }
    ],
    "nutritionalInfo": {
      "calories": 650,
      "protein": 25,
      "carbohydrates": 70,
      "fat": 35
    },
    "tags": [
      "pasta",
      "italian",
      "main course"
    ]
  },
  {
    "_id": {
      "$oid": "2"
    },
    "name": "Italian Sausage Spaghetti Squash",
    "description": "An easy, gluten free recipe for a hearty winter meal",
    "cuisine": "Italian",
    "image": "Italian Sausage Spaghetti Squash.jpg",
    "prepTime": 20,
    "cookTime": 100,
    "servings": 12,
    "difficulty": "medium",
    "ingredients": [
      {
        "item": "spaghetti squash, halved and seeded",
        "amount": 1300,
        "unit": "grams"
      },
      {
        "item": "italian sausage, ground",
        "amount": 400,
        "unit": "grams"
      },
      {
        "item": "rib celery, chopped",
        "amount": 1,
        "unit": "whole"
      },
      {
        "item": "can diced tomatoes with basil, garlic, and oregano",
        "amount": 425,
        "unit": "grams"
      },
      {
        "item": "chicken broth",
        "amount": 1.5,
        "unit": "cups"
      },
      {
          "item": "can tomato paste",
          "amount": 170,
          "unit": "grams"
      },
      {
          "item": "cloves garlic",
          "amount": 3,
          "unit": "pressed"
      },
      {
          "item": "shredded mozzarella cheese",
          "amount": 1,
          "unit": "cup"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "text": "Preheat oven to 200°C. Line a baking sheet with parchment paper. Place squash, cut sides down, on baking sheet."
      },
      {
        "step": 2,
        "text": "Bake squash in the preheated oven until it starts to soften, about 25 minutes. Reduce oven temperature to 175°C and continue baking until easily pierced with a knife, about 25 minutes more. Remove from the oven and cool until easily handled."
      },
      {
        "step": 3,
        "text": "Cook sausage in a large skillet over medium heat until browned, about 5 minutes; remove from skillet. Add onion, celery, and carrot to the skillet; cook and stir in sausage drippings until starting to soften, about 5 minutes. Stir cooked sausage, diced tomatoes, chicken broth, tomato paste, and garlic into the skillet. Simmer sauce until flavors combine, about 15 minutes."
      },
      {
          "step": 4,
          "text": "Use a fork to scrape insides of squash into spaghetti strands. Transfer strands to a 22 ~ 33cm casserole dish. Spoon sauce over strands and stir to combine. Cover with mozzarella cheese."
      },
      {
          "step": 5,
          "text": "Bake in the preheated oven oven until bubbly and golden brown, about 25 minutes."
      }
    ],
    "nutritionalInfo": {
      "calories": 2016,
      "protein": 108,
      "carbohydrates": 156,
      "fat": 108
    },
    "tags": [
      "winter",
      "italian",
      "main course"
    ]
  },
  {
      "_id": {
        "$oid": "3"
      },
      "name": "Vegan Mushroom Ragout",
      "description": "A hearty winter meal featuring a mix of fresh and dried mushrooms, rosemary and thyme, and lots of garlic",
      "cuisine": "French",
      "image": "Vegan Mushroom Ragout.jpg",
      "prepTime": 10,
      "cookTime": 20,
      "servings": 6,
      "difficulty": "low",
      "ingredients": [
        {
          "item": "dried mushrooms ",
          "amount": 1.5,
          "unit": "cups"
        },
        {
          "item": "boiling water",
          "amount": 2,
          "unit": "cups"
        },
        {
          "item": "extra virgin olive oil",
          "amount": 2,
          "unit": "tablespoons"
        },
        {
          "item": "cloves garlic",
          "amount": 6,
          "unit": "minced"
        },
        {
          "item": "onion",
          "amount": 1,
          "unit": "medium"
        },
        {
            "item": "cremini or button mushrooms",
            "amount": 400,
            "unit": "grams"
        },
        {
            "item": "fresh rosemary",
            "amount": 1,
            "unit": "tablespoon"
        },
        {
          "item": "fresh thyme",
          "amount": 2,
          "unit": "teaspoons"
        },
        {
          "item": "amaretto liqueur",
          "amount": 2,
          "unit": "tablespoons"
        },
        {
          "item": "unbleached all purpose flour",
          "amount": 2,
          "unit": "tablespoons"
        },
        {
          "item": "vegan butter",
          "amount": 2,
          "unit": "tablespoons"
        },
        {
          "item": "parsley, chopped",
          "amount": 2,
          "unit": "tablespoons"
        }
      ],
      "instructions": [
        {
          "step": 1,
          "text": "Soak mushrooms in boiling water for 30 minutes to reconstitute them. Strain out the mushrooms and reserve the stock for use later."
        },
        {
          "step": 2,
          "text": "Add onions to the pot along with some salt and ground black pepper. Saute until the onions are softened, 2-3 minutes."
        },
        {
          "step": 3,
          "text": "Add the reconstituted, dried mushrooms to the pot and saute a couple of minutes."
        },
        {
            "step": 4,
            "text": "Stir in the fresh mushrooms and mix well. Mix in the herbs and the liqueur or wine. Cook a couple of minutes until the alcohol has evaporated, leaving only flavor behind."
        },
        {
            "step": 5,
            "text": "Add flour to the pot and mix until the flour is absorbed into the vegetables and there is no visible flour. Add the stock from the reconstituted mushrooms to the pot. Bring to a boil and simmer for 10 minutes until mushrooms are tender."
        },
        {
          "step": 6,
          "text": "Stir in the vegan butter, add more salt and ground black pepper to taste, and turn off heat. Garnish the ragout with parsley before serving."
      }
      ],
      "nutritionalInfo": {
        "calories": 132,
        "protein": 3,
        "carbohydrates": 15,
        "fat": 7
      },
      "tags": [
        "vegan",
        "french",
        "appetiser"
      ]
    }
  ];
  

// Store the original recipe data to reset as needed
const originalRecipes = JSON.parse(JSON.stringify(recipes));

// Function to load recipes into the page
function loadRecipes() {
  const recipeList = document.getElementById("recipe-list");
  recipes.forEach((recipe, index) => {
    const recipeLink = document.createElement("a");
    recipeLink.textContent = recipe.name;
    recipeLink.href = "#";
    recipeLink.onclick = () => displayRecipe(index);
    recipeList.appendChild(recipeLink);
    recipeList.appendChild(document.createElement("br"));
  });
}

// Function to display a specific recipe
function displayRecipe(index) {
  const recipe = recipes[index];
  const recipeDisplay = document.getElementById("recipe-display");
  recipeDisplay.innerHTML = `
    <h2>${recipe.name}</h2>
    <p><strong>Description:</strong> ${recipe.description}</p>
    <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
    <img src="${recipe.image}" alt="${recipe.name}">
    <p><strong>Preparation Time:</strong> ${formatTime(recipe.prepTime)}</p>
    <p><strong>Cooking Time:</strong> ${formatTime(recipe.cookTime)}</p>
    <p><strong>Servings:</strong> ${recipe.servings}</p>
    <button id="servings-btn" onclick="toggleServings(${index})">Double the Servings</button>
    <button id="unit-btn" onclick="toggleUnits(${index})">Convert to Imperial</button>
    <h3>Ingredients</h3>
    <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient.amount} ${ingredient.unit} ${ingredient.item}</li>`).join('')}</ul>
  `;
}

// Helper function to format time
function formatTime(minutes) {
  return minutes >= 60 ? `${Math.floor(minutes / 60)} hours ${minutes % 60} minutes` : `${minutes} minutes`;
}

// Toggle servings between double and single
function toggleServings(index) {
  const recipe = recipes[index];
  const servingsBtn = document.getElementById("servings-btn");

  if (servingsBtn.textContent === "Double the Servings") {
    recipe.servings *= 2;
    recipe.ingredients.forEach(ingredient => ingredient.amount *= 2);
    servingsBtn.textContent = "Single Servings";
  } else {
    recipe.servings = originalRecipes[index].servings;
    recipe.ingredients = JSON.parse(JSON.stringify(originalRecipes[index].ingredients));
    servingsBtn.textContent = "Double the Servings";
  }

  displayRecipe(index);
}

// Toggle units between metric and imperial
function toggleUnits(index) {
  const recipe = recipes[index];
  const unitBtn = document.getElementById("unit-btn");

  if (unitBtn.textContent === "Convert to Imperial") {
    recipe.ingredients.forEach(ingredient => {
      if (ingredient.unit === "grams") {
        ingredient.amount = (ingredient.amount / 1000 * 2.20462).toFixed(2); // Convert grams to pounds
        ingredient.unit = "pounds";
      } else if (ingredient.unit === "cups") {
        ingredient.amount = (ingredient.amount * 8.11537).toFixed(2); // Convert cups to fluid ounces
        ingredient.unit = "oz";
      }
    });
    unitBtn.textContent = "Convert to Metric";
  } else {
    recipe.ingredients = JSON.parse(JSON.stringify(originalRecipes[index].ingredients));
    unitBtn.textContent = "Convert to Imperial";
  }

  displayRecipe(index);
}

// Load recipes on page load
window.onload = loadRecipes;

  
