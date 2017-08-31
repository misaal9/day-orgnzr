import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListItem from '../components/ListItem';
import { setActiveCategoryAction } from '../actions';

const mapStateToProps = state => {
  return {
    activeCategory: state.activeCategory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveCategory: bindActionCreators(setActiveCategoryAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
