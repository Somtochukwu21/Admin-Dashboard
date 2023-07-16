import { useUsers } from "../../../../Global/hooks/useUsers";
import { TextWrap } from "../../../../Global/TextWrap/TextWrap";
import { UsersTemplate } from "../UsersTemplate/UsersTemplate";

export const ActiveUsers = () => {
  const { data } = useUsers();

  return (
    <div className="mb-9">
      <TextWrap className="text-sm">Active Users</TextWrap>
      <div className="mt-4 space-y-2">
        {data?.map((user, i) => (
          <UsersTemplate src={user.displayName.charAt(0).toLocaleUpperCase()} name={user.displayName} key={i} />
        ))}
      </div>
    </div>
  );
};

// Try the pagination stuff
/*
import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: "John Doe", age: 32 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "David Johnson", age: 41 },
  { id: 4, name: "Sarah Davis", age: 28 },
  { id: 5, name: "Michael Brown", age: 35 },
  { id: 6, name: "Emily Wilson", age: 29 },
  { id: 7, name: "James Taylor", age: 37 },
  { id: 8, name: "Olivia Anderson", age: 24 },
  { id: 9, name: "Daniel Clark", age: 31 },
  { id: 10, name: "Sophia Hernandez", age: 26 },
  { id: 11, name: "Christopher Lee", age: 39 },
  { id: 12, name: "Ava Martinez", age: 27 },
  { id: 13, name: "Matthew Lewis", age: 33 },
  { id: 14, name: "Emma Young", age: 22 },
  { id: 15, name: "Andrew King", age: 34 },
  { id: 16, name: "Isabella Turner", age: 30 }
];

const TableWithPagination: React.FC = () => {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedUsers = users.slice(start, end);

  const totalPages = Math.ceil(users.length / pageSize);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <a
            key={pageNumber}
            href="#"
            className={pageNumber === currentPage ? "active" : ""}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TableWithPagination;
 */