const foods = [
  {
    name: "Chicken Breast",
    protein: 31,
    carbs: 0,
    fats: 3,
    price: 6.99,
    category: "Protein Source",
    vegetarian: false,
  },
  {
    name: "Tuna",
    protein: 29,
    carbs: 0,
    fats: 1,
    price: 1.39,
    category: "Protein Source",
    vegetarian: false,
  },
  {
    name: "Quark",
    protein: 12,
    carbs: 4,
    fats: 0.2,
    price: 1.49,
    category: "Protein Source",
    vegetarian: true,
  },
  {
    name: "Eggs",
    protein: 13,
    carbs: 1.1,
    fats: 11,
    price: 2.5,
    category: "Protein Source",
    vegetarian: true,
  },
  {
    name: "Tofu",
    protein: 8,
    carbs: 1.9,
    fats: 4.8,
    price: 1.0,
    category: "Protein Source",
    vegetarian: true,
  },
  {
    name: "Greek Yogurt",
    protein: 10,
    carbs: 4,
    fats: 0,
    price: 1.2,
    category: "Protein Source",
    vegetarian: true,
  },
  {
    name: "Cottage Cheese",
    protein: 11,
    carbs: 3,
    fats: 4,
    price: 1.3,
    category: "Protein Source",
    vegetarian: true,
  },
  {
    name: "Salmon",
    protein: 20,
    carbs: 0,
    fats: 13,
    price: 3.99,
    category: "Protein Source",
    vegetarian: false,
  },
  {
    name: "Lean Beef",
    protein: 26,
    carbs: 0,
    fats: 8,
    price: 5.99,
    category: "Protein Source",
    vegetarian: false,
  },
  {
    name: "Lentils",
    protein: 9,
    carbs: 20,
    fats: 0.4,
    price: 0.5,
    category: "Protein Source",
    vegetarian: true,
  },
  {
    name: "Black Beans",
    protein: 8,
    carbs: 20,
    fats: 0.5,
    price: 0.4,
    category: "Protein Source",
    vegetarian: true,
  },
  {
    name: "Tempeh",
    protein: 19, 
    carbs: 7,
    fats: 11,
    price: 2.0,
    category: "Protein Source",
    vegetarian: true,
  },
  {
    name: "Shrimp",
    protein: 24,
    carbs: 0,
    fats: 0.3,
    price: 3.5,
    category: "Protein Source",
    vegetarian: false,
  },
  {
    name: "Brown Rice",
    protein: 2.6,
    carbs: 23,
    fats: 0.9,
    price: 0.99,
    category: "Carb Source",
    vegetarian: true,
  },
  {
    name: "Broccoli",
    protein: 2.8,
    carbs: 6,
    fats: 0.4,
    price: 0.79,
    category: "Carb Source",
    vegetarian: true,
  },
  {
    name: "Sweet Potato",
    protein: 1.6,
    carbs: 20,
    fats: 0.1, 
    price: 0.89,
    category: "Carb Source",
    vegetarian: true,
  },
  {
    name: "Oats",
    protein: 13,
    carbs: 66,
    fats: 6.5,
    price: 1.29,
    category: "Carb Source",
    vegetarian: true,
  },
  {
    name: "Banana",
    protein: 1.1,
    carbs: 22.8,
    fats: 0.3,
    price: 0.25,
    category: "Carb Source",
    vegetarian: true,
  },
  {
    name: "Olive Oil",
    protein: 0,
    carbs: 0,
    fats: 14,
    price: 0.15,
    category: "Fat Source",
    vegetarian: true,
  },
  {
    name: "Avocado",
    protein: 2,
    carbs: 9,
    fats: 15,
    price: 1.2,
    category: "Fat Source",
    vegetarian: true,
  },
  {
    name: "Almonds",
    protein: 21,
    carbs: 22,
    fats: 49,
    price: 2.5,
    category: "Fat Source",
    vegetarian: true,
  },
  {
    name: "Butter",
    protein: 0.9,
    carbs: 0.1,
    fats: 81,
    price: 1.5,
    category: "Fat Source",
    vegetarian: true,
  },
];

let userGoals = { protein: 0, carbs: 0, fats: 0 };
let selectedFoods = [];
let isBudgetFriendly = false;
let isVegetarian = false;

