import { IBookmark } from '../interfaces/IBookmark';

interface IProp {
  data: IBookmark;
}

const ButtonBookmark = ({ data }: IProp) => {
  return (
    <a
      className="flex flex-col items-center justify-center size-20 overflow-ellipsis relative group/button *:transition-all"
      key={data.name}
      href={data.url}
      rel="noreferrer"
    >
      <div className="absolute top-0 right-0 size-3 bg-green-800 rounded-full opacity-0 group-hover/button:opacity-100 group-hover/button:animate-ping"></div>
      <img
        className="size-9 rounded-md group-hover/button:size-12"
        src={data.img}
        alt={`Icon ${data.name}`}
      />
      <span className="opacity-90 font-semibold text-xs text-center line-clamp-1 overflow-ellipsis group-hover/button:hidden">
        {data.name}
      </span>
    </a>
  );
};

export default ButtonBookmark;
