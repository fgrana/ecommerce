import { Card } from "../../components/card/card/Card";
import { CardClass } from "../../util/Card";

export default function CardList(charizardCard: CardClass[]) {
  return (
    <tr>
      <th>
        <Card {...charizardCard[0]} />
      </th>
      <th>
        <Card {...charizardCard[1]} />
      </th>
      <th>
        <Card {...charizardCard[2]} />
      </th>
      <th>
        <Card {...charizardCard[3]} />
      </th>
    </tr>
  );
}
