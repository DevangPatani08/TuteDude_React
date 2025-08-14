import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);

    return (
        <div className="mt-5">
            <h2>Number of Cakes on shelf - {props.numOfCakes}</h2>
            <input type="text" className="m-5 " value={number} onChange={e => { setNumber(e.target.value) }} />
            <button type="button" className="btn btn-md btn-primary" onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return ({
        numOfCakes: state.cake.numOfCakes
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        buyCake: (number) => {dispatch(buyCake(number))}
    });
};

export default connect(mapStateToProps, mapDispatchToProps) (NewCakeContainer);