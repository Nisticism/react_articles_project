class Api::V1::CommentsController < ApplicationController

    before_action :set_comment, only: [:show, :update, :destroy]

    def index
        if logged_in?
            @comments = Comment.all
    
            render json: CommentSerializer.new(@comments)
        else
            render json: {
                error: "You must be logged in to see comments"
            }
        end
    end

    def show
        render json: @comment
    end

    def create
        @comment = current_user.comments.build(comment_params)

        if @comment.save
            render json: CommentSerializer.new(@comment), status: :created
        else
            error_res = {
                error: @comment.errors.full_messages.to_sentence
            }
            render json: error_res, status: :unprocessable_entity
        end
    end

    def update
        if @comment.update(comment_params)
            render json: CommentSerializer.new(@comment), status: :ok
        else
            error_res = {
                error: @comment.errors.full_messages.to_sentence
            }
            render json: error_res, status: :unprocessable_entity
        end
    end

    def destroy
        if @comment.destroy
            render json: { data: "Comment deleted" }, status: :ok
        else
            error_res = {
                error: "Comment not found"
            }
            render json: error_res, status: :unprocessable_entity
        end
    end

    private

    def set_comment
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.require(:comment).permit(:content, :like_score, :article_id)
    end
end

