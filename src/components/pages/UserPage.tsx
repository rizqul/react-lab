import React from "react";
import type { User } from "../../types/user.types";
import { useState, useEffect } from "react";
import { getAllUsers } from "../../services/users.service";

function UserPage() {
  const [users, setUsers] = useState<User[]>([]);

  const loadTodos = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.log("error " + error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);
  return (
    <div>
      <h1 className="text-5xl bg-amber-950 text-amber-50">Page CRUD User</h1>
      <div>{JSON.stringify(users)}</div>
    </div>
  );
}

export default UserPage;
