import React, { createContext, useState } from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

export const NovelContext = createContext();
const NovelProvider = ({ children }) => {
  const BaseUrl = import.meta.env.VITE_API_URL;
  const [addingNovel, setAddingNovel] = useState(false);
  const [getAuthorNovel, setGetAuthorNovel] = useState(false);
  const [datas, setData] = useState(null);
  const [novelData, setNovelData] = useState(null);
  const [updatingNovel, setUpdatingNovel] = useState(false);
  const [getNovel, setGetNovel] = useState(false);
  const [singleData, setSingleData] = useState(null);
  const [allNovels, setAllNovels] = useState(null);
  const [gettingReadersNovel, SetGettingReadersNovel] = useState(false);
  const [readersNovelData, setReadersNovelData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [gettingGenre, setGettingGenre] = useState(false);
  const [getGenreData, setGetGenreData] = useState(null);
  const { id } = useParams();

  const addNovel = async (data) => {
    const token = Cookies.get("token");

    const formData = new FormData();
    formData.append("novelTitle", data.novelTitle);
    formData.append("genres", data.genres);
    formData.append("synopsis", data.synopsis);
    formData.append("coverImage", data.coverImage);

    setAddingNovel(true);
    try {
      const res = await fetch(`${BaseUrl}/novel/addnovel`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const response = await res.json();
      console.log("response:", response);
      if (res.ok) {
        setData(response.data);

        toast.success("Novel Added Successfully");
      } else {
        toast.error("Unable to add Novel");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setAddingNovel(false);
    }
  };

  const getAuthorNovels = async () => {
    const token = Cookies.get("token");

    setGetAuthorNovel(true);
    try {
      const res = await fetch(`${BaseUrl}/novel/author-novel`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await res.json();
      if (res.ok) {
        setNovelData(response.data);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setGetAuthorNovel(false);
    }
  };

  const deleteNovel = async (id) => {
    const token = Cookies.get("token");
    try {
      const res = await fetch(`${BaseUrl}/novel/delete-novel/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await res.json();
      if (res.ok) {
        setNovelData((prev) =>
          Array.isArray(prev) ? prev.filter((novel) => novel._id !== id) : [],
        );
        toast.success("Novel deleted successfully");
      } else {
        toast.error(response.message || "Unable to delete Novel");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const updateNovel = async (id, data, onSuccess) => {
    const token = Cookies.get("token");
    const formData = new FormData();
    formData.append("novelTitle", data.novelTitle);
    formData.append("genres", data.genres);
    formData.append("synopsis", data.synopsis);
    formData.append("status", data.status);
    if (data.coverImage instanceof File) {
      formData.append("coverImage", data.coverImage);
    }
    setUpdatingNovel(true);

    try {
      const res = await fetch(`${BaseUrl}/novel/update-novel/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const response = await res.json();
      if (res.ok) {
        const updatedNovel = response.data;
        setSingleData(updatedNovel);
        setNovelData((prev) =>
          Array.isArray(prev)
            ? prev.map((novel) =>
                novel._id === updatedNovel._id ? updatedNovel : novel,
              )
            : [updatedNovel],
        );
        toast.success("Novel Updated Successfully");
        onSuccess?.();
      } else {
        toast.error(response.message || "Unable to update");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setUpdatingNovel(false);
    }
  };
  const getSingleNovel = async (id) => {
    const token = Cookies.get("token");
    setGetNovel(true);
    try {
      const res = await fetch(`${BaseUrl}/novel/single-novel/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await res.json();
      if (res.ok) {
        setSingleData(response.data);
        console.log(response.data);
      } else {
        toast("Unable to get novel");
      }
    } catch (error) {
      console.log(error);
      toast("Something went wrong");
    } finally {
      setGetNovel(false);
    }
  };
  const getAllNovel = async () => {
    try {
      const res = await fetch(`${BaseUrl}/novel/get-novel`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      console.log(response.data);

      if (res.ok) {
        setAllNovels(response.data);
        console.log(allNovels);
      } else {
        toast.error("Unable to get novels");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const getReadersNovelToRead = async (novelId) => {
    const token = Cookies.get("token");
    try {
      SetGettingReadersNovel(true);
      const res = await fetch(`${BaseUrl}/novel/read/${novelId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      console.log(response);

      if (res.ok) {
        setReadersNovelData(response.data);
      } else {
        toast.error("unable to get novel");
      }
    } catch (error) {
      console.log(error);
      toast.error("Somethin went wrong");
    } finally {
      SetGettingReadersNovel(false);
    }
  };
  const searchNovels = async (query) => {
    const token = Cookies.get("token");
    try {
      setSearching(true);
      const res = await fetch(
        `${BaseUrl}/novel/search?query=${encodeURIComponent(query)}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const response = await res.json();
      if (res.ok) {
        setSearchResults(response.data);
      } else {
        toast.error("Novel not found");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setSearching(false);
    }
  };
  const getGenres = async (genres) => {
    const token = Cookies.get("token");
    try {
      setGettingGenre(true);
      const res = await fetch(`${BaseUrl}/novel/get-genre/${genres}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await res.json();
      if (res.ok) {
        setGetGenreData(response.data);
      } else {
        toast.error(response.message || "Unable to get novels");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setGettingGenre(false);
    }
  };
  const value = {
    addNovel,
    getAuthorNovels,
    deleteNovel,
    updateNovel,
    getSingleNovel,
    getAllNovel,
    getReadersNovelToRead,
    searchNovels,
    setSearchTerm,
    getGenres,
    datas,
    addingNovel,
    getAuthorNovel,
    novelData,
    updatingNovel,
    getNovel,
    singleData,
    allNovels,
    readersNovelData,
    gettingReadersNovel,
    searchResults,
    searching,
    searchTerm,
    gettingGenre,
    getGenreData,
  };
  return (
    <NovelContext.Provider value={value}>{children}</NovelContext.Provider>
  );
};

export default NovelProvider;
