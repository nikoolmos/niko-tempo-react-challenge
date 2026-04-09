import { useCallback, useEffect, useRef, useState } from "react";
import { UseNoteListHook } from "../interfaces/hooks/UseNoteListHook";
import { Position } from "../interfaces/NoteListService";
import { NoteListServiceFactory } from "../utils/NoteListServiceFactory";

export const useNoteList: UseNoteListHook = () => {
    const service = useRef(NoteListServiceFactory.build());
    const [removeNoteSuccessToast, setRemoveSuccessToast] = useState(false);
    const [retrieveList, setRetrieveList] = useState(false);
    const [noteList, setNoteList] = useState<Array<string>>([]);

    useEffect(()=> {
        const list = service.current.getNoteList();

        setNoteList(list);
    }, [retrieveList]);

    const removeNote = useCallback((paramId: string) => {
        const removedNoteId = service.current.removeNote(paramId);

        setRemoveSuccessToast(true);

        return removedNoteId;
    }, []);

    const addNewNote = useCallback((paramPosition: Position) => {
        const newNoteId = service.current.addNote(paramPosition);

        setRetrieveList(!retrieveList);

        return newNoteId;
    }, [setRetrieveList, retrieveList]);

    return {
        addNewNote,
        noteList,
        removeNote,
        removeNoteSuccessToast
    };
}