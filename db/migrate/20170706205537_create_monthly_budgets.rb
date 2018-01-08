class CreateMonthlyBudgets < ActiveRecord::Migration[5.1]
  def change
    create_table :monthly_budgets do |t|
      t.references :user
      t.integer :month
      t.integer :year

      t.timestamps
    end
  end
end
