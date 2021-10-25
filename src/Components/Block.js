import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";

function Block(props) {

    let style = {
        display:"inline-block",
        float:"left",
        height: "300px",
        width: "200px",
        borderStyle: "solid"
    }

    let funkoStyle = {
        display:"inline-block",
        height: "300px",
        width: "200px",
        borderStyle: "solid"
    }

    return(
            <Switch>
                <Route exact path={"/"}>
                    <NavLink to={"/" + props.data.name} style={{color:"black"}}>
                        <div className={"Block"} style={style}>
                            <img src={props.data.img} alt={"funko pop"}/>
                            <p>Name: {props.data.name}</p>
                            <p>Category: {props.data.category}</p>
                            <p>Value: {props.data.value}</p>
                        </div>
                    </NavLink>
                </Route>
                <Route path={"/" + props.data.name}>
                    <div className={"Funko"} style={funkoStyle}>
                        <img src={props.data.img} alt={"funko pop"}/>
                        <p>Name: {props.data.name}</p>
                        <p>Category: {props.data.category}</p>
                        <p>Value: {props.data.value}</p>
                    </div>
                    <br/>
                    <NavLink to={"/"}>Back</NavLink>
                </Route>
            </Switch>
    )
}

export default Block;