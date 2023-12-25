export class IntroductionDTO {
  id: string;
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
export class UpdateIntroduction {
  title: string;
  noiDung: string;
  foods: Array<CategoryFood>;
  img: string;
  noiDungKhac: string;
}
export class IntroductionBody {
  title: string;
  noiDung: string;
  img: string;
  noiDungKhac: string;
}
