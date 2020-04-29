import { connect } from 'react-redux';
import { logout, login } from '../../actions/session';
import {openModal} from '../../actions/modal_actions'
import NavBar from './nav_bar';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal()),
    processForm: (user) => dispatch(login(user))    
});

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);