function displayFoods(foodsList) {
  const foodList = document.getElementById("food-list");
  foodList.innerHTML = "";
  foodsList.forEach((food) => {
    const foodItem = document.createElement("div");
    foodItem.className = "list-item";
    foodItem.innerHTML = `${food.name} - Protein: ${food.protein}g, Carbs: ${
      food.carbs
    }g, Fats: ${food.fats}g, Price: ${(food.price / 10).toFixed(2)} € per 100g`;
    foodList.appendChild(foodItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayFoods(foods);
});

document.getElementById("set-goals").addEventListener("click", () => {
  const proteinGoal = document.getElementById("protein-goal").value;
  const carbsGoal = document.getElementById("carbs-goal").value;
  const fatsGoal = document.getElementById("fats-goal").value;

  if (!proteinGoal || !carbsGoal || !fatsGoal) {
    alert("Please set goals for protein, carbs, and fats.");
    return;
  }

  userGoals.protein = Number(proteinGoal);
  userGoals.carbs = Number(carbsGoal);
  userGoals.fats = Number(fatsGoal);
  alert("Goals set successfully!");
});

document.getElementById("budget-friendly").addEventListener("change", (e) => {
  isBudgetFriendly = e.target.checked;
});

document.getElementById("vegetarian").addEventListener("change", (e) => {
  isVegetarian = e.target.checked;
});

document
  .getElementById("generate-shopping-list")
  .addEventListener("click", () => {

    if (isBudgetFriendly || isVegetarian) {
      alert("what are u doing");
      return;
      
    }

     // alles unten ausgegraut wegen hier return die return statemtns berbuggen alles ,amche ich hweg 
    else {
      alert("still what are u doing?")
      return;
    }

    const shoppingList = document.getElementById("shopping-list");
    shoppingList.innerHTML = "";
    selectedFoods = [];
    let remainingGoals = { ...userGoals };

    let filteredFoods = foods;

    if (isBudgetFriendly) {
      filteredFoods = filteredFoods.sort((a, b) => a.price - b.price);
    }

    

    if (isVegetarian) {
      filteredFoods = filteredFoods.filter((food) => food.vegetarian);
    }

    function addFoodFromCategory(categoryFoods, nutrient) {
      for (let food of categoryFoods) {
        if (remainingGoals[nutrient] <= 0) break;

        let per100g = food[nutrient];
        let pricePer100g = food.price / 10;
        let portionNeeded = Math.min(
          (remainingGoals[nutrient] / per100g) * 100,
          200
        );
        let totalPrice = (portionNeeded / 100) * pricePer100g;

        remainingGoals[nutrient] -= (portionNeeded / 100) * per100g;

        selectedFoods.push({
          name: food.name,
          [nutrient]: ((portionNeeded / 100) * per100g).toFixed(1),
          price: totalPrice.toFixed(2),
          amount: `${portionNeeded.toFixed(0)}g`,
        });
      }
    }

    const proteinSources = filteredFoods.filter(
      (food) => food.category === "Protein Source"
    );
    addFoodFromCategory(proteinSources, "protein");

    const carbSources = filteredFoods.filter(
      (food) => food.category === "Carb Source"
    );
    addFoodFromCategory(carbSources, "carbs");

    const fatSources = filteredFoods.filter(
      (food) => food.category === "Fat Source"
    );
    addFoodFromCategory(fatSources, "fats");

    let totalCost = 0;
    selectedFoods.forEach((food) => {
      const listItem = document.createElement("div");
      listItem.className = "list-item";
      listItem.innerHTML = `${food.name} - ${food.amount} - Price: ${food.price} €`;
      shoppingList.appendChild(listItem);
      totalCost += parseFloat(food.price);
    });

    const totalCostDisplay = document.createElement("div");
    totalCostDisplay.className = "total-cost";
    totalCostDisplay.innerHTML = `Total Cost: ${totalCost.toFixed(2)} €`;
    shoppingList.appendChild(totalCostDisplay);
  });




document.addEventListener("DOMContentLoaded", () => {
  // Fetch data from database.php
  fetch("database.php")
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      displayFoods(data); // Use the fetched data to update the UI
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function displayFoods(foodsList) {
  const foodList = document.getElementById("food-list");
  foodList.innerHTML = ""; // Clear the current content
  foodsList.forEach((food) => {
    const foodItem = document.createElement("div");
    foodItem.className = "list-item";
    foodItem.innerHTML = `${food.name} - Protein: ${food.protein}g, Carbs: ${
      food.carbs
    }g, Fats: ${food.fats}g, Price: ${(food.price / 10).toFixed(2)} € per 100g`;
    foodList.appendChild(foodItem);
  });
}


const loginbtbn = document.getElementById('loginbtn');
const closebtn = document.getElementById("closedialog");
const dialog = document.getElementById('dialog')

loginbtbn.addEventListener('click', function() {
  dialog.showModal();
})

closebtn.addEventListener('click', function() {
  
  dialog.close();
  
})

document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginbtn");
  const dialog = document.getElementById("dialog");

  // Show dialog when login button is clicked
  loginBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  // Close dialog
  document.getElementById("closedialog").addEventListener("click", () => {
    dialog.close();
  });

  // Hide login button if user is logged in
  if (document.getElementById("welcome-message").innerHTML.trim() !== "") {
    loginBtn.style.display = "none";
  }
});
