import Admin from '../views/admin/Admin'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
    users: state.adminReducer.users,
});

const mapDispatchToProps = (dispatch) => ({dispatch});

const AdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Admin);

export default AdminContainer;