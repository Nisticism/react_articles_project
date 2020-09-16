class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :content
      t.string :date
      t.string :genre
      t.string :likes

      t.timestamps
    end
  end
end
