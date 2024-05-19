import { IBookmark } from '../interfaces/IBookmark';
import ButtonBookmark from './ButtonBookmark';

interface IProp {
  title: string;
  data: IBookmark[];
}
const SectionBookmark = ({ data, title }: IProp) => {
  return (
    <div className="bg-black/10 p-4 rounded-2xl w-[90%] md:w-[70%] mx-auto mb-4 backdrop-blur-sm">
      <h1 className="text-3xl font-bold poetsen-one">{title}</h1>
      <div className="flex gap-4 justify-center flex-wrap">
        {data.map((x) => (
          <ButtonBookmark key={x.name} data={x} />
        ))}
      </div>
    </div>
  );
};

export default SectionBookmark;
