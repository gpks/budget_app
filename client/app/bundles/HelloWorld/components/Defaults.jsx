import PropTypes from 'prop-types';
import React from 'react';
import CategoriesList from './CategoriesList';

export default class Defaults extends React.Component {
  static propTypes = {
    submit: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { subcategoriesIds: [], categoriesIds: [] }
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.ifCategoryChecked = this.ifCategoryChecked.bind(this)
  }

  handleCategoryChange(categoryId) {
    const status = this.state
    status.categoriesIds.push(categoryId)
    this.setState({ status })
  };

  ifCategoryChecked(category) {
    this.state.categoriesIds.includes(category.id)
  };

  render() {
    return (
      <div>
        SELECT CATEGORIES
        <hr />
        <CategoriesList
          categories={this.props.categories}
          handleCategoryChange={this.handleCategoryChange}
          ifCategoryChecked={this.ifCategoryChecked}
        />
      </div>
    );
  }
}
