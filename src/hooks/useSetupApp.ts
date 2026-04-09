import { useEffect } from "react";
import { NoteListServiceFactory } from "../utils/NoteListServiceFactory";

export const useSetupApp = () => {

    useEffect(() => {
        const myService = NoteListServiceFactory.build();
        myService.init();
    }, []);
}