class AddCategories < ActiveRecord::Migration[5.1]
  def change
    create_foreign_table :categories, :foreign_server do |t|
      t.string :name
      t.integer :id
    end
  end
end
