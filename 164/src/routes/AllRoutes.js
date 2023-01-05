import { Routes, Route } from "react-router-dom";
import { HomePage, CreatePost, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="create" element={ <CreatePost /> } />
            <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    </main>
  )
}
