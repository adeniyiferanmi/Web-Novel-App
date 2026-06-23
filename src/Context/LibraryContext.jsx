import { createContext, useState } from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";

export const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
  const BaseUrl = import.meta.env.VITE_API_URL;
  const [addingToLibrary, setAddingToLibrary] = useState(false);
  const [libraryData, setLibraryData] = useState(null);
  const [userLibraryData, setUserLibraryData] = useState(null);

  const addLibrary = async (novelId) => {
    const token = Cookies.get("token");
    try {
      setAddingToLibrary(true);
      const res = await fetch(`${BaseUrl}/library`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ novelId }),
      });
      const response = await res.json();
      console.log(response);

      if (res.ok) {
        setLibraryData(response.data);
        await getLibraryNovels();
        toast.success("novel added to Library successfully");
      } else {
        toast.error("Unable to add novel");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setAddingToLibrary(false);
    }
  };

  const getLibraryNovels = async () => {
    const token = Cookies.get("token");
    try {
      const res = await fetch(`${BaseUrl}/library`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      if (res.ok) {
        setUserLibraryData(response.data);
      } else {
        toast.error("Unable to get data");
      }
    } catch (error) {
      console.log(error);
      toast.error("SOmething went wrong");
    }
  };

  const removeFromLibrary = async (novelId) => {
    const token = Cookies.get("token");
    try {
      const res = await fetch(`${BaseUrl}/library/${novelId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      if (res.ok) {
        setUserLibraryData(response.data);
        toast.success("Novel removed from library");
      } else {
        toast.error("Unable to remove novel");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const value = {
    addLibrary,
    getLibraryNovels,
    removeFromLibrary,
    libraryData,
    addingToLibrary,
    userLibraryData,
  };
  return (
    <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
  );
};
export default LibraryProvider;
