import CardList from "../../components/card/Cards";
import { Pagination } from "../../components/pagination/Pagination";
import { CardClass, Post } from "../../util/Card";
import table from "./table.module.css";
import GetPokemon from "../../api/pokemon";


const POKEMON = "charizard"

export default function Body() {
  const posts = GetPokemon(POKEMON)
  const posts_1 = GetPokemon("blastoise")

  const charizardCard = new CardClass(posts!);
  const squirtleCard = new CardClass(posts_1!);
  const ListC = [
    [charizardCard, squirtleCard, charizardCard, charizardCard],
    [charizardCard, charizardCard, charizardCard, charizardCard],
    [charizardCard, charizardCard, charizardCard, charizardCard],
    [charizardCard, charizardCard, charizardCard, squirtleCard],
  ];
  

  const pokemonList = ListC.map((crd) => {
    return <CardList {...crd} />;
  });

  return (
    <>
    <div className={table.table}>
        {pokemonList}
      </div>
      <Pagination />
    </>
      
  );
}
