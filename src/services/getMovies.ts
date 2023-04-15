import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const getMovies = (): Promise<AxiosResponse> => {
   const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://api.tvmaze.com/search/shows?q=girls'
   };
   
   return axios.request(options)
}

export default getMovies;