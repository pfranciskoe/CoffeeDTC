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

roaster1 = Roaster.create!(name: 'Stumptown',       

        lat: 45.516327,
        lng: -122.629697,
        location:'Portland, Oregon',    
        description: 'This titan roaster had its modest beginnings in a closed-down 
        Portland beauty salon named Hair Bender (hence Stumptown’s popular blend). Duane Sorenson’s 
        brand has come a long way since then, setting the standard for sourcing, 
        roasting, and (of course) cold brew with skill and a little luck from its talisman horseshoe.', 
        fun_fact: "This roaster takes the coffee house music scene seriously and releases employee-based *Worker's Comp* vinyls.",
)

roaster2 = Roaster.create(name: 'Equator',
        lat: 37.965467,
        lng:-122.523069,
        location:'San Rafael, California',   
        description: "In 1995, when partners Brooke McDonnell, Maureen McHugh, and Helen Russell 
        began roasting coffee from a garage, they set out to build a high-impact company focused 
        on quality, sustainability, and social responsibility. As a Certified B Corporation, 
        Equator supports quality of life initiatives in coffee-growing regions, including its 
        founding of Panama’s Finca Sophia farm and partnering with World Bicycle Relief.", 
        fun_fact: "Equator's chain of well-being philosophy ensures everyone with a hand in making its coffee benefits from it.",
)
roaster3 = Roaster.create(name: 'Passenger',
        lat:40.041323,
        lng:-76.297257,
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
        lat:37.862510,
        lng:-122.297391,     
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
        lat:41.887033,
        lng:-87.674005,
        location:'Chicago, Illinois', 
        description: "Founded in 1995 by Emily Mange and Doug Zell, this 
        Chicago-based institution got its start roasting on vintage equipment 
        within its first coffeebar. Today – with a focus on consistency, quality, 
        and sustainability – Intelligentsia travels the world to source the 
        finest specialty coffee for its roasting facilities and training labs 
        across the nation.", 
        fun_fact: "This Chicago roaster is the title sponsor of the 
        Intelligentsia Cup, a 10-day road cycling race around the city.",
)
roaster6 = Roaster.create(name: 'Parlor',
        lat:40.697542,
        lng:-73.970547,
        location:'Brooklyn, New York', 
        description: "Founded in the back of a Brooklyn barbershop in 2012, 
        this former pop-up sticks to its small-batch roots to ensure quality 
        remains unchanged from those single small espresso machine days. Dillon
         Edwards’s roaster still operates much like the stylists Parlor began 
         beside, bringing out the beauty in each coffee.", 
        fun_fact: "Parlor’s Williamsburg shop made a cameo in Netflix’s show “Master of None” in 2015.",
)

roaster7 = Roaster.create(name: 'Passion House',
        lat:41.887251,
        lng:-87.704157,
        location:'Chicago, Illinois', 
        description: "There’s no question what Passion House stands for. 
        Joshua Millman’s small-batch roaster has pursued the ultimate coffee since 2011, 
        sharing that enthusiasm with Chicago and beyond.
         And that love goes into everything Passion House does, 
         from its thoughtful blends to experimental micro lot single origins.", 
        fun_fact: "Passion House founder Joshua Millman received his first 
        coffee order on the same day his daughter was born.",
)

roaster8 = Roaster.create(name: 'Blueprint',
        lat:38.655704,
        lng:-90.300546,
        location:'St. Louis, Missouri', 
        description: "Fiercely focused and admittedly obsessed, Blueprint 
        puts each of its coffees through a rigorous quality-control process. 
        Founded in 2013 with the co-op mentality of collaboration, this roaster’s commitment is 
        all in the name of ensuring every coffee meets its high standards and 
        nothing leaves St. Louis unless it aces the test!", 
        fun_fact: "This roaster has six founders, hence its hexagonal logo.",
)

