export interface IMovieDetail {
   show: {
      id: string,
      name: string,
      genres: string [],
      network: {
         country: {
            name:  string
         } 
      }
      premiered: string,
      image: {
         original: string,
      }
      summary: string,
      rating: {
         average: number
      }
   }
}