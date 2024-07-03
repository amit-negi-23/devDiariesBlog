import React, { useState } from "react";
import { useAppContext } from "../../contextApi/context";
import PaginationComponent from "./pagination";

function MyBlog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Adjust as needed

  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
    { id: 10, name: "Item 10" },
    { id: 11, name: "Item 11" },
    { id: 12, name: "Item 12" },
    { id: 13, name: "Item 13" },
    { id: 14, name: "Item 14" },
    { id: 15, name: "Item 15" },
    { id: 16, name: "Item 16" },
    { id: 17, name: "Item 17" },
    { id: 18, name: "Item 18" },
    { id: 19, name: "Item 19" },
    { id: 20, name: "Item 20" },
    { id: 21, name: "Item 21" },
    { id: 22, name: "Item 22" },
    { id: 23, name: "Item 23" },
    { id: 24, name: "Item 24" },
    { id: 25, name: "Item 25" },
    { id: 26, name: "Item 26" },
    { id: 27, name: "Item 27" },
    { id: 28, name: "Item 28" },
    { id: 29, name: "Item 29" },
    { id: 30, name: "Item 30" },
    // Add more items as needed
  ];

  // Get current items

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const {
    store: { user },
  } = useAppContext();
  console.log(user);
  return (
    <>
      {user != null ? (
        <div className="col-10 offset-1">
          <h1>My Blog Page </h1>
          <h3>
            This blog page belong to{" "}
            <i className=" text-danger">@{user.username}</i>
          </h3>
          <div className="container mt-5">
            {/* <h1>My Data List</h1> */}

            {currentItems.map((item) => (
              <div className="card mt-3 ">
                <div className="card-body">
                  <h5 className="card-title text-primary">{item.name} Blog</h5>
                </div>
              </div>
            ))}
          </div>
          <PaginationComponent
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          ;
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default MyBlog;
