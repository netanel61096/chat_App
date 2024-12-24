import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../services/authApi";
import { jwtDecode } from "jwt-decode";
import styles from './UserSearch.module.css'


const UserSearch = ({ onUserSelect ,existingChats}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); 
  const [isFocused, setIsFocused] = useState(false); 
  const [error, setError] = useState(null);

  const getLoggedInUserId = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    try {
      const decoded = jwtDecode(token); 
      return decoded.id;
    } catch (error) {
      console.error("Failed to decode token:", error);
      return null;
    }
  };

  const loggedInUserId = getLoggedInUserId();
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const users = await fetchUsers(); 


        const filteredUsers = users.filter(
          (user) =>
            user._id !== loggedInUserId &&
            !existingChats.some((chat) => chat.userId === user._id)
        );
        

        setAllUsers(filteredUsers); 
        setFilteredUsers(filteredUsers);
        setError(null); 
      } catch (err) {
        setError(err.message || "Failed to fetch users");
      }
    };

    loadUsers();
  }, [loggedInUserId,existingChats]); 

  const handleSearch = (term) => {
    setSearchTerm(term);

    const filtered = allUsers.filter((user) =>
      user.username.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for users..."
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)} 
        className={styles.input}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {isFocused && filteredUsers.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "40px",
            left: 0,
            right: 0,
            backgroundColor: "white",
            listStyle: "none",
            padding: 0,
            margin: 0,
            border: "1px solid #ccc",
            borderRadius: "5px",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
          {filteredUsers.map((user) => (
            <li
              key={user._id}
              onMouseDown={(e) => e.preventDefault()} 
              onClick={() => onUserSelect(user)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              {user.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserSearch;
