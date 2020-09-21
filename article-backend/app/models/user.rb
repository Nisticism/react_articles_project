class User < ApplicationRecord
    has_secure_password

    has_many :articles
    has_many :comments

    validates :name, :username, :email, presence: true
    validates :username, uniqueness: true
end
