import { IPokemon } from './interfaces';

export interface IStorage {
    get(key: string): string;
    add(data: IPokemon): void;
    delete(key: number): void;
    deleteAll(key: string): void;
}
