import PropTypes from 'prop-types';
import React from 'react';
import CategoriesList from './CategoriesList';
import SubcategoriesList from './SubcategoriesList';
import _ from 'lodash';

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
    this.handleSubcategoryChange = this.handleSubcategoryChange.bind(this)
    this.ifCategoryChecked = this.ifCategoryChecked.bind(this)
    this.ifSubcategoryChecked = this.ifSubcategoryChecked.bind(this)
  }

  handleCategoryChange(categoryId) {
    const status = this.state
    if (status.categoriesIds.includes(categoryId)) {
      status.categoriesIds = _.without(status.categoriesIds, categoryId)
      const category = _.find(this.props.categories, { id: categoryId })
      status.subcategoriesIds = _.without(status.subcategoriesIds, ..._.flatMap(category.subcategories, 'id'))
    } else {
      status.categoriesIds.push(categoryId)
    };
    this.setState({ status })
  };

  handleSubcategoryChange(subcategoryId) {
    const status = this.state
    if (status.subcategoriesIds.includes(subcategoryId)) {
      status.subcategoriesIds = _.without(status.subcategoriesIds, subcategoryId)
    } else {
      status.subcategoriesIds.push(subcategoryId)
    };
    this.setState({ status })
  };

  ifCategoryChecked(category) {
    return this.state.categoriesIds.includes(category.id);
  };

  ifSubcategoryChecked(subcategory) {
    return this.state.subcategoriesIds.includes(subcategory.id);
  };

  render() {
    return (
      <div>
        <p>
          CHOOSE CATEGORIES
        </p>
        <hr />
        <CategoriesList
          categories={this.props.categories}
          handleCategoryChange={this.handleCategoryChange}
          handleSubcategoryChange={this.handleSubcategoryChange}
          ifCategoryChecked={this.ifCategoryChecked}
          ifSubcategoryChecked={this.ifSubcategoryChecked}
        />
      </div>
    );
  }
}
