class AddSubcategories < ActiveRecord::Migration[5.1]
  def change
    create_foreign_table :subcategories, :foreign_server do |t|
      t.string :name
      t.int8range :category_id
    end
  end
end
