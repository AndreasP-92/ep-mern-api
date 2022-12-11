



module.exports = function (app) {
    app.get('/api/ticketmasterstub/get/all', function (req, res){
        res.json({
            _embedded : {
                events : [
                    {
                        id : 'Z698xZC4Z17fbJ9',
                        name : 'AySay',
                        images : [
                            {
                                url : 'https://s1.ticketm.net/dam/a/204/bed9103e-7855-4ad8-93c1-64428e97e204_1715101_RETINA_PORTRAIT_16_9.jpg',
                            },
                            {
                                url : 'https://s1.ticketm.net/dam/a/204/bed9103e-7855-4ad8-93c1-64428e97e204_1715101_RETINA_PORTRAIT_16_9.jpg',
                            }
                        ]
                    },
                    {
                        id : 'Z698xZC4Z17fbJ9',
                        name : 'Led Zeppelin Jam',
                        images : [
                            {
                                url : 'https://s1.ticketm.net/dam/a/b14/adf84893-e1e4-41d0-aa8f-20ded018ab14_1560601_RETINA_LANDSCAPE_16_9.jpg',
                            },
                            {
                                url : 'https://s1.ticketm.net/dam/a/b14/adf84893-e1e4-41d0-aa8f-20ded018ab14_1560601_RETINA_PORTRAIT_3_2.jpg',
                            }
                        ]
                    }
                ]
            }
        })
    });

    app.get('/api/ticketmasterstub/search/:zip', function (req, res){
        res.json({
            _embedded : {
                events : [
                    {
                        id : 'Z698xZC4Z17fbJ9',
                        name : 'AySay',
                        images : [
                            {
                                url : 'https://s1.ticketm.net/dam/a/204/bed9103e-7855-4ad8-93c1-64428e97e204_1715101_RETINA_PORTRAIT_16_9.jpg',
                            },
                            {
                                url : 'https://s1.ticketm.net/dam/a/204/bed9103e-7855-4ad8-93c1-64428e97e204_1715101_RETINA_PORTRAIT_16_9.jpg',
                            }
                        ]
                    },
                    {
                        id : 'Z698xZC4Z17fbJ9',
                        name : 'Led Zeppelin Jam',
                        images : [
                            {
                                url : 'https://s1.ticketm.net/dam/a/b14/adf84893-e1e4-41d0-aa8f-20ded018ab14_1560601_RETINA_LANDSCAPE_16_9.jpg',
                            },
                            {
                                url : 'https://s1.ticketm.net/dam/a/b14/adf84893-e1e4-41d0-aa8f-20ded018ab14_1560601_RETINA_PORTRAIT_3_2.jpg',
                            }
                        ]
                    }
                ]
            }
        })
    })
}