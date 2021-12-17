import {CollectionApiProvider, CollectionFetchResponse, ModelApiProvider} from '@zidadindimon/vue-mc';
import axios from "axios";
import {Film} from "@/mc/types/film.types";
import {FilmInfo, ModelFetchDto} from "@/mc/types/filmInfo.types";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "699fe261bad37d16f5bc7fa8547e0738";

axios.defaults.baseURL = BASE_URL;


export const filmModelApiProvider:ModelApiProvider<FilmInfo> ={
    async fetch(): Promise<ModelFetchDto>{
        const response = await axios.get(
            `/trending/movie/week?api_key=${API_KEY}`
        );
        return await response.data;
    }
}


export const filmCollectionProvider: CollectionApiProvider<Film> = {
    async fetch(): Promise<CollectionFetchResponse<Film>>{
        const response = await axios.get(
            `/trending/movie/week?api_key=${API_KEY}`
        );
        return await response.data;

    }
}