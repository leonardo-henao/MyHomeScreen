import { Tooltip } from "@mui/material";
import { IBookmark } from "../interfaces/IBookmark";
import { slopPropTooltip } from "../helpers/DefaultsMaterial";

type IProp = {
  data: IBookmark;
};

const ButtonBookmark = ({ data }: IProp) => {
  return (
    <Tooltip
      title={data.name}
      arrow={true}
      followCursor={true}
      slotProps={slopPropTooltip}
    >
      <a
        className="flex flex-col items-center justify-center size-20 overflow-ellipsis relative group/button *:transition-all tex"
        key={data.name}
        href={data.url}
        rel="noreferrer"
        aria-label={data.name}
      >
        <div className="absolute top-0 right-0 size-3 bg-green-800 rounded-full opacity-0 group-hover/button:opacity-100 group-hover/button:animate-ping"></div>
        <img
          className="size-9 rounded-md group-hover/button:size-12"
          src={data.img}
          alt={`Icon ${data.name}`}
        />
        <span className="opacity-90 font-semibold text-xs text-center line-clamp-1 block overflow-ellipsis w-20 h-4 leading-4 group-hover/button:hidden mt-1">
          {data.name}
        </span>
      </a>
    </Tooltip>
  );
};

export default ButtonBookmark;
