import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { Button } from 'react-bootstrap';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    }));
  };

  const handleRemove = () => {
    if (item.quantity > 1) {
      dispatch(cartActions.removeItem(item.id));
    } else {
      dispatch(cartActions.removeItemCompletely(item.id));
    }
  };

  return (
    <div className='cart-item p-3 mb-3 bg-white rounded shadow-sm'>
      <div className="d-flex align-items-start gap-3">
        <img src={item.image} alt={item.name} className='rounded' style={{ width: '80px', height: '80px', objectFit: 'cover', border: '1px solid #eee' }} />
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className='mb-1 fw-semibold'>{item.name}</h5>
              <p className="text-muted mb-2">${item.price.toFixed(2)} each</p>
            </div>
            <Button variant='link' className='text-danger p-0' onClick={() => dispatch(cartActions.removeItemCompletely(item.id))}>Remove</Button>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-2">
            <div className="quantity-control d-flex align-items-center">
              <Button variant='outline-danger' size='sm' className='px-3 py-1' onClick={handleRemove}>
                -
              </Button>
              <span className='mx-3 fw-bold'>{item.quantity}</span>
              <Button variant='outline-danger' size='sm' className='px-3 py-1' onClick={handleAdd}>
                +
              </Button>
            </div>

            <div className="text-end">
              <span className='fw-bold'>${item.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;