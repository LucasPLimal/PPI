export type Filme = {
    Title: string
    Year: string
    Genre: string
    Director: string
    Actors: string
    Country: string
    Plot: string
    Poster: string
}

export type SearchItem = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export type SearchResponse = {
    Search: SearchItem[]
    totalResults: string
    Response: string
    Error?: string
}