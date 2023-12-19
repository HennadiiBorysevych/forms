import { DishCategory } from '@/constants/categoryDish';

export interface Dish {
  id: string;
  title: string;
  photoURL: string;
  category: DishCategory;
  ingredients: [title: string, is_required: boolean];
  weightGrams:number
  dateCreated: Date;
}
