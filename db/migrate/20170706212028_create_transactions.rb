class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.decimal :amount
      t.boolean :expense
      t.boolean :revenue
      t.datetime :date
      t.integer :subcategory_id
      t.string :name

      t.timestamps
    end
  end
end
