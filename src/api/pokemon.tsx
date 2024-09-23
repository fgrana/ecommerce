import { useEffect, useState } from "react";
import { Post } from "../util/Card";

const BASE_URL = 'https://pokeapi.co/api/v2/'

export default function GetPokemon(pokemon:string){
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
  },);
  return posts
}