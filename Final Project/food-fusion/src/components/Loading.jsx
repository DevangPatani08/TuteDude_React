import { Spinner } from 'react-bootstrap';

function Loading() {
  return (
    <div className="text-center my-5 py-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="mt-3">Loading delicious food...</p>
    </div>
  );
}

export default Loading;