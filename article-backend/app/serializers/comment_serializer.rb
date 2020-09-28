class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :article_title, :author, :like_score, :date
  attribute :author do |comment|
    {
      name: User.find_by(id: comment.user_id).name,
      username: User.find_by(id: comment.user_id).username 
    }
  end
  attribute :date do |comment|
    comment.created_at.to_s[0,10]
  end
  attribute :article_title do |comment|
    Article.find_by(id: comment.article_id).title
  end
end
