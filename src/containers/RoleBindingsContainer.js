import RoleBindings from '../views/rolesBindings/RoleBindings'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
    sankeyData: state.roleBindingsReducer.sankeyData
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});


const RoleBindingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RoleBindings);

export default RoleBindingsContainer;