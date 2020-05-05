# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.delete_all
TasteProfile.delete_all
Roaster.delete_all
Dtcoffee.delete_all
user1 = User.create!(
    email: 'demo@coffee.com',
    password: 'password'
)


TasteProfile.create!(
    user_id: user1.id,
    experience_level: 1,
    brew_method: 'Moka Pot',
    additions: 'None',
    roast: 3,
    adventure: 'High',
    ground: false
)

roaster1 = Roaster.create!(name: 'Stumptown',       
        location:'Portland, Oregon',    
        description: 'This titan roaster had its modest beginnings in a closed-down 
        Portland beauty salon named Hair Bender (hence Stumptown’s popular blend). Duane Sorenson’s 
        brand has come a long way since then, setting the standard for sourcing, 
        roasting, and (of course) cold brew with skill and a little luck from its talisman horseshoe.', 
        fun_fact: "This roaster takes the coffee house music scene seriously and releases employee-based *Worker's Comp* vinyls.",
)
# logo1 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/logos/Stumptownl_logo.png')
# roaster1.photo.attach(io: logo1, filename: 'Stumptownl_logo.png')
# attach to user

roaster2 = Roaster.create(name: 'Equator',       
        location:'San Rafael, California',   
        description: "In 1995, when partners Brooke McDonnell, Maureen McHugh, and Helen Russell 
        began roasting coffee from a garage, they set out to build a high-impact company focused 
        on quality, sustainability, and social responsibility. As a Certified B Corporation, 
        Equator supports quality of life initiatives in coffee-growing regions, including its 
        founding of Panama’s Finca Sophia farm and partnering with World Bicycle Relief.", 
        fun_fact: "Equator's chain of well-being philosophy ensures everyone with a hand in making its coffee benefits from it.",
)
roaster3 = Roaster.create(name: 'Passenger',       
        location:'Lancaster, Pennsylvania', 
        description: "Passenger loves coffee and wants to take its drinkers 
        along for the ride. Once operating from a retrofitted 1955 Airstream 
        trailer — capturing a mix of wonder and familiarity — this Lancaster,
         Pennsylvania roaster is focused on the future. In that spirit, 
         forward-thinking Passenger keeps their entire inventory of unroasted
          coffee in deep-freeze storage, allowing them to roast a large and 
          diverse offering at peak freshness year round.", 
        fun_fact: "This roaster first opened to the public through the window of its vintage Airstream mobile cafe.",
)
roaster4 = Roaster.create(name: 'AKA',       
        location:'Oakland, California', 
        description: "Co-founders Brian W. Jones, Björg Brend Laird, and 
        John Laird's AKA Coffee won't let anything stand between them and 
        the joy of a great cup. Bouncing back from an initial 2013 launch, the
         Oakland, California brand focuses on diverse flavors, including the 
         nuanced taste of Nordic roasting, a field in which Björg is a pioneer.", 
        fun_fact: "Also known as family, AKA's roaster Rosie Laird grew up around 
        coffee as the daughter of co-founder and roastmaster John Laird.",
)
roaster5 = Roaster.create(name: 'Intelligentsia',       
        location:'Oakland, California', 
        description: "Founded in 1995 by Emily Mange and Doug Zell, this 
        Chicago-based institution got its start roasting on vintage equipment 
        within its first coffeebar. Today – with a focus on consistency, quality, 
        and sustainability – Intelligentsia travels the world to source the 
        finest specialty coffee for its roasting facilities and training labs 
        across the nation.", 
        fun_fact: "This Chicago roaster is the title sponsor of the 
        Intelligentsia Cup, a 10-day road cycling race around the city.",
)


