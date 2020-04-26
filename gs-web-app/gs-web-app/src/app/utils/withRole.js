import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {makeSelectorUserRole} from "../state/selectors/user";

const mapStateToProps = createStructuredSelector({
  role: makeSelectorUserRole()
});

const withRole = WrappedComponent => {
  return connect(mapStateToProps)(WrappedComponent);
};

export default withRole;
