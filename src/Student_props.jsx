// prop- passing value from parent component to the child component.
// propTypes- ensures that the passed value is the correct datatype.
// defaultProps- default values for props in case they are not passed from the parent component.

import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent? "Yes":"No"}</p>
        </div>
    );
}
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps={
    name: "Guest",
    age: 40,
    isStudent: false
}
export default Student;