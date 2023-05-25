import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UserCard, { UserCardProps } from "./components/UserCard";
import SearchInput from "./components/SearchInput";

interface SearchInputProps {
  display_name: string;
}

function App() {
  const [user, setUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    await axios
      .get(
        "https://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow"
      )
      .then((data) => {
        setLoading(false);
        setUser(data.data.items);
        setFilteredUsers(data.data.items);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleSearch = (query: string) => {
    if (query === "") {
      setFilteredUsers(user);
      return;
    }
    const filtered = filteredUsers.filter((element: SearchInputProps) =>
      element.display_name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Stack overflow User (20)</h2>
      <SearchInput onSearch={handleSearch} />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {filteredUsers.map((u) => {
            return <UserCard user={u} />;
          })}
          {/* {user.map((u) => {
            return <UserCard user={u} />;
          })} */}
        </div>
      )}
    </div>
  );
}

export default App;
