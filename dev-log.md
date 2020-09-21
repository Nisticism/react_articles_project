2020-09-15

Article publishing app

User stories

    Users should be able to:
    	Sign up and log in
    	Write articles
    	Comment on articles
    	have favorite articles
    	Edit articles
    	Gain reputation
    	Search for related articles by category, popularity, user reputation, or date
    	Search for articles on subjects
    	Ratings/awards/likes could be for specific categories (informational, well written, convincing, humor) much like reddit


    Models

    	User
    		Attributes:  Name, email, username, password, reputation score
    		Relationships:  Has_many Article, Has_many comments
    	Article
    		Attributes:  Genre, Likes, Date, Content
    		Relationships: Has_many comments, Belongs_to User
    	Comment
    		Attributes:  Likes, Content
    		Relationships:  Belongs_to Article, Belongs_to Article

2020-09-16

- Add seed data, double check models
- Add serializers - fast JSON api
- mock user login - add current_user to app controller
- create a React app, using create-react-app
- add Redux and establish our store
- start thinking about what the app will look like
- add a couple components

2020-09-19

- login functionality

2020-09-20

- Add log out functionality
- sign up functionality
- think about layout layout
- routes - adding react router
- think about bringing in 3rd party css
- actions/reducers/state/props for articles
