export interface Repository {
    getItem(paramId: string): Record<string, any>;
    setItem(paramId: string, paramValue: Record<string, any>): void;
    removeItem(paramId: string): boolean;
}