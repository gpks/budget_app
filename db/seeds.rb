# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
%w(Income Food Housing Transport Telecommunication Health Clothing Higine Kids Entertainment Other Debts Savings).each do |name|
  Category.create(name: name)
end

food_category = Category.find_by(name: 'Food')
%w(Home work out coffee booze).each do |name|
  food_category.subcategories.create(name: name)
end

