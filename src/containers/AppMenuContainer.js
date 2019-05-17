import AppMenu from '../views/appMenu/AppMenu'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
    isAuth: state.appMenuReducer.isAuth,
    email: state.loginReducer.email,
});

const mapDispatchToProps = (dispatch) => ({dispatch});


const AppMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppMenu);

export default AppMenuContainer;