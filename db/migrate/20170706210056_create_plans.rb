class CreatePlans < ActiveRecord::Migration[5.1]
  def change
    create_table :plans do |t|
      t.references :monthly_plan
      t.bigint :subcategory_id
      t.decimal :amount

      t.timestamps
    end
  end
end
