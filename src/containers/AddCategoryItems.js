import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddCategoryItems from '../components/AddCategoryItems';
import { fetchCategoryItemsAction, addItemToListAction, setAppStateAction } from '../actions';

const mapStateToProps = state => {
  return {
    currentCategory: state.activeCategory,
    currentCategoryItems: state.activeCategoryItems,
    currentAppLoadingState: state.appState,
    addItemToCategoryFlag: state.addItemEnabled
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategoryItems: bindActionCreators(fetchCategoryItemsAction, dispatch),
    addItemToList: bindActionCreators(addItemToListAction, dispatch),
    setAppState: bindActionCreators(setAppStateAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryItems);
