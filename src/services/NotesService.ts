import { Note } from "../interfaces/Note";
import { NotesService } from "../interfaces/NotesService";
import { Repository } from "../interfaces/Repository";

export class NotesServiceImpl implements NotesService {
    private repository: Repository;

    constructor(paramRepository: Repository) {
        this.repository = paramRepository;
    }

    createNote(paramId: string, paramValues: Record<string, Note>): boolean {
        this.repository.setItem(paramId, paramValues);
        return true; //TODO: Check this.
    }

    deleteNote(paramId: string): boolean {
        throw new Error("FEATURE NOT IMPLEMENTED");
    }

    readAllNotes(): Array<{ id: string; value: Note; }> {
        throw new Error("FEATURE NOT IMPLEMENTED");
    }

    readNote(paramId: string): { id: string; value: Note; } {
        const result = this.repository.getItem(paramId);

        const myNote: Note = {
            color: result.color,
            content: result.content,
            id: result.id,
            position: result.position,
            size: result.size,
        };

        return {
            id: paramId,
            value: myNote,
        };
    }

    updateNote(paramId: string, paramNote: Note): boolean {
        this.repository.setItem(paramId, paramNote);

        return true; // TODO: Check this.
    }
}