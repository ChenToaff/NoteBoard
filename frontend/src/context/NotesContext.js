import {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import useArray from "hooks/useArray";
import axiosInstance from "services/api";

export const notesContext = createContext();

export const NotesProvider = ({ children }) => {
  const notes = useArray([]);

  useEffect(() => {
    async function loadData() {
      const res = await axiosInstance.get("/notes");
      notes.set(res.data);
    }
    loadData();
  }, []);

  return (
    <notesContext.Provider value={notes}>{children}</notesContext.Provider>
  );
};
