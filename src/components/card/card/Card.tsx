import "./Card.css";
import { CardClass } from "../../../util/Card";
import { Button } from "../../Button";

export function Card(props: CardClass) {
  return (
    <div className="card">
      <div className="card-body">
        <img
          className="card-img-top"
          src="src/assets/006.png"
          alt="Charizard"
        />
        <h5 className="card-title">{props.name}</h5>

        <th>atk: {props.atk} |</th>
        <th>def: {props.def}</th>
        <br />
        <th>spd: {props.spd} |</th>
        <th>lif: {props.lif}</th>
        <br />
        <Button text={"Go"} selected={true}></Button>
        <Button text={"Not"} selected={false}></Button>
      </div>
    </div>
  );
}
