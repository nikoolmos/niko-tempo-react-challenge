import { LocalStorageRepository } from "../interfaces/LocalStorageRepository";

export class LocalStorageRepositoryImpl implements LocalStorageRepository {
    getItem(paramId: string): Record<string, any> {
        this.checkIfLocalStorageIsAvailable();

        const resultAsString = globalThis.localStorage.getItem(paramId);

        if(!resultAsString) {
            throw new Error("Value is missing from LocalStorage");
        }

        const result = JSON.parse(resultAsString);

        return { id: paramId, value: result };
    }

    setItem(paramId: string, paramValue: Record<string, any>): void {
        this.checkIfLocalStorageIsAvailable();

        const dataAsString = JSON.stringify(paramValue);
        globalThis.localStorage.setItem(paramId, dataAsString);
    }

    checkIfLocalStorageIsAvailable() {
        if(!globalThis.localStorage) {
            throw new Error("LocalStorage is not available.");
        }
    }
}