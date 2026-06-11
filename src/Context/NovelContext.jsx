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
      console.log(response.data);
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
        setNovelData((prev) =>
          Array.isArray(prev)
            ? prev.map((novel) => (novel._id === id ? response.data : novel))
            : [response.data],
        );
        onSuccess();
        toast.success("Novel Updated Successfully");
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
  const value = {
    addNovel,
    getAuthorNovels,
    deleteNovel,
    updateNovel,
    getSingleNovel,
    datas,
    addingNovel,
    getAuthorNovel,
    novelData,
    updatingNovel,
    getNovel,
    singleData,
  };
  return (
    <NovelContext.Provider value={value}>{children}</NovelContext.Provider>
  );
};

export default NovelProvider;
