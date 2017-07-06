class CreateDefaultSubcategories < ActiveRecord::Migration[5.1]
  def change
    create_table :default_subcategories do |t|
      t.integer :user_id
      t.integer :subcategory_id

      t.timestamps
    end
  end
end
