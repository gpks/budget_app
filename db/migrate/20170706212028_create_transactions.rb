class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.decimal :amount
      t.boolean :expense
      t.boolean :revenue
      t.datetime :date
      t.bigint :subcategory_id
      t.string :name
      t.references :user

      t.timestamps
    end
  end
end
