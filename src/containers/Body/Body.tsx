import { useEffect, useState } from "react";
import CardList from "../../components/card/Cards";
import { Pagination } from "../../components/pagination/Pagination";
import { CardClass } from "../../util/Card";
import body from "./body.module.css";

const BASE_URL = 'https://pokeapi.co/api/v2/'


export interface Root {
  id: number
  name: string
  stats: Stat[]
}

export interface Stat {
  base_stat: number
  effort: number
  stat: Stat2
}
//---------------------------------------------------


export interface pokemonList{
  post: Post
}

export interface Post {
  name: string
  stats: Stat[]
}

export interface Stat {
  base_stat: number
  effort: number
  stat: Stat2
}

export interface Stat2 {
  name: string
  url: string
}

export default function Body() {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<Post>();
  useEffect(() => {
    const fetchPosts = async () => {
        const response = await fetch(`${BASE_URL}pokemon/ditto`,{
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

  
  console.log(posts?.name)
  const charizardCard = new CardClass("Charizard", 534, 78, 84, 78, 109, 85, 100);
  const SquirtleCard = new CardClass("Squirtle", 534, 78, 84, 78, 109, 85, 100);
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
