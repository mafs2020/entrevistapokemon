export interface IPokemonResponse{
    name: string;
    count: number;
    next: string;
    previous: boolean;
    results: IPokemon[];
};

export interface IPokemon{
    id: number;
    name: string;
    img?: string;
};
