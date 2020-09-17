class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.text :content
      t.integer :like_score

      t.timestamps
    end
  end
end
