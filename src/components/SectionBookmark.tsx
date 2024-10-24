import { IBookmark } from "../interfaces/IBookmark";
import ButtonBookmark from "./ButtonBookmark";

type IProp = {
  title: string;
  data: IBookmark[];
};
const SectionBookmark = ({ data, title }: IProp) => {
  return (
    <div className="bg-black/10 p-4 rounded-2xl  mx-2  backdrop-blur-sm mr-auto relative overflow-hidden flex-grow">
      <h1 className="text-5xl font-bold poetsen-one title-bookmark opacity-50 absolute top-0">
        {title}
      </h1>
      <div className="flex gap-4 justify-center flex-wrap">
        {data.map((x) => (
          <ButtonBookmark key={x.name} data={x} />
        ))}
      </div>
    </div>
  );
};

export default SectionBookmark;
