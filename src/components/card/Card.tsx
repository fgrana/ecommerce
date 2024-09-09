import React from "react";

export class Card extends React.Component{
    render(){
        return(
        <>
            <div className="card" style={{width: "12rem", height: "20rem"}}>
                <div className="card-body">
                <img className="card-img-top" style={{width: "8rem", height: "10rem"}} src="src/assets/006.png"></img>
                <h3 className="card-title">{this.props.name}</h3>
                <table>
                    <tr>
                        <th>atk: {this.props.atk}</th>
                        <th>def: {this.props.def}</th>
                    </tr>
                    <tr>
                        <th>spd: {this.props.spd}</th>
                        <th>lif: {this.props.lif}</th>
                    </tr>
                    <tr>
                        <a href="#" class="btn btn-primary">Go</a>
                        <a href="#" class="btn btn-primary">Not</a>
                    </tr>
                </table>
            </div>
            </div>
        </>
        )
    }
}