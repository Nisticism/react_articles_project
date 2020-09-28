class Api::V1::ArticlesController < ApplicationController

    before_action :set_article, only: [:show, :update, :destroy]

    def index
        if logged_in?
            @articles = Article.all
    
            render json: ArticleSerializer.new(@articles)
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
        @article = current_user.articles.build(article_params)

        if @article.save
            render json: ArticleSerializer.new(@article), status: :created
        else
            error_res = {
                error: @article.errors.full_messages.to_sentence
            }
            render json: error_res, status: :unprocessable_entity
        end
    end

    def update
        if @article.update(article_params)
            render json: ArticleSerializer.new(@article), status: :ok
        else
            error_res = {
                error: @article.errors.full_messages.to_sentence
            }
            render json: error_res, status: :unprocessable_entity
        end
    end

    def destroy
        if @article.destroy
            render json: { data: "Article deleted" }, status: :ok
        else
            error_res = {
                error: "Article not found"
            }
            render json: error_res, status: :unprocessable_entity
        end
    end

    private

    def set_article
        @article = Article.find(params[:id])
    end

    def article_params
        params.require(:article).permit(:title, :genre, :content, :like_score)
    end
end
