import { Card } from "../../components/card/Card"
import { Pagination } from "../../components/pagination/Pagination"

export default function Body(){
    return (
    <>
    <div className="d-flex p-2">
        <table className="table">
            <thead>
            <tr>
                <th scope="col"><Card name="charizard" atk="15" def="15" spd="15" lif="30" /></th>
                <th scope="col"><Card name="charizard" atk="15" def="15" spd="15" lif="30" /></th>
                <th scope="col"><Card name="charizard" atk="15" def="15" spd="15" lif="30" /></th>
                <th scope="col"><Card name="charizard" atk="15" def="15" spd="15" lif="30" /></th>
            </tr>
            </thead>
            <thead>
            <tr>
                <th scope="col"><Card name="charizard" atk="15" def="15" spd="15" lif="30" /></th>
                <th scope="col"><Card name="charizard" atk="15" def="15" spd="15" lif="30" /></th>
                <th scope="col"><Card name="charizard" atk="15" def="15" spd="15" lif="30" /></th>
                <th scope="col"><Card name="charizard" atk="15" def="15" spd="15" lif="30" /></th>
            </tr>
            </thead>
        </table>
        </div>
        <Pagination />
    </>
    )
}