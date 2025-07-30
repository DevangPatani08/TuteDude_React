import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes on shelf - {props.numOfCakes}</h2>
            <button type="button" className="btn btn-md btn-primary" onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: () => {dispatch(buyCake())}
    });
};

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);