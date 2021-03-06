import { useRef, useEffect } from "react";
import LoadingSpiner from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/hooks/use-http";
import { addComment } from "../../lib/lib/api";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);

  const { onSubmit } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onSubmit();
    }
  }, [status, error, onSubmit]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate

    const { quoteId } = props;
    const commentData = commentTextRef.current.value;

    sendRequest({ commentData, quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpiner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
