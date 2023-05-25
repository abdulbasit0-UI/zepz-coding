import React, { useState } from "react";

type SearchInputProps = {
  onSearch: (val: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="col-md-4 my-4 text-center mx-auto">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <i className="fal fa-search"></i>
        </span>
        <input
          type="text"
          value={query}
          onChange={handleSearchInput}
          className="form-control"
          placeholder="Search Users"
          aria-label="search"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
};
export default SearchInput;
