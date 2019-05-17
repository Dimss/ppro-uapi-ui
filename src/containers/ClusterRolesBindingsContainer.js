import ClusterRolesBindings from '../views/clusterRolesBindings/ClusterRolesBindings'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
        sankeyData: state.clusterRolesBindingsReducer.sankeyData
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});


const ClusterRolesBindingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ClusterRolesBindings);

export default ClusterRolesBindingsContainer;