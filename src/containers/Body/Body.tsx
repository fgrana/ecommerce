import CardList from "../../components/card/Cards";
import { Pagination } from "../../components/pagination/Pagination";
import { CardClass } from "../../util/Card";

export default function Body() {
  const charizardCard = new CardClass("Charizard", 15, 15, 15, 15);
  const SquirtleCard = new CardClass("Squirtle", 15, 15, 15, 15);
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
    <>
      <table>
        <tbody>{pokemonList}</tbody>
      </table>
      <Pagination />
    </>
  );
}
