import {AnyRecord, Collection, CollectionApiProvider} from '@zidadindimon/vue-mc';
import {FilmModel} from "@/mc/FilmModel";
import {Film} from "@/mc/types/film.types";
import { filmCollectionProvider} from '@/services/api-provider.service'


export class FilmCollection extends Collection<FilmModel, Film> {
    protected model(item?: Film | FilmModel): {new(): FilmModel} {
        console.log(item);

        return FilmModel;
    }

    protected defaultFilterOptions(): AnyRecord {
        return { size: 20 };
    }

    protected api(): CollectionApiProvider<Film> {
        return filmCollectionProvider;
    }
}