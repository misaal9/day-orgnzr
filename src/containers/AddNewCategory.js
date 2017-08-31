import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddNewCategory from '../components/AddNewCategory';
import { addNewCategoryAction, setActiveCategoryAction } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    addNewCategory: bindActionCreators(addNewCategoryAction, dispatch),
    setActiveCategory: bindActionCreators(setActiveCategoryAction, dispatch)
  }
};

export default connect(null, mapDispatchToProps)(AddNewCategory);
