export type WorkoutCategory = "cardio" | "strength" | "climbing";


export type Amount = "time" | "reps" | "distance" | "boulder" | "rope";


export interface Exercise {
  id: string;
  name: string;
  exerciseCategory: string;
  supportedAmounts: Amount[];
}


export const exercises: Exercise[] = [
  {
    id: "1",
    name: "Biking",
    exerciseCategory: "cardio",
    supportedAmounts: [ "time", "distance" ]
  },
  {
    id: "2",
    name: "Stair Master",
    exerciseCategory: "cardio",
    supportedAmounts: [ "time", "distance" ]
  },
  {
    id: "3",
    name: "Endless Rope",
    exerciseCategory: "strength",
    supportedAmounts: [ "time", "distance" ]
  },
  {
    id: "4",
    name: "Bouldering",
    exerciseCategory: "climbing",
    supportedAmounts: [ "boulder" ]
  },
  {
    id: "5",
    name: "Top Roping",
    exerciseCategory: "climbing",
    supportedAmounts: [ "rope" ]
  },
  {
    id: "6",
    name: "Leading",
    exerciseCategory: "climbing",
    supportedAmounts: [ "rope" ]
  },
  {
    id: "7",
    name: "Pullup",
    exerciseCategory: "strength",
    supportedAmounts: [ "reps" ]
  },
  {
    id: "8",
    name: "Wide Pullup",
    exerciseCategory: "strength",
    supportedAmounts: [ "reps" ]
  },
  {
    id: "9",
    name: "Pushup",
    exerciseCategory: "strength",
    supportedAmounts: [ "reps" ]
  },
  {
    id: "10",
    name: "Wide Pushup",
    exerciseCategory: "strength",
    supportedAmounts: [ "reps" ]
  },
  {
    id: "11",
    name: "Triangle Pushup",
    exerciseCategory: "strength",
    supportedAmounts: [ "reps" ]
  },
  {
    id: "12",
    name: "Military Pushup",
    exerciseCategory: "strength",
    supportedAmounts: [ "reps" ]
  },
  {
    id: "13",
    name: "Dips",
    exerciseCategory: "strength",
    supportedAmounts: [ "reps" ]
  }
];
