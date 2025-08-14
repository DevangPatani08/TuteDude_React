import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamContainer(props) {
    return (
        <div className="mt-5">
            <h2>Number of IceCream - {props.numOfIceCreams}</h2>
            <button type="button" className="btn btn-md btn-primary" onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return ({
        numOfIceCreams: state.iceCream.numOfIceCreams
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        buyIceCream: () => {dispatch(buyIceCream())}
    });
};

export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer);