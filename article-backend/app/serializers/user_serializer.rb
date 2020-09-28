class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :username

  #  With these relationships, most data will not be returned
  # has_many :articles, serializer: ArticleSerializer
  # has_many :comments, serializer: CommentSerializer

  #  IF not using separate serializers for articles or comments, it could be done like this: 
  #

#  Commented out until necessary with a user profile

#   attribute :articles do |user|
#     articles = []
#     user.articles.each do |article|
#       article_json = {title: article.title, content: article.content, genre: article.genre, like_score: article.like_score, date: article.created_at.to_s[0,10]}
#       articles << article_json
#     end
#     articles
#   end
#   attribute :comments do |user|
#     comments = []
#     user.comments.each do |comment|
#       comment_json = {article_title: Article.find_by(id: comment.article_id).title, content: comment.content, like_score: comment.like_score, date: comment.created_at.to_s[0,10]}
#       comments << comment_json
#     end
#     comments
#   end
end
