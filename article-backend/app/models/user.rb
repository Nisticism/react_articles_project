class User < ApplicationRecord
    has_secure_password

    has_many :articles, :dependent => :destroy
    has_many :comments, :dependent => :destroy

    validates :name, :username, :email, presence: true
    validates :username, uniqueness: true
end
