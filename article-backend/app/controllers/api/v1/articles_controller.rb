class Api::V1::ArticlesController < ApplicationController
    def index
        if logged_in?
            @articles = Article.all
    
            render json: ArticleSerializer.new(@articles).serialized_json
        else
            render json: {
                error: "You must be logged in to see articles"
            }
        end
    end

    def show
        render json: @article
    end

    def create
        @article = Article.new(article_params)
    end
end
