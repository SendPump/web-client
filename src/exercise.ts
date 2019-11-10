import Fuse from "fuse.js";
import * as Ramda from "ramda";


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


// TODO maybe this has bad overhead for always creating a new class? Check implementation if slow.
export const searchExercises = (exercises: Exercise[], searchText: string): Exercise[] => {
  if (searchText === "") {
    return exercises;
  }

  const fuse = new Fuse(exercises, { keys: [ "name", "categories" ], threshold: 0.3 });

  return  fuse.search(searchText);
}


export const sortExercises = (exercises: Exercise[]): Exercise[] => {
  return Ramda.sort((a: Exercise, b: Exercise) => a.name.localeCompare(b.name), exercises);
}
