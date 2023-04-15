import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const getSearch = (value: string): Promise<AxiosResponse> => {
   const options: AxiosRequestConfig = {
      method: 'GET',
      url: `https://api.tvmaze.com/search/shows?q=${value}`
   };
   
   return axios.request(options)
}

export default getSearch;
