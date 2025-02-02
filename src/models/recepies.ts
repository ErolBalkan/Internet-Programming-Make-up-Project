export type Recepie = {
    id: number;
    description: string;
    instructions: string;
    cooking_time: string;
    difficulty_level: string;
    image_URL: string;
    ingredients : Ingredient[];
  }
  export type Ingredient = {
    quantity: number;
    name: string;
  }