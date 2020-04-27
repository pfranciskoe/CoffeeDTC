{
    entities:{
        user:{
            id: 6,
            username: coffee_guy,
            coffee_taste: 4,
            coffee_matches:[1,12]
        },
        coffee_taste:{
                experience_level: 4,
                brew_method: 'moka pot',
                additions:  'none',
                roast: '3',
                taste: 'medium',
                ground: false,
        },
        coffees:{
            1:{
                id:1,
                name: 'Hair Bender',
                description:
                    'The sweet and balanced coffee that started it all. Hair Bender is our most popular coffee with good reason – it’s a day-maker however you brew it.',
                roast: 3,
                flavor: ['cherry','toffee','fudge'],
                roaster_id: 1,
                single_origin: false,
                weight: 15,
                fair_trade: false,
            },
            2:{
                id:12,
                name: 'Black Cat Espresso',
                description:
                    'This classic espresso has been part of Intelligentsia's lineup since the very begining. Intensive lot selection means supreme balance & syrupy sweetness.',
                roast: 3,
                flavor: ['cherry','toffee','fudge'],
                roaster_id: 13,
                single_origin: false,
                weight: 12,
                grind: null,
                price: 17.65,
                fair_trade: false
            }
        },
        roasters:{
            1:{
                id:1,
                name: 'Stumptown Coffee Roaster',
                location:'Portland, Oregon',
                fun_fact:"This roaster takes the coffee house music scene seriously and releases employee-based Worker's Comp vinyl."
            },
            13:{
                id: 13,
                name: 'Intelligentsia',
                location: 'Chicago, Illinois',
                fun_fact:"This Chicago roaster is the title sponsor of the Intelligentsia Cup, a 10-day road cycling race around the city."
            }
        }
        cart:{
            coffees:[1,13]
        }
    },
    ui: {
        loading: true/false
    },
    errors: {
        session: [],
        cart:[],
        survey:[]
    }
}