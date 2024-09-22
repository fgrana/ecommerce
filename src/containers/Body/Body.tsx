import CardList from "../../components/card/Cards";
import { Pagination } from "../../components/pagination/Pagination";
import { CardClass } from "../../util/Card";
import body from "./body.module.css";

export default function Body() {
  
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
