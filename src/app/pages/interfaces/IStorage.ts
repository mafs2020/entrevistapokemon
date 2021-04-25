export interface IStorage {
    get(key: string): string;
    add(data: string): void;
    delete(key: string): void;
}
