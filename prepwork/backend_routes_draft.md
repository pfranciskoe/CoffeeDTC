Backend Routes


HTML
    GET / StaticPagesController#root
API Endpoints
    users
        *GET /api/users     get user information
        *POST /api/users    sign up a new user
    session
        *POST /api/session  login
        *DELETE /api/session logout
    coffees
        *GET /api/coffees   get all coffee (optionally filtered by paramaters)
        *GET /api/coffees/:id get a specific coffee by id
    likes
        *POST /api/coffees/:id/likes express preference to a specific coffee
        *DELETE /api/coffees/:id/likes remove a preference towards a coffee
    roasters
        *GET /api/roasters get all coffee roaster (optionally filtered by parameters)
        *GET /api/roasters/:id get a specific roaster by id
    taste profiles
        *POST /api/taste_profiles create a new taste profile
        *GET /api/taste_profiles/:id get a user's taste profile
        *PATCH /api/taste_profiles/:id edit a user's taste profile
    matches
        *POST /api/users/:id/matches create a new coffee match for a user
        *GET /api/users/:id/matches get the user's coffee matches
        *DELETE /api/users/:id/matches unmatch a coffee and user
    carts
        *POST /api/carts    create a new cart
        *DELETE /api/carts  remove an object from a user's cart
