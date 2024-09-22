import { useEffect, useState } from "react";
import CardList from "../../components/card/Cards";
import { Pagination } from "../../components/pagination/Pagination";
import { CardClass } from "../../util/Card";
import body from "./body.module.css";

const BASE_URL = 'https://pokeapi.co/api/v2/'

interface Post {
  id: number
  name: string
  stats: Stat[]
}

interface Stat {
  base_stat: number
  effort: number
  stat: Stat2
}

interface Stat2 {
  name: string
  url: string
}

const pokemon = "charizard"

export default function Body() {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<Post>();
  useEffect(() => {
    const fetchPosts = async () => {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`,{
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
          , mode:'cors'}});
        const posts = (await response.json()) as Post;
        setPosts(posts);
    };

    fetchPosts();
  }, [page]);

  const charizardCard = new CardClass(posts!);
  const SquirtleCard = new CardClass(posts!);
  const ListC = [
    [charizardCard, SquirtleCard, charizardCard, charizardCard],
    [charizardCard, charizardCard, SquirtleCard, charizardCard],
    [charizardCard, charizardCard, charizardCard, charizardCard],
    [charizardCard, charizardCard, SquirtleCard, SquirtleCard],
  ];

  const pokemonList = ListC.map((crd) => {
    return <CardList {...crd} />;
  });

  return (
      <div className={body.body}>
        <table>
          <tbody>{pokemonList}</tbody>
        </table>
        <Pagination />
      </div>
  );
}
