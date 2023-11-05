import React from "react";

const headerphase = () => {
  return (
    <div className="fixed h-[90px] w-full bg-white border-b">
      <div className="ml-[250px] justify-between flex h-full">
        <h1 className="flex items-center text-[35px] font-bold ml-24">
          Define
        </h1>
        <div className="flex">
          <div className="flex items-center">
            <form className="w-[380px] mr-10">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-[#F7FAFC] focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-[#001F3E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center space-x-4 mr-8">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
              <span className="font-medium text-gray-600">AM</span>
            </div>
            <div className="font-medium">
              <div>Ardan Min</div>
              <div className="text-sm text-gray-500">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default headerphase;
