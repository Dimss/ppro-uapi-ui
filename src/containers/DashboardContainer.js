import Dashboard from '../views/dashboard/Dashboard'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});


const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);

export default DashboardContainer;