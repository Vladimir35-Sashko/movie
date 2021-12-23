export interface FilmInfo {
    id:number,
    title:string,
    vote_average:number,
    vote_count:number,
    popularity:number,
    original_title:string,
    genre_ids:number| string,
    overview:string,
    release_date:number,
    poster_path: string,

}

export interface ModelFetchDto {
    id: number;
}