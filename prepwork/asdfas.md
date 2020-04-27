DB SCHEMA NOTES

Users
    id	
    username	
    email
    matches
    cart_id
    password_digest	
    session_token	
    created_at
    updated_at

Cart
    user_id
    coffee_id
    created_at
    updated_at

Matches
    id
    user_id
    coffee_id
    created_at
    updated_at


Likes
    id
    user_id
    coffee_id
        
Coffees
    id
        primary key
    description
        text
    roast
        Light
        Light-Medium
        Medium
        Medium-Dark
        Dark
    taste_like
        Berry Fruit
        Brown Sugar
        Citrus
        Earthiness
        Florals
        Milk Chocolate
        Nut
        Ripe Fruit
        Roastiness
        Savoriness
        Spice
        Sweet Vanilla
        Tropical Fruit
    roaster_id

    region

    country

    type
        single origin
        blend
    weight
        integer(oz)
    fair_trade
        boolean


Roaster
    id
        primary key
    name
        string
    location
        string
    description
        text
    fun_fact
        text


Taste Profile
    user_id
        integer
    experience
        new
        intermidiate
        advanced
        nerd
    brew_method
        coffee maker
        french press
        pour over 
        chemex
        aeropress
        percolator
        cold brew
        espresso machine
        moka pot
        refillable pods
    addition
        milk and cream
        syrup
        non-dairy milk
        sugar
        black
        multiple
    roast
        light   
        medium
        dark
        random
    taste
        traditional
        hints
        surprising
        random
    grinded
        boolean