import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../features/usersSlice";
import type { AppDispatch, RootState } from "../../../store/store";
import Button from "../../atoms/Button/Button";

function UserPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { result, isLoading, error } = useSelector((state: RootState) => state.users);
  const [page, setPage] = useState(1);
  const pageSize = 3;
  const paging = result?.paging;
  const currentPage = paging?.currentPage ?? page;

  useEffect(() => {
    void dispatch(fetchUsers({ page, size: pageSize, sortBy: "name", direction: "asc" }));
  }, [dispatch, page]);

  const users = result?.data ?? [];

  return <section>
    <h1 className="text-2xl font-bold text-slate-900">Users</h1>
    {error ? <p role="alert" className="mt-6 text-sm text-red-600">{error}</p> : null}
    <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600"><tr><th className="px-4 py-3">Name</th><th className="px-4 py-3">Username</th><th className="px-4 py-3">Email</th><th className="px-4 py-3">Role</th></tr></thead>
        <tbody>{isLoading ? <tr><td colSpan={4} className="px-4 py-6 text-slate-500">Loading users...</td></tr> : users.length ? users.map((user) => <tr key={user.id} className="border-t border-slate-100"><td className="px-4 py-3">{user.name}</td><td className="px-4 py-3">{user.username}</td><td className="px-4 py-3">{user.email}</td><td className="px-4 py-3">{user.userRole}</td></tr>) : <tr><td colSpan={4} className="px-4 py-6 text-slate-500">User tidak ditemukan</td></tr>}</tbody>
      </table>
    </div>
    <div className="mt-4 flex items-center gap-3">
      <Button disabled={isLoading || !paging?.hasPrevious} onClick={() => setPage(currentPage - 1)}>Previous</Button>
      <span aria-live="polite" className="text-sm text-slate-600">Page {currentPage}{paging ? ` of ${paging.totalPage} · ${paging.totalElements} users` : ""}</span>
      <Button disabled={isLoading || !paging?.hasNext} onClick={() => setPage(currentPage + 1)}>Next</Button>
    </div>
  </section>;
}

export default UserPage;
