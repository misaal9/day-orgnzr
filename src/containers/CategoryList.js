import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoryList from '../components/CategoryList';
import { fetchAllCategoriesAction } from '../actions';

const mapStateToProps = state => {
  return {
      categories: state.category,
      currentAppLoadingState: state.appState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCategories: bindActionCreators(fetchAllCategoriesAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
