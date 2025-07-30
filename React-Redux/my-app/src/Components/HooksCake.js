import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

export default function HooksCake() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div className="mt-5">
            <h2>Hook Cake - {numOfCakes}</h2>
            <button type="button" className="btn btn-md btn-secondary" onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}