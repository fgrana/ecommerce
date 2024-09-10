import './Card.css';
import { CardClass } from '../../../util/Card';

export function Card(props:CardClass) {
  return (
    <div className="card">
      <div className="card-body">
        <img className="card-img-top" src="src/assets/006.png" alt="Charizard" />
        <h3 className="card-title">{props.name}</h3>
        <table>
          <tbody>
            <tr>
              <th>atk: {props.atk}</th>
              <th>def: {props.def}</th>
            </tr>
            <tr>
              <th>spd: {props.spd}</th>
              <th>lif: {props.lif}</th>
            </tr>
            <tr>
              <a href="#" className="btn btn-primary">Go</a>
              <a href="#" className="btn btn-primary">Not</a>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
