import type { User, UserSearchParams } from "../../types/user.types";
import { useState, useEffect } from "react";
import { getAllUsersWithPage } from "../../services/users.service";

function UserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [meta, setMeta] = useState<UserSearchParams>({
    page: 1,
    size: 3,
    sortBy: "name",
    direction: "asc",
  });
  // const [search, setSearch] = useState("");
  // const [sortBy, setSortBy] = useState("name");
  // const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const loadUsers = async () => {
    try {
      const query: UserSearchParams = {
        page: meta.page,
        size: meta.size,
        sortBy: meta.sortBy,
        direction: meta.direction,
      };

      const data = await getAllUsersWithPage(query);
      setUsers(data.data);

      setMeta({
        page: data.paging.currentPage,
        size: data.paging.size,
      });
    } catch (error) {
      console.log("error " + error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [meta.page, meta.sortBy, meta.direction]);

  return (
    <div>
      <h1 className="text-5xl bg-amber-950 text-amber-50">Page CRUD User</h1>
      <div>{JSON.stringify(users)}</div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          disabled={meta.page === 1}
          onClick={() => setMeta((prev) => ({ ...prev, page: prev.page! - 1 }))}
        >
          Prev
        </button>
        <p className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          halaman : {meta.page} / data : {meta.size} / sort by : {meta.sortBy} / direction : {meta.direction}
        </p>
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick={() => setMeta((prev) => ({ ...prev, page: prev.page! + 1 }))}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserPage;
