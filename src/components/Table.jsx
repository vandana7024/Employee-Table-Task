import React from "react";

function Table({ heading = [], data = [] }) {
  return (
    <>
      <div class=" h-full md:h-96 w-full object-contain overflow-auto relative flex justify-center items-start">
        <table class="border border-blue-500 ">
          <thead className="sticky top-0 text-white">
            <tr class="bg-blue-500 text-center ">
              {heading?.map((heading, index) => (
                <th
                  key={index}
                  className="px-10 py-2 text-white text-sm font-medium"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-y-auto bg-white  ">
            {data?.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b-2 border-gray-200 "
                style={{ height: "20px" }}
              >
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.age}</td>
                <td className="border px-4 py-2">{item.position}</td>
                <td className="border px-4 py-2">{item.address}</td>
                <td className="border px-4 py-2">{item.qualifications}</td>
                <td className="border px-4 py-2">{item.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
