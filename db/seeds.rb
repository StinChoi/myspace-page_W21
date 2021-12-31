# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create(email: 't@test.com', password:1234567, name: "Timmy Turner", username: "Mellow Fellow",)

u1.posts.create(content: "Aloha to me MySpace Page, here's record of my first post", likes: 0)
u1.posts.create(content: "What would you tell Joe Biren right now?", likes: 0)
u1.posts.create(content: "You see this dogs in your front yard? Bing Bong", likes: 0)

p u1

p Post.all.length