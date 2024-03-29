import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Arcive from "./pages/Arcive";
import Lectures from "./pages/Lectures";
import Book from "./pages/Book";
import RootLayout from "./components/RootLayout";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/filmer" element={<Movies />} />
        <Route path="/arkiv" element={<Arcive />} />
        <Route path="/forelasningar" element={<Lectures />} />
        <Route path="/boka" element={<Book />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
