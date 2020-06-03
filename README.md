<h1 align="center" > DTCoffee </h1>
<h3 align="center"> A Dynamic Coffee Storefront for Anyone </h3>
<h5 align="center">
<a href='https://dtcoffee.herokuapp.com/#/'>Live Site</a> | <a href='https://github.com/pfranciskoe/CoffeeDTC/wiki'>Wiki</a>
</h5>
<h1 align="center">

![splash-page](https://github.com/pfranciskoe/CoffeeDTC/blob/master/app/assets/images/giphy.gif)

</h1>

## User Journey
Visitors to DTCoffee are greeted by a friendly welcome page that will guide them through their coffee journey. After logging in they are given the opportunity to: 
* Browse our interactive storefront
* Take a quiz and view a curated list of coffees that have been picked specifically for them.

Once they are satisfied with the coffees in their cart they are ready to checkout!

## Core Features:

### `User Authentication`
* Front and Backend Authentication
* Demo user interface
### `Coffee Matching`
<img
		width="300"
		alt="OnBoarding"
		src="https://github.com/pfranciskoe/CoffeeDTC/blob/master/app/assets/images/onboarding.png?raw=true">


* 6-Step onboarding quiz
* Backend matching algorithm
* After user information is translated into coffee price and roast preference a backend Rails controller crafts a custom database query to create a record of the match.
```
def create_matches(taste_profile)
    roast_range = taste_profile.get_match_params[0]
    price_range = taste_profile.get_match_params[1]
    matched_coffees = Dtcoffee.where("price >= ? AND price <= ? AND
        roast >= ? AND roast <= ?",price_range[0],
        price_range[1],roast_range[0],roast_range[1]
		).limit(5)
    matched_coffees.each do |matched|
        Match.create!(coffee_id: matched.id, user_id: taste_profile.user_id)
    end
end
```

### `Responsive Search / Filtering`
* Search narrows continuously with user input
* Content can be narrowed by a variety of additional filters that will selectively render appropriate content

```
<div className='index-body-container'>
    {Object.values(this.state.coffees).map((coffee, idx) => (
    	(this.state.roast[coffee.roast] &&
        this.state.flavors[coffee.flavors] &&
        this.state.price[0] <= coffee.price &&
        this.state.price[1] >= coffee.price &&
        this.state.weight[coffee.weight] &&
        (coffee.name.toLowerCase().includes(this.state.name.toLowerCase()) ||
        this.state.roasters[coffee.roasterId].name.toLowerCase()
		.includes(this.state.name.toLowerCase()) ||
        this.state.name === '')
        )
		? 
		<IndexItem
            coffee={coffee}
            roaster={this.state.roasters[coffee.roasterId]}
            key={`coffee-index-item-${idx}`}
        />
        : null
	))}
 </div>
```
### `Coffee / Roaster Details`
* In depth information about the specific coffee
* Additional information about the coffee roaster
* Map interface to explore the roaster

## Tech / Framework:
* PostgreSQL
* Ruby / Rails
* Javascript
* JBuilder / JQuery
* React
* Redux
* CSS / SCSS
* Webpack
* Google Maps Javascript API
* AWS S3

### Upcoming Features:
* Customer Service Modal
* Full Test Coverage
* Expanded Coffee Catalog
* Subscriber Discounts
