class CreateDefaultSubcategories < ActiveRecord::Migration[5.1]
  def change
    create_table :default_subcategories do |t|
      t.references :user
      t.bigint :subcategory_id

      t.timestamps
    end
  end
end
