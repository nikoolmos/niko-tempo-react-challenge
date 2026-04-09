import { useCallback, useMemo, useRef, useState } from "react";
import { UseNoteHook } from "../interfaces/UseNoteHook";
import { NotesServiceImpl as NotesService } from "../services/NotesService";
import { LocalStorageRepositoryImpl } from "../repositories/LocalStorageRepository";
import { Note } from "../interfaces/Note";


// TODO: move this to other file.
class NoteServiceFactory {
    public static build(): NotesService {
        const myLocalStorageRepository = new LocalStorageRepositoryImpl();
        const myNoteService = new NotesService(myLocalStorageRepository);

        return myNoteService;
    }
}

export const useNote: UseNoteHook = (paramId: string) => {
    // I decided to use a UseRef for this service cause I don't want to reinstance it on all the renders.
    const service = useRef(NoteServiceFactory.build());
    // TODO: check this logic and use case.
    const [error, setError] = useState(false);


    const note = useMemo(() => {
        const result = service.current.readNote(paramId);

        // TODO: check this logic and use case.
        if (!result.value) {
            setError(true);
        }
        return result.value;
    }, [paramId]);

    const updateNote = useCallback((value: Note) => {
        service.current.updateNote(paramId, value);
    }, [paramId]);


    return {
        id: note.id,
        note,
        updateNote
    }
}