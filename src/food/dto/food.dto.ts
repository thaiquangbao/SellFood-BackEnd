import { Category } from "../entity/food.entity";

export class FoodDTO {
  readonly id: string;
  readonly nameFood: string;
  readonly price: number;
  readonly describe: string;
  readonly category: Category;
  readonly categories: Category[];
}

export class FoodDTOUpdate {
  readonly nameFood: string;
  readonly price: number;
  readonly describe: string;
  readonly category: Category;
}
