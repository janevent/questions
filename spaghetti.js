class Recipe{
    constructor(name, ingredients = [], instructions = []){
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions
    }

    displayIngredients = ()=> {
        this.ingredients.forEach((ing,ind)=>{
            console.log(ind+1 + '.' + ing)
        })
    }

    displayInstructions = () => {
        this.instructions.forEach( (inst, ind) => {
            console.log(ind+1 + '.' + inst)
        })
    }

    displayRecipe = ()=> {
        console.log(this.name)
        console.log('Ingredients:')
        this.displayIngredients();
        console.log('Instructions:');
        this.displayInstructions()
    }
}
let spaghetti = new Recipe('Spaghetti', ['pasta', 'veggie meat or ground beef', '5 tomatoes', 'half an onion', '2 teaspoons salt'], ['boil pasta until desired tenderness with a half a teaspoon of salt', 'fry meat or meat substitute', 'dice tomatoes and onion', 'fry tomatoes and onion squeeshing tomatoes with a fork', 'add salt to taste'])
spaghetti.displayRecipe()