class AddSubcategories < ActiveRecord::Migration[5.1]
  def change
    create_foreign_table :subcategories, :foreign_server do |t|
      t.string :name
      t.integer :category_id
      t.integer :id
    end
  end
end
