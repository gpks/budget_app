class CreatePlans < ActiveRecord::Migration[5.1]
  def change
    create_table :plans do |t|
      t.integer :monthly_plan_id
      t.integer :subcategory_id
      t.decimal :amount

      t.timestamps
    end
  end
end
