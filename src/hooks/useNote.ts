import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
    const [note, setNote] = useState<Note>();
    const [retrieveNote, setRetrieveNote] = useState<boolean>(false);

     useEffect(() => {
        const result = service.current.readNote(paramId);

        // TODO: check this logic and use case.
        if (!result.value) {
            setError(true);
        }

        setNote(result.value);

    }, [paramId, retrieveNote]);

    const updateNote = useCallback((value: Note) => {
        service.current.updateNote(paramId, value);
        setRetrieveNote(!retrieveNote)
    }, [paramId, setRetrieveNote, retrieveNote]);


    return {
        id: note?.id,
        note,
        updateNote
    }
}