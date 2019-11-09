import { Exercise } from "../exercise";


export const exercises: Exercise[] = [
  {
    id: "1",
    name: "biking",
    kinds: [ "quick-start", "intervals", "fat-loss" ],
    categories: [ "cardio" ],
    difficultyType: "level",
    quantityType: [ "time", "distance" ]
  },
  {
    id: "2",
    name: "stair master",
    kinds: [ "quick-start", "intervals", "fat-loss" ],
    categories: [ "cardio" ],
    difficultyType: "level",
    quantityType: [ "time", "distance" ],
  },
  {
    id: "3",
    name: "endless rope",
    kinds: [],
    categories: [ "strength" ],
    difficultyType: "easy-med-hard",
    quantityType: [ "time", "distance" ]
  },
  {
    id: "4",
    name: "bouldering",
    kinds: [ "regular", "campus" ],
    categories: [ "climbing" ],
    difficultyType: "boulder",
    quantityType: [ "reps" ]
  },
  {
    id: "5",
    name: "rope climbing",
    kinds: [ "top rope", "lead" ],
    categories: [ "climbing" ],
    difficultyType: "rope",
    quantityType: [ "reps" ]
  },
  {
    id: "6",
    name: "pull-up",
    kinds: [ "regular", "wide", "one-handed" ],
    categories: [ "strength" ],
    difficultyType: "weighted",
    quantityType: [ "reps" ]
  },
  {
    id: "7",
    name: "chin-up",
    kinds: [ "regular", "wide", "one-handed" ],
    categories: [ "strength" ],
    difficultyType: "weighted",
    quantityType: [ "reps" ]
  },
  {
    id: "8",
    name: "muscle-up",
    kinds: [],
    categories: [ "strength" ],
    difficultyType: "weighted",
    quantityType: [ "reps" ]
  },
  {
    id: "9",
    name: "dips",
    kinds: [],
    categories: [ "strength" ],
    difficultyType: "weighted",
    quantityType: [ "reps" ]
  }
];
