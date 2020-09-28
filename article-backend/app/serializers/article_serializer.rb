class ArticleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :content, :genre, :like_score, :date, :comments
  attribute :author do |article|
    {
      name: User.find_by(id: article.user_id).name,
      username: User.find_by(id: article.user_id).username 
    }
  end
  attribute :date do |article|
    article.created_at.to_s[0,10]
  end
  attribute :comments do |article|
    comments = []
    article.comments.each do |comment|
      username = User.find_by(id: comment.user_id).username
      comment_json = {id: comment.id, article_title: article.title, username: username, content: comment.content, like_score: comment.like_score, date: comment.created_at.to_s[0,10]}
      comments << comment_json
    end
    comments
  end
end
