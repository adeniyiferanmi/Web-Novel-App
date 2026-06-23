import React, { createContext, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { data, useNavigate } from "react-router-dom";

export const ChapterContext = createContext();

const ChapterProvider = ({ children }) => {
  const BaseUrl = import.meta.env.VITE_API_URL;
  const [addingChapter, setAddingChapter] = useState(false);
  const [chapterData, setChapterData] = useState(null);
  const [singleChapter, setSingleChapter] = useState(false);
  const [singleData, setSingleData] = useState(null);
  const [allChapter, setAllChapter] = useState(false);
  const [allChapterData, setAllChapterData] = useState(null);
  const [updatingChapter, setUpdatingChapter] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const navigate = useNavigate();

  const addChapters = async (novelId, data, onSuccess) => {
    console.log("novelId:", novelId);
    const token = Cookies.get("token");
    setAddingChapter(true);
    try {
      const res = await fetch(`${BaseUrl}/chapter/add-chapter/${novelId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      if (res.ok) {
        setChapterData(response.data);
        toast.success("Chapter Added Successfully");
        onSuccess();
      } else {
        toast.error("Unable to add chapter");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setAddingChapter(false);
    }
  };
  const getSingleChapter = async (chapterId) => {
    const token = Cookies.get("token");
    try {
      setSingleChapter(true);
      const res = await fetch(
        `${BaseUrl}/chapter/single-chapter/${chapterId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const response = await res.json();

      if (res.ok) {
        setSingleData(response.data);
      } else {
        toast.error("Unable to retrieve data");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setSingleChapter(false);
    }
  };
  const getAllChapter = async (novelId) => {
    const token = Cookies.get("token");
    try {
      setAllChapter(true);
      const res = await fetch(`${BaseUrl}/chapter/get-chapter/${novelId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await res.json();
      console.log(response.data);

      if (res.ok) {
        setAllChapterData(response.data);
      } else {
        toast.error("Unable to get chapters");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setAllChapter(false);
    }
  };
  const deleteChapter = async (chapterId) => {
    const token = Cookies.get("token");
    try {
      const res = await fetch(
        `${BaseUrl}/chapter/delete-chapter/${chapterId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const response = await res.json();
      if (res.ok) {
        setAllChapterData((prev) => prev.filter((ch) => ch._id !== chapterId));
        toast.success("Chapter deleted successfully");
        navigate(`/chapter/${singleData.novel}`);
      } else {
        toast.error("Unable to delete chapter");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const updateChapter = async (chapterId, data, onSuccess) => {
    const token = Cookies.get("token");
    try {
      setUpdatingChapter(true);
      const res = await fetch(
        `${BaseUrl}/chapter/update-chapter/${chapterId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      const response = await res.json();
      console.log(response);

      if (res.ok) {
        setAllChapterData((prev) =>
          Array.isArray(prev)
            ? prev.map((chapter) =>
                chapter._id === chapterId ? response.data : chapter,
              )
            : [response.data],
        );
        toast.success("Chapter Updated Successfully");
        onSuccess?.();
      } else {
        toast.error("Unable to Update chapter");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setUpdatingChapter(false);
    }
  };

  const value = {
    addChapters,
    getSingleChapter,
    getAllChapter,
    deleteChapter,
    updateChapter,
    addingChapter,
    chapterData,
    singleChapter,
    singleData,
    allChapter,
    allChapterData,
    updatingChapter,
    updateData,
  };

  return (
    <ChapterContext.Provider value={value}>{children}</ChapterContext.Provider>
  );
};

export default ChapterProvider;
