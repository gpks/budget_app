import React from 'react';

export default class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  };

  handleChange(event) {
    this.props.handleCategoryChange(event.target.id)
  };

  checkCategory(category) {
    this.props.ifCategoryChecked(category)
  };

  categoriesItems() {
    const items = this.props.categories.map((category) =>
      <div key={category.name}>
        <label >
          {category.name}
          <input
            id={category.id}
            type="checkbox"
            checked={this.checkCategory(category)}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
    return items
  };

  render() {
    return (
      <form >
        {this.categoriesItems()}
      </form>
    );
  }
}

