import styles from "./Student.module.css";
import PropTypes from "prop-types";

function Student(props) {
  const { student, p } = styles;
  return (
    <div className={student}>
      <p className={p}>Name: {props.name}</p>
      <p className={p}>Age: {props.age}</p>
      <p className={p}>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
