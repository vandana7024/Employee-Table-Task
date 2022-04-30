import React, { useState } from "react";
import Table from "../components/Table";
import { heading, data } from "../components/TableData";

function HomePage() {
  const [filterData, setFilterData] = useState(data);
  console.log(filterData, "k");
  const handleSearch = (e) => {
    const filtered = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.address.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilterData(filtered);
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center ">
      <div className=" sticky top-0">
        <div className="text-2xl font-semibold text-blue-500 p-4 ">
          <h1>List of Employee</h1>
        </div>

        <div className=" flex justify-center items-center">
          <input
            type="search"
            placeholder="Search by name or address"
            className="px-3 py-2 m-2"
            onChange={handleSearch}
          />
        </div>
        <div>
          <Table heading={heading} data={filterData} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
