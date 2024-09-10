import CardList from "../../components/card/Cards";
import { CardClass } from "../../util/Card";

export default function Body(){

  const charizardCard = new CardClass("Charizard", 15, 15, 15, 15);
const ListC = [[charizardCard,charizardCard,charizardCard,charizardCard],
[charizardCard,charizardCard,charizardCard,charizardCard],
[charizardCard,charizardCard,charizardCard,charizardCard],
[charizardCard,charizardCard,charizardCard,charizardCard]]

  const pokemonList = ListC.map((crd) => {
    return <CardList {...crd} />;})

  return( <table>
    <tbody>
        {pokemonList}
    </tbody>
  </table> );


}