import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="text-center my-5 py-5 loading-container">
      <Spinner animation="border" variant="danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="mt-3">Loading delicious food...</p>
    </div>
  );
};

export default Loading;