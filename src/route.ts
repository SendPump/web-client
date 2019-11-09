export type Route = HomeRoute | NewWorkoutRoute | LibraryRoute | ProgressRoute;


export interface HomeRoute {
  route: "home"
}


export interface NewWorkoutRoute {
  route: "new-workout";
}


export interface LibraryRoute {
  route: "library";
}


export interface ProgressRoute {
  route: "progress";
}


export const urlTemplate = (route: Route): string => {
  switch (route.route) {
    case "home":
      return "/home";

    case "new-workout":
      return "/new-workout";

    case "library":
      return "/library";

    case "progress":
      return "/progress";
  }
}


export const buildUrl = (route: Route): string => {
  switch (route.route) {
    case "home":
      return "/home";

    case "new-workout":
      return "/new-workout";

    case "library":
      return "/library";

    case "progress":
      return "/progress";
  }
}
