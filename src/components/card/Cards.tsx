import { Card } from "../../components/card/card/Card";
import { CardClass } from "../../util/Card";

export default function CardList(charizardCard: CardClass[]) {
  return (
<>
        <Card {...charizardCard[0]} />

        <Card {...charizardCard[1]} />

        <Card {...charizardCard[2]} />

        <Card {...charizardCard[3]} />
</>
  );
}
