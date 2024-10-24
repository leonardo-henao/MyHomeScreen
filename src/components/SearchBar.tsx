import { Tooltip } from "@mui/material";
import { FormEvent } from "react";
import { CiSearch } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { slopPropTooltip } from "../helpers/DefaultsMaterial";

const SearchBar = () => {
  const actionFormSearch = (action: FormEvent) => {
    action.preventDefault();

    const form = new FormData(action.currentTarget as HTMLFormElement);
    const valueQuery = form.get("q");

    if (valueQuery == null || valueQuery.toString().length < 1) return;

    location.href = `https://www.google.com/search?q=${valueQuery}`;
  };

  return (
    <>
      <form className="flex justify-center mb-4" onSubmit={actionFormSearch}>
        <div className="flex items-center gap-2  py-2 px-4 rounded-md backdrop-blur-sm bg-black/10">
          <FaGoogle />

          <input
            className="text-[1rem] p-1 rounded-md text-gray-800  outline-none"
            type="text"
            name="q"
            placeholder="Search..."
            autoFocus={true}
            aria-label="Search Google"
          />
          <Tooltip
            title="Search with Google"
            arrow={true}
            followCursor={true}
            slotProps={slopPropTooltip}
          >
            <button type="submit">
              <CiSearch />
            </button>
          </Tooltip>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
