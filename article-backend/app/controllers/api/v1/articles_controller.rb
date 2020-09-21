class Api::V1::ArticlesController < ApplicationController
    def index
        if logged_in?
            @articles = current_user.articles
    
            render json: @articles
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
