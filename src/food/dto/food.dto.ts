import { Category } from "../entity/food.entity";

export class FoodDTO {
  readonly id: string;
  readonly nameFood: string;
  readonly price: number;
  readonly describe: string;
  readonly category: Category;
}
