class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :username, :articles, :comments
end
