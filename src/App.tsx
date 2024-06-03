import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookSearchPage from "./components/BookSearchPage";
import BookshelfPage from "./components/BookShelfPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-slate-100 ">
        <nav className="max-w-full bg-violet-500 ">
          <ul className="flex gap-10 p-10 justify-around text-xl font-semibold uppercase">
            <li>
              <Link to="/" className="hover:text-white">
                Book Search
              </Link>
            </li>
            <li>
              <Link to="/bookshelf" className="hover:text-white">
                My Bookshelf
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/bookshelf" element={<BookshelfPage />} />
          <Route path="/" element={<BookSearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
