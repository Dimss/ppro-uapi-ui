import Roles from '../views/roles/Roles'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
        sankeyData: state.rolesReducer.sankeyData
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});


const RolesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Roles);

export default RolesContainer;