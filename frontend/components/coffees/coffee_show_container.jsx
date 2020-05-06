import { connect } from 'react-redux';
import { fetchDTCoffee } from '../../actions/dtcoffee_actions';
import { addItemToCart } from '../../actions/cart_actions';
import CoffeeShow from './coffee_show';

const mapStateToProps = ({ entities: { coffees } },ownProps) => {
    return {
        coffee: coffees[ownProps.match.params.id],
        ownProps: ownProps
    };
};

const mapDispatchToProps = dispatch => ({
    fetchDTCoffee: (coffeeId) => dispatch(fetchDTCoffee(coffeeId)),
    addItemToCart: (coffee_id, quantity) => dispatch(addItemToCart(coffee_id, quantity))

});

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeShow);