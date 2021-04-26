const {getVideo} = require('./getVideo')

const videos = [
    //NODE
    'https://www.youtube.com/watch?v=KYmvnN9X3UY',
    'https://www.youtube.com/watch?v=2aIhICvFWO4',
    'https://www.youtube.com/watch?v=L_pnDYasaog',
    'https://www.youtube.com/watch?v=rjQJHrcqku8',
    'https://www.youtube.com/watch?v=zRGXhZmDHG8',

    //ELIXIR
    'https://www.youtube.com/watch?v=f1N9i4eQYuc',
    'https://www.youtube.com/watch?v=hbwtz-T3DsQ',
    'https://www.youtube.com/watch?v=p4c8u_XHfhU',
    'https://www.youtube.com/watch?v=27fV3z05ZiY',
    'https://www.youtube.com/watch?v=0pdqILNmh2k',
    
    //REACT
    'https://www.youtube.com/watch?v=HnRQgEeRXiw',
    'https://www.youtube.com/watch?v=g9yY9ndsqWg',
    'https://www.youtube.com/watch?v=9xCp0gqWKpY',
    'https://www.youtube.com/watch?v=cRs3jdGbOt0',
    'https://www.youtube.com/watch?v=qZ60sKmZSDE',

    //REACT NATIVE
    'https://www.youtube.com/watch?v=vrABToPdOyg',
    'https://www.youtube.com/watch?v=R19Dz_d0Wp4',
    'https://www.youtube.com/watch?v=HZfuL7pN9Wo',
    'https://www.youtube.com/watch?v=PIgXHztZ-Fo',
    'https://www.youtube.com/watch?v=FxsXRIhD_Wk',
    
    //FLUTTER
    'https://www.youtube.com/watch?v=GSYaYunF0ws',
    'https://www.youtube.com/watch?v=3ImqUVDUBdE',
    'https://www.youtube.com/watch?v=_OeByq1RXu0',
    'https://www.youtube.com/watch?v=pbZ5TrDSnt8',
    'https://www.youtube.com/watch?v=Sqoje4UNP3M',
    'https://www.youtube.com/watch?v=LrpX5L9LQ3k',
]


for (video of videos) {
    getVideo(video)
}
// getVideo(videos[0])
// getVideo(videos[1])
// getVideo(videos[2])