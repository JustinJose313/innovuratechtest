import { useState } from "react";

const data = [
  {
    name: "Location",
  },
  {
    name: "Industry",
  },
  {
    name: "Business Type",
  },
  {
    name: "Company Type",
  },
  {
    name: "Filter By High to Low",
  },
  {
    name: "Sort By",
  },
  {
    name: "Mubmer of Employees",
  },
];

const Sidebar = () => {
  const [location, setLocation] = useState("Location");

  const locationToggle = (e) => {
    if (location === e) {
      setLocation("");
    } else {
      setLocation(e);
    }
  };

  return (
    <div className="border border-gray-300 p-2 pb-6 lg:sticky top-4">
      <div className="flex font-semibold justify-between items-center">
        <p>Filters</p>
        <button className='underline'>Clear</button>
      </div>
      <div className="mt-4 space-y-4">
        {data.map((each) => {
          return (
            <div key={each.name}>
              <div
                onClick={() => locationToggle(each.name)}
                className="flex cursor-pointer font-semibold justify-between items-center"
              >
                <p>{each.name}</p>
                <svg
                  className="text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              {location === each.name && (
                <div className="py-4 space-y-2">
                  <div>
                    <label for="email" className="sr-only">
                      Search
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="off"
                        className="focus:ring-blue-50 border-gray-300 block w-full pl-10 py-2 sm:text-sm"
                        placeholder={each.name}
                      />
                    </div>
                  </div>
                  <div className="bg-blue-100 cursor-pointer text-blue-500 hover:text-blue-700 p-2 flex items-center justify-between">
                    <span>Mumbai</span>
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="bg-blue-100 cursor-pointer text-blue-500 hover:text-blue-700 p-2 flex items-center justify-between">
                    <span>Kolkata</span>
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="bg-blue-100 cursor-pointer text-blue-500 hover:text-blue-700 p-2 flex items-center justify-between">
                    <span>Delhi</span>
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
