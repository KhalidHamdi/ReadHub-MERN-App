
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AdminLogin } from "./components/Admin/AdminLogin";
import { AdminPanel } from "./components/Admin/AdminPanal";
import AdminBooks from "./components/Admin/AdminBooks";
import AdminCategory from "./components/Admin/adminCategory";
import AdminAuthor from "./components/Admin/adminAuthor";
import Home from "./pages/Home";
import BookList from "./components/Book/BookList";
import AuthorList from "./components/Author/AuthorList";
import CategoryList from "./components/Category/CategoryList";

function App() {
  const { authState } = useSelector((state: RootState) => state.DataReducer);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return sessionStorage.getItem("admin") === "true";
  });

  const handleLoginSuccess = (admin: boolean) => {
    setIsAdmin(admin);

    window.location.href = "/admin/category";
  };

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route
          path="/admin"
          element={<AdminLogin onLoginSuccess={handleLoginSuccess} />}
        />

        <Route path="/books" element={<BookList />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/admin/books" element={<AdminBooks />} />
        <Route path="/admin/category" element={<AdminCategory />} />
        <Route path="/admin/author" element={<AdminAuthor />} />
        <Route
          path="/admin/*"
          element={isAdmin ? <AdminPanel /> : <Navigate to="/admin" />}
        />

      </Routes>
    </Router>
  );
}

export default App;
