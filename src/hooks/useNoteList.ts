import { useCallback, useEffect, useRef, useState } from "react";
import { UseNoteListHook } from "../interfaces/hooks/UseNoteListHook";
import { Position } from "../interfaces/NoteListService";
import { NoteListServiceFactory } from "../utils/NoteListServiceFactory";
import { Colors } from "../interfaces/colors";

export const useNoteList: UseNoteListHook = () => {
    const service = useRef(NoteListServiceFactory.build());
    const [retrieveList, setRetrieveList] = useState(false);
    const [noteList, setNoteList] = useState<Array<string>>([]);
    const [ colorToSet, setColorToSet ] = useState<Colors>();

    useEffect(()=> {
        const list = service.current.getNoteList();

        setNoteList(list);
    }, [retrieveList]);

    const removeNote = useCallback((paramId: string) => {
        const removedNoteId = service.current.removeNote(paramId);
        const list = noteList.filter(noteId => noteId !== paramId);
        setNoteList(list);

        return removedNoteId;
    }, [setNoteList, noteList]);

    const addNewNote = useCallback((paramPosition: Position) => {
        const newNoteId = service.current.addNote(paramPosition);

        setRetrieveList(!retrieveList);

        return newNoteId;
    }, [setRetrieveList, retrieveList, noteList]);

    const setColor = (paramColor: Colors) => {
        setColorToSet(paramColor);
    }

    return {
        addNewNote,
        noteList,
        removeNote,
        setColor,
        colorToSet
    };
}