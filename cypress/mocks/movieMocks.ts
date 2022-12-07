import { IOmdbResponse } from "../../src/ts/models/IOmdbResponse";

export const mockData: IOmdbResponse = {
  Search: [
    //egenskap för vår IOmdbResponse (om man kollar i interfacet).
    {
      Title: "Gone with the Wind (Mock)",
      imdbID: "tt0031381",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Year: "1939",
    },
    {
      Title: "Guardians of the Galaxy (Mock)",
      imdbID: "tt2015381",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTkwZjU3MTctMGExMi00YjU5LTgwMDMtOWNkZDRlZjQ4NmZhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
      Year: "2014",
    },
  ],
};
