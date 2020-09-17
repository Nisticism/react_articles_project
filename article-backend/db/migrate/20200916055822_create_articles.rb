class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.string :genre
      t.integer :like_score

      t.timestamps
    end
  end
end
