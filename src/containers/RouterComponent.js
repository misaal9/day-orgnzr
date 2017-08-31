import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAddItemToCategoryAction } from '../actions';
import RouterComponent from '../components/RouterComponent';

const mapStateToProps = state => {
  return {
    currentCategory: state.activeCategory,
    addItemToCategoryFlag: state.addItemEnabled
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showAddItemToCategory: bindActionCreators(showAddItemToCategoryAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterComponent);
