import { Fragment } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokoyo", "London", "Paris"];

  items.map((items) => <li></li>);
  return (
    <Fragment>
      <ul className="list-group">
        {items.map((item) => (
          <li  className="list-group-item" key={item}>{items}</li>
        ))}
      </ul>
      <ul className="list-group">
        {items.map((item) => (
          <li  className="list-group-item"  key={item}>{items}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
