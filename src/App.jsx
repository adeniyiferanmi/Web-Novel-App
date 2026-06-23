import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ContentProvider from "./Context/ContentContext";
import AuthProvider from "./Context/AuthContext";
import { Toaster } from "sonner";
import DashboardPage from "./components/DashboardPage";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import AuthorDashboardPage from "./components/AuthorDashboardPage";
import NovelProvider from "./Context/NovelContext";
import GetSinglePage from "./components/GetSinglePage";
import AuthorRoutes from "./Routes/AuthorRoutes";
import SelectProfile from "./components/SelectProfile";
import ChapterProvider from "./Context/ChapterContext";
import ChaptersPage from "./components/ChaptersPage";
import GetSingleChapters from "./components/GetSingleChapters";
import ReadNovel from "./components/ReadNovel";
import ReadChapter from "./components/ReadChapter";
import ReadersLibrary from "./components/ReadersLibrary";
import LibraryProvider from "./Context/LibraryContext";
import SearchResult from "./components/SearchResult";
import MyNovelsPage from "./components/MyNovelsPage";
import Authors from "./components/Authors";
import SingleAuthorPage from "./components/SingleAuthorPage";
import Genres from "./components/Genres";
import GenreNovels from "./components/GenreNovels";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        expand={false}
        richColors
        closeButton
        toastOptions={{
          style: {
            background: "#EEE9E1",
            border: "1px solid #E8B84B",
            color: "#2E2939",
            fontFamily: "serif",
            borderRadius: "12px",
            padding: "16px",
          },
          classNames: {
            title: "font-bold text-[1rem]",
            description: "text-[0.85rem] text-[#00000080]",
          },
        }}
      />
      <AuthProvider>
        <NovelProvider>
          <ChapterProvider>
            <LibraryProvider>
              <ContentProvider>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="/select-profile" element={<SelectProfile />} />

                  <Route element={<ProtectedRoutes />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/Read/:novelId" element={<ReadNovel />} />
                    <Route path="/library" element={<ReadersLibrary />} />
                    <Route path="/search" element={<SearchResult />} />
                    <Route
                      path="/read/:novelId/chapter/:chapterId"
                      element={<ReadChapter />}
                    />
                    <Route path="/library" element={<ReadersLibrary />} />
                    <Route path="/novels" element={<MyNovelsPage />} />
                    <Route path="/author" element={<Authors />} />
                    <Route
                      path="/author/:authorId"
                      element={<SingleAuthorPage />}
                    />
                    <Route path="/genre" element={<Genres />} />
                    <Route path="/genre/:genres" element={<GenreNovels />} />

                    <Route element={<AuthorRoutes />}>
                      <Route
                        path="/author-dashboard"
                        element={<AuthorDashboardPage />}
                      />
                      <Route
                        path="/author-dashboard/:id"
                        element={<GetSinglePage />}
                      />
                      <Route
                        path="/chapter/:novelId"
                        element={<ChaptersPage />}
                      />
                      <Route
                        path="/single-chapter/:chapterId"
                        element={<GetSingleChapters />}
                      />
                    </Route>
                  </Route>
                </Routes>
              </ContentProvider>
            </LibraryProvider>
          </ChapterProvider>
        </NovelProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
