import ClusterRoles from '../views/clusterRoles/ClusterRoles'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
        sankeyData: state.clusterRolesReducer.sankeyData
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});


const ClusterRolesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ClusterRoles);

export default ClusterRolesContainer;