coffee1= Dtcoffee.create!(
        name:'Hair Bender',
        description:'The one that started it all and still the most popular for Stumptown. 
            Sweet, complex, & balanced, this dynamic coffee is great no matter how your brew it.',
        roast: 4,
        roaster_id: roaster1.id,
        weight: 12,
        price: 17.65,
        single_origin: false,
        fair_trade: false,
        flavors: 'Comforting & Rich'
)
# coffeebag1 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/stump_hair.png')
# coffee1.photo.attach(io: coffeebag1, filename: 'stump_hair.png')
coffee2= Dtcoffee.create(
        name:"Founder's Blend",
        description:"Everything you love about a classic, nostalgic cup of 
            comfort shine in this sweet, easy to love blend - 
            it's just elevated beyond your wildest dreams.",
        roast: 2,
        roaster_id: roaster1.id,
        weight: 12,
        price: 17.65,
        single_origin: false,
        fair_trade: false,
        flavors: 'Sweet & Smooth'
)
coffee3= Dtcoffee.create(
        name:"French Roast",
        description:"Rich and smoky, with a bold chocolaty body 
            and a spiciness that sticks around. This coffee takes milk 
            like a champ, but won't take 'no' for an answer.",
        roast: 4,
        roaster_id: roaster1.id,
        weight: 12,
        price: 17.65,
        single_origin: false,
        fair_trade: false,
        flavors: 'Roasty & Smoky'     
)
coffee4= Dtcoffee.create(
        name:"Holler Mountain",
        description:"This full-bodied & versatile hometown favorite layers 
            crisp bright flavors on top of comforting richness.",
        roast: 3,
        roaster_id: roaster1.id,
        weight: 12,
        price: 18.85,
        single_origin: false,
        fair_trade: false,
        flavors: 'Comforting & Rich'
)

coffee5= Dtcoffee.create(
        name:"El Salvador Los Pirineos Pacamara",
        description:"A big-bodied coffee that tastes like a candy bar, 
        this chocolaty cup should please most any coffee drinker.",
        roast: 3,
        roaster_id: roaster2.id,
        weight: 12,
        price: 22.95,
        single_origin: true,
        fair_trade: false,
        flavors: 'Chocolaty & Sweet'
)
coffee6 = Dtcoffee.create(
        name:"Eye Of The Tiger Espresso",
        description:"Juicy citrus acidity paired with incredible chocolaty 
        depth and fruity sweetness will have you running up and down 
        flights of stairs in the blink of an eye.",
        roast: 4,
        roaster_id: roaster2.id,
        weight: 12,
        price: 20.60,
        single_origin: false,
        fair_trade: false,
        flavors: 'Syrupy & Smooth'
)
coffee7= Dtcoffee.create(
        name:"Rwanda Nyampinga",
        description:"Refreshingly juicy lime acidity carries a cherry-vanilla 
        sweetness that lingers long after that last sip.",
        roast: 2,
        roaster_id: roaster2.id,
        weight: 12,
        price: 21.20,
        single_origin: true,
        fair_trade: false,
        flavors: 'Sweet & Tart'
)
coffee8= Dtcoffee.create(
        name:"Ethiopia Sidama Ardi",
        description:"Smooth, fruity and sweet, with notes of vanilla, 
        lavender and meyer lemon. This naturally processed coffee may 
        change your whole perception of what coffee can be.",
        roast: 3,
        roaster_id: roaster2.id,
        weight: 12,
        price: 21.80,
        single_origin: true,
        fair_trade: false,
        flavors: 'Funky & Fruity'
)



coffee9= Dtcoffee.create(
        name:"Hacienda La Esmeralda 2019 Dry Processed",
        description:"Breaking news: when you masterfully roast some 
        of the best, most painstakingly processed coffee in the world, 
        you get a wildly delicious and intensely sweet and fruity cup.",
        roast: 1,
        roaster_id: roaster3.id,
        weight: 10,
        price: 104.15,
        single_origin: true,
        fair_trade: true,
        flavors: 'Funky & Fruity'
)
coffee10= Dtcoffee.create(
        name:"Ecuador La Tortuga",
        description:"Positively buzzing with honey sweetness, 
        this tropical cup brings a bright berry juiciness to round out this super sweet treat.",
        roast: 1,
        roaster_id: roaster3.id,
        weight: 10,
        price: 39.75,
        single_origin: true,
        fair_trade: true,
        flavors: 'Subtle & Delicate'
)

