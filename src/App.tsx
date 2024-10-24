import { Toaster } from "react-hot-toast";
import { TfiReload } from "react-icons/tfi";
import MarkCreate from "./components/MarkCreate";
import SearchBar from "./components/SearchBar";
import SectionBookmark from "./components/SectionBookmark";
import { AllBookmarks } from "./data/MyBookMarks";
import { useGetWallpaper } from "./hooks/useGetWallpaper";

function App() {
  const { wallpaper, getNewWallpaper } = useGetWallpaper();

  return (
    <main
      className="w-vw min-h-dvh bg-cover bg-center bg-no-repeat p-8 pb-1"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <SearchBar />
      <div className="gap-4 flex flex-wrap justify-center">
        {AllBookmarks.map((x) => (
          <SectionBookmark key={x.title} title={x.title} data={x.data} />
        ))}
      </div>
      <div>
        <Toaster position="bottom-right" />
      </div>
      <MarkCreate />
      <button
        className="fixed bottom-4 left-4"
        onClick={() => getNewWallpaper()}
      >
        <TfiReload />
      </button>
    </main>
  );
}

export default App;
