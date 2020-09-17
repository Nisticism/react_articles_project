# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(name: "Hans", username: "Nistic", email: "fosterhans@gmail.com", password: "password")
opinion = Article.create(title: "Title", content: "This is an article", genre: "Opinion", like_score: 0, user_id: user.id)
science = user.articles.create(title: "Study of science", content: "text", genre: "Scientific", like_score: 0)
user.comments.create(content: "This is a comment", like_score: 0)