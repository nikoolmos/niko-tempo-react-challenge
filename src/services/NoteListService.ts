import { NoteListService, Position } from "../interfaces/NoteListService";
import { NotesService } from "../interfaces/NotesService";
import { Repository } from "../interfaces/Repository";
import { DefaultNoteDTO } from "../utils/DefaultNote";
import { NotesServiceImpl } from "./NotesService";

export class NoteListServiceImpl implements NoteListService {
    private repository: Repository;
    private NOTE_LIST_ID: string;
    private noteService: NotesService;

    constructor(paramRepository: Repository) {
        this.repository = paramRepository;
        this.NOTE_LIST_ID = 'NIKO_NOTE_LIST';
        this.noteService = new NotesServiceImpl(paramRepository);
    }

    addNote(paramPosition: Position): string {
        const newNoteId = globalThis.crypto.randomUUID();

        const myNewNote = new DefaultNoteDTO();

        myNewNote.id = newNoteId;
        myNewNote.position = paramPosition;

        const noteList = this.getNoteList()

        const newList = [...noteList, newNoteId];

        this.repository.setItem(this.NOTE_LIST_ID, { idList: newList });
        this.noteService.createNote(newNoteId, myNewNote);

        return newNoteId;
    }

    getNoteList(): Array<string> {
        const repositoryResult = this.repository.getItem(this.NOTE_LIST_ID);

        if (!repositoryResult.value) {
            throw new Error("Can't retrieve note list.");
        }

        return repositoryResult.value.idList;
    }

    removeNote(paramId: string): string {
        this.noteService.deleteNote(paramId);

        const noteList = this.getNoteList();

        const newList = noteList.filter(id => id !== paramId);

        this.repository.setItem(this.NOTE_LIST_ID, { idList: newList });

        return paramId;
    }

    init() {
        try {
            this.getNoteList()
        } catch {
            this.repository.setItem(this.NOTE_LIST_ID, { idList: [] });
        }
    }
}