import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function NewItemContainer(props) {
    return (
        <div className="mt-2 mb-5">
            <h2>Item - {props.item}</h2>
            <button className="btn btn-md btn-primary" onClick={props.buyItem}>Buy Item</button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
    return ({
        item: itemState,
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunc = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());
    return ({
        buyItem: dispatchFunc
    });
};
export default connect(mapStateToProps,mapDispatchToProps) (NewItemContainer);