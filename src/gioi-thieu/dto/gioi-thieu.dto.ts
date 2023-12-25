export class IntroductionDTO {
  title: string;
  noiDung: string;
  foods: Array<CategoryFood>;
  img: string;
  noiDungKhac: string;
}
interface Food {
  name: string;
}
interface CategoryFood {
  nameCate: string;
  food: Array<Food>;
}
