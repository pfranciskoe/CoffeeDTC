import { connect } from 'react-redux';
import { logout, createNewUser } from '../../actions/session';
import {openModal} from '../../actions/modal_actions'
import {openCart} from '../../actions/cart_actions'
import NavBar from './nav_bar';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal()),
    openCart: () => dispatch(openCart()),
    processForm: (user) => dispatch(createNewUser(user))    
});

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
