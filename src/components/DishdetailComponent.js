import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments != null) {
    let options = { year: "numeric", month: "short", day: "numeric" };
    return comments.map((comment) => (
      <ul key={comment.id} className="list-unstyled">
        <li className="mb-2">{comment.comment}</li>
        <li>
          -- {comment.author}{" "}
          {new Intl.DateTimeFormat("en-US", options).format(
            new Date(Date.parse(comment.date))
          )}
        </li>
      </ul>
    ));
  } else return <div />;
}

const Dishdetail = (props) => {
  const dish = props.dish;
  if (dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={dish} />
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <RenderComments comments={dish.comments} />
          </div>
        </div>
      </div>
    );
  } else return <div />;
};

export default Dishdetail;
