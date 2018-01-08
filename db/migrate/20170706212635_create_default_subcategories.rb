class CreateDefaultSubcategories < ActiveRecord::Migration[5.1]
  def change
    create_table :default_subcategories do |t|
      t.references :user
      t.integer :subcategory_id

      t.timestamps
    end
  end
end