coffee11= Dtcoffee.create(
        name:"Kanzu, Rwanda",
        description:"Dried apricot, raisin, panela, citrus, and even slight
         jasmine on the nose introduce a very attractive cup full of flavors 
         ranging from baked apple and pear to raspberry.",
        roast: 2,
        roaster_id: roaster3.id,
        weight: 10,
        price: 22.95,
        single_origin: true,
        fair_trade: false,
        flavors: 'Subtle & Delicate'
)
coffee12= Dtcoffee.create(
        name:"German Córdoba",
        description:"Gentle but super sweet and complex, this 
        competition-winning coffee is as gorgeous as they come.",
        roast: 1,
        roaster_id: roaster3.id,
        weight: 10,
        price: 32.10,
        single_origin: true,
        fair_trade: false,
        flavors: 'Subtle & Delicate'
)
coffee13= Dtcoffee.create(
        name:"OMG (Oh My God)",
        description:"Oh my Guatemala, this is a good blend 
        (the other half comes from Ethiopia). Sip its balanced 
        richness and try not to shout it out loud (or post it on social).",
        roast: 3,
        roaster_id: roaster4.id,
        weight: 12,
        price: 20.00,
        single_origin: false,
        fair_trade: false,
        flavors: 'Sweet & Smooth'
)
coffee14= Dtcoffee.create(
        name:"Kindred Blend",
        description:"An elegant blend of Colombian and Guatemalan 
        coffees, this one reminds us of cedar and chocolate with a hint of orange.",
        roast: 3,
        roaster_id: roaster4.id,
        weight: 12,
        price: 21.80,
        single_origin: false,
        fair_trade: false,
        flavors: 'Balanced & Fruity'
)
coffee15= Dtcoffee.create(
        name:"FTW (For The Win)",
        description:"As espresso, as cold brew, as filter drip—this is 
        straightforward, clean, balanced coffee that pleases a crowd,
         any time of day. AKA: Winning.",
        roast: 2,
        roaster_id: roaster4.id,
        weight: 12,
        price: 18.25,
        single_origin: false,
        fair_trade: false,
        flavors: 'Sweet & Smooth'
)
coffee16= Dtcoffee.create(
        name:"Decaf Inza",
        description:"With gently tart notes of red grape and plenty of brown 
        sugar sweetness, we bet you couldn't pick this decaf out of coffee lineup.",
        roast: 3,
        roaster_id: roaster4.id,
        weight: 12,
        price: 21.80,
        single_origin: true,
        fair_trade: false,
        flavors: 'Sweet & Smooth'
)

coffee17= Dtcoffee.create(
        name:"Intelligentsia House Blend",
        description:"Designed to showcase the intrinsic sweetness and fruit 
        flavors that characterize our favorite coffees. Milk chocolate, 
        mandarin, and apple are tastes we love and are well represented here.",
        roast: 2,
        roaster_id: roaster5.id,
        weight: 12,
        price: 16.50,
        single_origin: false,
        fair_trade: false,
        flavors: 'Balanced & Fruity'
)
coffee18= Dtcoffee.create(
        name:"Black Cat Classic Espresso",
        description:"This classic espresso has been part of Intelligentsia's 
        lineup since the very begining. Intensive lot selection means supreme 
        balance & syrupy sweetness.",
        roast: 3,
        roaster_id: roaster5.id,
        weight: 12,
        price: 17.65,
        single_origin: false,
        fair_trade: false,
        flavors: 'Syrupy & Smooth'
)
coffee19= Dtcoffee.create(
        name:"Illumination Blend",
        description:"The Peruvian and Ethiopian pieces of this seasonal blend 
        fit together wonderfully for a balanced, but fun, blend with zippy 
        fruit flavors and a rich molasses finish.",
        roast: 3,
        roaster_id: roaster5.id,
        weight: 12,
        price: 20.00,
        single_origin: false,
        fair_trade: true,
        flavors: 'Balanced & Fruity'
)
coffee20= Dtcoffee.create(
        name:"El Gallo Organic Breakfast Blend",
        description:"An organic counterpart to Intelligentsia's venerable 
        House Blend, El Gallo has a round mouthfeel with a smooth, candied 
        sweetness perfect for all day enjoyment.",
        roast: 2,
        roaster_id: roaster5.id,
        weight: 12,
        price: 15.00,
        single_origin: false,
        fair_trade: true,
        flavors: 'Sweet & Smooth'
)
match1 = Match.create!(
        user_id: user1.id,
        coffee_id: coffee6.id
)
match2 = Match.create!(
        user_id: user1.id,
        coffee_id: coffee10.id)

match2 = Match.create!(
        user_id: user1.id,
        coffee_id: coffee17.id)
        