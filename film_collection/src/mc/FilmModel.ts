import {Model} from '@zidadindimon/vue-mc';
import {FilmInfo} from '@/mc/types/filmInfo.types';

export class FilmModel extends Model<FilmInfo> implements FilmInfo{
    genre_ids: number| string = null;
    id: number = null;
    original_title: string = null;
    overview: string = null;
    popularity: number = null;
    title: string = null;
    vote_average: number = null;
    vote_count: number = null;
    release_date: number = null;
    poster_path: any = null;


}