roaster9 = Roaster.create(name: 'Revelator',
        lat:33.506711,
        lng:-86.822363,
        location:'Birmingham, Alabama', 
        description: "Founded in 2013, this Southern roaster is nostalgically 
        named for the way the word rhythmically rolls off the tongue. That 
        reverence comes through in a friendly and 
        refined yet gritty spirit that extends to neighborhood-driven cafés, 
        a farm-to-table philosophy, and traditional hospitality.", 
        fun_fact: "Revelator created a program for baristas entering the
         competition circuit that sponsored five new talents in its first year.",
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
coffee21= Dtcoffee.create(
        name:"Decaf Colombia Frontera de Acevedo",
        description:"Notes of chocolate and molasses highlight this particularly
         creamy decaf, with a little pop of tart cherry acidity to keep things lively.",
        roast: 3,
        roaster_id: roaster6.id,
        weight: 8,
        price: 14.00,
        single_origin: false,
        fair_trade: true,
        flavors: 'Chocolaty & Sweet'
)

coffee22= Dtcoffee.create(
        name:"Wallabout",
        description:"Wallabout throws its weight around but you won't mind 
        once your cup is filled with pure full-bodied comfort. Great for your 
        french press & ready for milk.",
        roast: 1,
        roaster_id: roaster6.id,
        weight: 8,
        price: 14.00,
        single_origin: false,
        fair_trade: true,
        flavors: 'Balanced & Fruity'
)
coffee23= Dtcoffee.create(
        name:"Ethiopia Worka Sakaro",
        description:"This Ethiopian is a gentle-bodied coffee with delicate 
        flavors to match. If you're into gentle citrus and a tea-like cup, 
        it's right up your alley.",
        roast: 2,
        roaster_id: roaster6.id,
        weight: 8,
        price: 14.25,
        single_origin: false,
        fair_trade: true,
        flavors: 'Subtle & Delicate'
)
coffee24= Dtcoffee.create(
        name:"Prospect",
        description:"Parlor's signature blend is a 50/50 of Colombian & Ethiopian coffees, 
        resulting in a tantalizing mash-up of sweet, rich, classic flavors & hints of the exotic.",
        roast: 1,
        roaster_id: roaster6.id,
        weight: 8,
        price: 14.50,
        single_origin: false,
        fair_trade: true,
        flavors: 'Balanced & Fruity'
)
coffee25= Dtcoffee.create(
        name:"LSD Blend",
        description:"When caffeine is your mind-altering chemical of choice, 
        turn to this LSD blend for the perfect morning trip. Creamy bodied, 
        with juicy orange acidity and warming spices. Consider our minds blown. 
        (Formerly known as PH Blend.)",
        roast: 3,
        roaster_id: roaster7.id,
        weight: 12,
        price: 18.00,
        single_origin: false,
        fair_trade: true,
        flavors: 'Syrupy & Smooth'
)
coffee26= Dtcoffee.create(
        name:"Milly Grace",
        description:"At Passion House we are constantly on the hunt for 
        beautiful coffees, stopping at nothing to get our hands on the best 
        beans we can find. We decided to name this Peruvian coffee Millie Grace 
        after a character in one of our favorite Phish songs, “Fee”. Millie is 
        an adventurous soul, traversing the world to find a serendipitous 
        balance between exciting and comforting.",
        roast: 1,
        roaster_id: roaster7.id,
        weight: 12,
        price: 18.00,
        single_origin: true,
        fair_trade: true,
        flavors: 'Balanced & Fruity'
)
coffee27= Dtcoffee.create(
        name:"Bassline Espresso Blend",
        description:"Prepare to find your groove: This rich espresso riffs on 
        it roasty, toasty chocolatey-smooth base with notes of vibrant,
         citrus acidity.",
        roast: 4,
        roaster_id: roaster7.id,
        weight: 12,
        price: 18.00,
        single_origin: false,
        fair_trade: true,
        flavors: 'Syrupy & Smooth'
)
coffee28= Dtcoffee.create(
        name:"Night Moves Dark Roast",
        description:"Make a move on a dark roast that’s more sweet than bitter. 
        Old school in style with a bold, rich feel, this is one smooth operator.",
        roast: 5,
        roaster_id: roaster7.id,
        weight: 12,
        price: 18.00,
        single_origin: false,
        fair_trade: true,
        flavors: 'Comforting & Rich'
)

coffee29= Dtcoffee.create(
        name:"Finca Tamana",
        description:"Pecan pie sweetness balances a citrusy
         lemon acidity in this extremely pleasant Colombian cup.",
        roast: 2,
        roaster_id: roaster8.id,
        weight: 12,
        price: 18.00,
        single_origin: true,
        fair_trade: true,
        flavors: 'Sweet & Inviting'
)

coffee30= Dtcoffee.create(
        name:"Primary Series: Blue",
        description:"Loud cocoa and caramel notes make this blend perfect for 
        cold brew, though all that sweetness would be welcome in a hot cup.",
        roast: 4,
        roaster_id: roaster8.id,
        weight: 12,
        price: 18.00,
        single_origin: false,
        fair_trade: true,
        flavors: 'Sweet & Smooth'
)

coffee31= Dtcoffee.create(
        name:"Tekton",
        description:"Blueprint's trademark blend is constantly evolving, 
        but you can always expect deep sweetness, well-balanced acidity, and overall deliciousness.",
        roast: 2,
        roaster_id: roaster8.id,
        weight: 12,
        price: 19.00,
        single_origin: false,
        fair_trade: true,
        flavors: 'Balanced & Fruity'
)

coffee32= Dtcoffee.create(
        name:"Penrose",
        description:"With its nutty sweetness and gentle body, this iteration of
         Blueprint's ever-changing espresso blend would be perfect in any espresso drink.",
        roast: 3,
        roaster_id: roaster8.id,
        weight: 12,
        price: 18.25,
        single_origin: false,
        fair_trade: true,
        flavors: 'Syrupy & Smooth'
)

coffee33= Dtcoffee.create(
        name:"9 to 5",
        description:"With background notes of black cherry and caramel, this 
        roasty buddy is the perfect companion to get you through your 9 to 5.",
        roast: 5,
        roaster_id: roaster9.id,
        weight: 12,
        price: 14.00,
        single_origin: false,
        fair_trade: true,
        flavors: 'Roasty & Smoky'
)
coffee34= Dtcoffee.create(
        name:"Petunias",
        description:"With notes of cherry and chocolate, this coffee is
         harmony in a cup. We have yet to find anyone who questions its sweet,
          velvety deliciousness",
        roast: 2,
        roaster_id: roaster9.id,
        weight: 12,
        price: 14.00,
        single_origin: false,
        fair_trade: false,
        flavors: 'Sweet & Smooth'
)

coffee35= Dtcoffee.create(
        name:"Pale Rider",
        description:"With well-balanced chocolate and red apple sweetness, 
        this decaf is ready to ride at any time of day (or night).",
        roast: 5,
        roaster_id: roaster9.id,
        weight: 12,
        price: 22.00,
        single_origin: false,
        fair_trade: false,
        flavors: 'Sweet & Smooth'
)

coffee36= Dtcoffee.create(
        name:"Misfit",
        description:"This coffee stands out from the pack, but no worries: 
        It will fit right into your brewing rotation. Full-bodied and richly 
        warm with a memorable toastiness.",
        roast: 4,
        roaster_id: roaster9.id,
        weight: 12,
        price: 15.00,
        single_origin: false,
        fair_trade: false,
        flavors: 'Sweet & Smooth'
)

cart1 = Cart.create!(
        user_id:user1.id
) 

coffeebag1 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/stump_hair.png')
coffee1.photo.attach(io: coffeebag1, filename: 'stump_hair.png')

coffeebag2 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/stump_founders.png')
coffee2.photo.attach(io: coffeebag2, filename: 'stump_founders.png')

coffeebag3 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/stump_french_roast.png')
coffee3.photo.attach(io: coffeebag3, filename: 'stump_french_roast.png')

coffeebag4 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/stump_holler.png')
coffee4.photo.attach(io: coffeebag4, filename: 'stump_holler.png')




coffeebag5 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/equator_el_salvador_los_pirineos_pacamara.png')
coffee5.photo.attach(io: coffeebag5, filename: 'equator_el_salvador_los_pirineos_pacamara.png')

coffeebag6 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/equator_eye_of_the_tiger.png')
coffee6.photo.attach(io: coffeebag6, filename: 'equator_eye_of_the_tiger.png')

coffeebag7 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/equator_rawanda_nyampinga.png')
coffee7.photo.attach(io: coffeebag7, filename: 'equator_rawanda_nyampinga.png')

coffeebag8 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/equator_ethiopia_sidama_ardi.png')
coffee8.photo.attach(io: coffeebag8, filename: 'equator_ethiopia_sidama_ardi.png')



coffeebag9 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/passenger_hacienda.png')
coffee9.photo.attach(io: coffeebag9, filename: 'passenger_hacienda.png')

coffeebag10 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/passenger_la_tortuga.png')
coffee10.photo.attach(io: coffeebag10, filename: 'passenger_la_tortuga.png')

coffeebag11 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/passenger_kanzu.png')
coffee11.photo.attach(io: coffeebag11, filename: 'passenger_kanzu.png')

coffeebag12 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/passenger_german_cordoba.png')
coffee12.photo.attach(io: coffeebag12, filename: 'passenger_german_cordoba.png')



coffeebag13 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/AKA_OMG.png')
coffee13.photo.attach(io: coffeebag13, filename: 'AKA_OMG.png')

coffeebag14 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/aka_kindred.png')
coffee14.photo.attach(io: coffeebag14, filename: 'aka_kindred.png')

coffeebag15 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/aka_ftw.png')
coffee15.photo.attach(io: coffeebag15, filename: 'aka_ftw.png')

coffeebag16 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/aka_decaf.png')
coffee16.photo.attach(io: coffeebag16, filename: 'aka_decaf.png')




coffeebag17 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/mdswg2ep9tpdwkfbsy1n.png')
coffee17.photo.attach(io: coffeebag17, filename: 'mdswg2ep9tpdwkfbsy1n.png')

coffeebag18 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/cn8suy4ozoqlmbpodhpd.png')
coffee18.photo.attach(io: coffeebag18, filename: 'cn8suy4ozoqlmbpodhpd.png')

coffeebag19 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/hciwlfviqfau3euvef85.png')
coffee19.photo.attach(io: coffeebag19, filename: 'hciwlfviqfau3euvef85.png')

coffeebag20 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/buihl04nyhyyigrbq3xz.png')
coffee20.photo.attach(io: coffeebag20, filename: 'buihl04nyhyyigrbq3xz.png')



coffeebag21 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/f36x7h1qviyp4yhqlt6r.png')
coffee21.photo.attach(io: coffeebag21, filename: 'f36x7h1qviyp4yhqlt6r.png')

coffeebag22 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/PAR_Wallabout_TRD00005.png')
coffee22.photo.attach(io: coffeebag22, filename: 'PAR_Wallabout_TRD00005.png')

coffeebag23 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/ugdn0pvbxesdwzgjthg5.png')
coffee23.photo.attach(io: coffeebag23, filename: 'ugdn0pvbxesdwzgjthg5.png')

coffeebag24 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/PAR_Prospect_TRD00005.png')
coffee24.photo.attach(io: coffeebag24, filename: 'PAR_Prospect_TRD00005.png')



coffeebag25 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/new_coffees/passion_lsd.png')
coffee25.photo.attach(io: coffeebag25, filename: 'passion_lsd.png')

coffeebag26 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/new_coffees/passion_milly.png')
coffee26.photo.attach(io: coffeebag26, filename: 'passion_milly.png')

coffeebag27 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/new_coffees/passion_bass.png')
coffee27.photo.attach(io: coffeebag27, filename: 'passion_bass.png')

coffeebag28 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/new_coffees/passio_night.png')
coffee28.photo.attach(io: coffeebag28, filename: 'passio_night.png')



coffeebag29 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/new_coffees/blueprint_finca.png')
coffee29.photo.attach(io: coffeebag29, filename: 'blueprint_finca.png')

coffeebag30 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/new_coffees/blueprint_blue.png')
coffee30.photo.attach(io: coffeebag30, filename: 'blueprint_blue.png')

coffeebag31 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/new_coffees/blueprint_tek.png')
coffee31.photo.attach(io: coffeebag31, filename: 'blueprint_tek.png')

coffeebag32 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/new_coffees/blueprint_penrose.png')
coffee32.photo.attach(io: coffeebag32, filename: 'blueprint_penrose.png')




coffeebag33 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/new_coffees/rev_9to5.png')
coffee33.photo.attach(io: coffeebag33, filename: 'rev_9to5.png')

coffeebag34 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/new_coffees/rev_petunas.png')
coffee34.photo.attach(io: coffeebag34, filename: 'rev_petunas.png')

coffeebag35 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/new_coffees/rev_pale.png')
coffee35.photo.attach(io: coffeebag35, filename: 'rev_pale.png')

coffeebag36 = open('https://dtcoffee-seeds.s3-us-west-1.amazonaws.com/coffees/new_coffees/rev_misfit.png')
coffee36.photo.attach(io: coffeebag36, filename: 'rev_misfit.png')