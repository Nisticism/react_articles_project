class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :content, :article_title, :username, :like_score, :date
  attribute :username do |comment|
    User.find_by(id: comment.user_id).username 
  end
  attribute :date do |comment|
    comment.created_at.to_s[0,10]
  end
  attribute :article_title do |comment|
    Article.find_by(id: comment.article_id).title
  end
end
