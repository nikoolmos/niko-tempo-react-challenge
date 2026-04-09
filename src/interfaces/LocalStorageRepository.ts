import { Repository } from "./Repository";

export interface LocalStorageRepository extends Repository {
    getItem(paramId: string): Record<string, any>;
    setItem(paramId: string, paramValue: Record<string, any>): void;
}