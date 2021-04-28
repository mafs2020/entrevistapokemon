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

export interface IPokemonDetalle extends IPokemon{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    base_experience: number;
    height: number;
    order: number;
    weight: number;
    abilities: string[];
};
