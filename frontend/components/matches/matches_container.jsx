import { connect } from 'react-redux';
import { fetchDTCoffees } from '../../actions/dtcoffee_actions';
import { addItemToCart } from '../../actions/cart_actions'
import Matches from './matches';

const mapStateToProps = ({ session, entities: { users, coffees  } }) => {
    return {
        currentUser: users[session.id],
        coffees: coffees
    };
};

const mapDispatchToProps = dispatch => ({
    fetchDTCoffees:() => dispatch(fetchDTCoffees()),
    addItemToCart: (coffee_id, quantity) => dispatch(addItemToCart(coffee_id, quantity))
});


export default connect(mapStateToProps, mapDispatchToProps)(Matches);