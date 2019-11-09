export interface Exercise {
  id: string;
  name: string;
  kinds: string[];
  categories: ExerciseCategory[];
  difficultyType: DifficultyType;
  quantityType: QuantityType[];
}


export type ExerciseCategory = "cardio" | "strength" | "climbing" | "core";


export type DifficultyType = "boulder" | "rope" | "level" | "weighted" | "easy-med-hard";


export type QuantityType = "time" | "reps" | "distance";
