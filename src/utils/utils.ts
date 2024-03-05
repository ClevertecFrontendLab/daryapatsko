import { FeedBackT } from "./../types/types";
export const sortByDate = (list:FeedBackT[])=>{
    return[...list].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
} 