class Article < ApplicationRecord

    belongs_to :user
    has_many :comments

    validates :title, :genre, :content, :user, presence: true
    
end
