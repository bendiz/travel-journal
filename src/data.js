import promenade from './components/img/promenade.jpeg'
import disneyland from './components/img/disneyland.jpeg'
import greece from './components/img/greece.jpeg'

export default [
    {
        id: 1,
        image: promenade,
        title: 'Promenade des Anglais',
        location: 'France',
        google: 'https://www.google.com/maps/search/?api=1&query=Promenade+des+Anglais',
        date: 'June 2010',
        description:
            "Today's promenade is not only a popular place for walks, but also for sports. A bike path runs throughout its entire length, and every now and then you can run into runners, roller skaters, or other sports enthusiasts. This place is so busy that it’s easy to have an accident here.",
    },
    {
        id: 2,
        image: disneyland,
        title: 'Disneyland Paris',
        location: 'France',
        google: 'https://www.google.com/maps/search/?api=1&query=Disneyland+Paris',
        date: 'June 2009',
        description:
            'Disneyland Paris is an entertainment resort in Chessy, France, 32 km east of Paris. It encompasses two theme parks, resort hotels, Disney Nature Resorts, a shopping, dining and entertainment complex, and a golf course. Disneyland Park is the original theme park of the complex',
    },
    {
        id: 3,
        image: greece,
        title: 'Georgioupolis',
        location: 'Greece',
        google: 'https://www.google.com/maps/search/?api=1&query=Georgioupolis',
        date: 'August 2014',
        description:
            'There are several sandy beaches along the coast at Georgioupoli where swimming is sheltered with a breakwater. It has the longest beach on the island, with over nine kilometres of golden sand.  There is abundant wildlife in the area attracted by the river and surrounding semi-wetland. Loggerhead turtles have been known to lay eggs on some of the local beaches.',
    },
]
