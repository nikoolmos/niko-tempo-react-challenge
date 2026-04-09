import { LocalStorageRepositoryImpl as LocalStorageRepository } from "../repositories/LocalStorageRepository";
import { NoteListServiceImpl as NoteListService } from "../services/NoteListService";

export class NoteListServiceFactory {
    public static build() {
        const myRepository = new LocalStorageRepository();
        const myNoteListService = new NoteListService(myRepository);
        return myNoteListService;
    }
}