import Header from "./components/Header";
import MainContent from "./components/MainContent";

import { useState } from "react";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  const fetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    setAnimeList(temp.results);
  };

  return (
    <div>
      <Header />
      <MainContent
        handleSearch={handleSearch}
        search={search}
        animeList={animeList}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
