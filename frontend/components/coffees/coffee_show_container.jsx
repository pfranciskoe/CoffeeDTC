import { connect } from 'react-redux';
import { fetchDTCoffee } from '../../actions/dtcoffee_actions';
import CoffeeShow from './coffee_show';

const mapStateToProps = ({ entities: { coffees } }) => {
    return {
        coffees: coffees
    };
};

const mapDispatchToProps = dispatch => ({
    fetchDTCoffee: (coffeeId) => dispatch(fetchDTCoffee(coffeeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeShow);