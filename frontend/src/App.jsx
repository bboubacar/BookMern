import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import { paths } from "./api/url";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path={`/${paths.bookPath}${paths.create}`}
                element={<CreateBook />}
            />
            <Route
                path={`/${paths.bookPath}${paths.details}:id`}
                element={<ShowBook />}
            />
            <Route
                path={`/${paths.bookPath}${paths.edit}:id`}
                element={<EditBook />}
            />
            <Route
                path={`/${paths.bookPath}${paths.delete}:id`}
                element={<DeleteBook />}
            />
        </Routes>
    );
}

export default App;
