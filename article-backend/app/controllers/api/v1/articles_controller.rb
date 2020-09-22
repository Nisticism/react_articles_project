class Api::V1::ArticlesController < ApplicationController

    before_action :set_article, only: [:show, :update, :destroy]

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

        if @article.save
            render json: @article, status: :created
        else
            error_res = {
                error: @article.errors.full_messages.to_sentence
            }
            render json: error_res, status: unprocessable_entity
        end
    end

    def update

    end

    def destroy

    end

    private

    def set_article
        @article = Article.find(params[:id])
    end

    def article_params
        params.require(:article).permit(:title, :genre, :content, :user_id)
    end
end
