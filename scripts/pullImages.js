const fs = require('fs')
const https = require('https')
const Stream = require('stream').Transform
const sharp = require('sharp')

const tShirtImages = (id) => [
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113745894146800642&design=${id}&style=hanes_mens_crew_tshirt_5250&size=a_s&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113562383382757001&design=${id}&style=hanes_mens_crew_tshirt_5250&size=a_s&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113047569559324703&design=${id}&style=hanes_mens_crew_tshirt_5250&size=a_s&max_dim=325&bg=0xffffff`
]

const darkTshirtImages = (id) => [
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113745894146800642&design=${id}&style=hanes_mens_crew_darktshirt_5250&size=a_s&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113562383382757001&design=${id}&style=hanes_mens_crew_darktshirt_5250&size=a_s&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113047569559324703&design=${id}&style=hanes_mens_crew_darktshirt_5250&size=a_s&max_dim=325&bg=0xffffff`
]

const fullFaceMaskImages = (id) => [
  `https://www.zazzle.com/rlv/svc/view?realview=113161478230575712&design=${id}&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113637405611640427&design=${id}&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113668507371945024&design=${id}&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113741992753217556&design=${id}&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113172235682006239&design=${id}&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113885022310819668&design=${id}&max_dim=325&bg=0xffffff`,
]

const seeThroughImages = (id) => [
  `https://www.zazzle.com/rlv/svc/view?realview=113501735933371664&design=${id}&rlvnet=1&style=plasticshield&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113183111711656308&design=${id}&rlvnet=1&style=plasticshield&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113057728169160550&design=${id}&rlvnet=1&style=plasticshield&max_dim=325&bg=0xffffff`
]

const cottonImages = id => [
  `https://www.zazzle.com/rlv/svc/view?realview=113126181203241620&design=${id}&rlvnet=1&style=cottonsingle&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113358122767808310&design=${id}&rlvnet=1&style=cottonsingle&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113394898562832201&design=${id}&rlvnet=1&style=cottonsingle&max_dim=325&bg=0xffffff`,
]

const tanktopImages = id => [
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113537487484228100&design=${id}&style=nla_womens_racerback_jersey_tank_6633&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113204766608328408&design=${id}&style=nla_womens_racerback_jersey_tank_6633&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113671064563828031&design=${id}&style=nla_womens_racerback_jersey_tank_6633&max_dim=325&bg=0xffffff`,
]

const lunchBoxImages = id => [
  `https://www.zazzle.com/rlv/svc/view?realview=113015877475585040&design=${id}&rlvnet=1&color=red&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113662388414279797&design=${id}&rlvnet=1&color=red&max_dim=325&bg=0xffffff`,
]

const leggingImages = id => [
  `https://www.zazzle.com/rlv/svc/view?realview=113524768959958640&design=${id}&rlvnet=1&style=ankle&size=a_xs&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113013239298217507&design=${id}&rlvnet=1&style=ankle&size=a_xs&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113906754440235256&design=${id}&rlvnet=1&style=ankle&size=a_xs&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113776217357279109&design=${id}&rlvnet=1&style=ankle&size=a_xs&max_dim=325&bg=0xffffff`,
]

//
const foldedImages = id => [
  `https://www.zazzle.com/rlv/svc/view?realview=113156190017753094&design=${id}&rlvnet=1&style=cover&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113954814847055817&design=${id}&rlvnet=1&style=cover&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113087419112987185&design=${id}&rlvnet=1&style=cover&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113972851875306112&design=${id}&rlvnet=1&style=cover&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113697978004291095&design=${id}&rlvnet=1&style=cover&max_dim=325&bg=0xffffff`,
]

const hatImages = id => [
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113647281033678299&design=${id}&style=trucker_hat&color=white_black&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113240240869341705&design=${id}&style=trucker_hat&color=white_black&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113308264365003772&design=${id}&style=trucker_hat&color=white_black&max_dim=325&bg=0xffffff`,
]


const womanShirt = id => [
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113969212191856268&design=${id}&style=hanes_womens_crew_tshirt_5680&size=a_s&color=lightblue&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113253585147919601&design=${id}&style=hanes_womens_crew_tshirt_5680&size=a_s&color=lightblue&max_dim=325&bg=0xffffff`
]


// TODO
// - fastcash folded text
// - shirt shirt


const data = {
  patriot: [
    {
      id: 'proud-american-t',
      images: tShirtImages('619b9cda-2c73-44c5-96ee-14cfc6008831'),
    },
    {
      id: 'george-cat',
      images: fullFaceMaskImages('68feda60-1da3-467f-b20e-ab8e8d8a161a'),
    },
    {
      id: 'guns-n-beer',
      images: fullFaceMaskImages('fbfdbdb2-28b1-40af-86d7-2c4a85b71b00'),
    },
    {
      id: 'antifa-antico',
      images: fullFaceMaskImages('7a31c773-abf3-4fb2-aba2-15815ac3f06a'),
    },
    {
      id: 'wwg1wga-q',
      images: fullFaceMaskImages('14cb1052-0f6f-4eca-b584-bf8824127ccf'),
    },
    {
      id: 'afraid-of-feminism',
      images: fullFaceMaskImages('1a72cc7c-8f8c-4260-bdd8-2fe0e41857c2'),
    },
    {
      id: 'adrenochrome',
      images: fullFaceMaskImages('195a30c2-41c0-4147-a363-454e1eded325'),
    },
    {
      id: 'wwg1wga-flag',
      images: cottonImages('e21d8573-0c8a-439c-9fd1-925cd0a42a5b'),
    },
    {
      id: 'covid-2020',
      images: cottonImages('783c89dc-5379-4124-84f9-01634615a704'),
    },
    {
      id: 'hoax',
      images: cottonImages('7a490c6f-91de-4084-9511-e0e146572823'),
    },
    {
      id: 'usa',
      images: fullFaceMaskImages('e78e7274-b85a-467d-9b1e-2c599977c8a5'),
    },
    {
      id: 'antifa-antico-lunch',
      images: lunchBoxImages('f337fa2e-b286-47b7-a4b8-ae40877bb6bb'),
    },
    {
      id: 'real-americans',
      images: foldedImages('f93031c7-63fa-4638-b858-0b77cb3f3935')
    },
    {
      // TODO Description
      id: 'american-flag',
      images: foldedImages('085a6f86-31ac-4b69-a840-b124ed6cd37f')
    },
    {
      // TODO Description
      id: 'wwg1wga-text',
      images: foldedImages('0b19fa58-a7b1-4d02-95ba-d449d0fe0b27')
    },
  ],
  safety: [
    {
      id: 'gas-mask',
      images: fullFaceMaskImages('786592f3-f00c-4041-9bf9-f59720dfdb7a'),
    },
    {
      id: 'infected1-mask',
      images: fullFaceMaskImages('de02c477-1f2a-45a5-807f-02c1c0762496'),
    },
    {
      id: 'infected2-mask',
      images: fullFaceMaskImages('3a31d777-3ffb-437a-a072-8fd75f555e25')
    },
    {
      id: 'infected1-t',
      images: tShirtImages('58542316-bfc5-46dc-b99a-658002772cc5'),
    },
    {
      id: 'infected2-t',
      images: tShirtImages('353cabaa-f3ee-416f-9c8c-2b415ae10b07'),
    },
    {
      id: 'radio-wave-protection',
      images: fullFaceMaskImages('2d5da480-4278-4e44-9318-dfe650aac28e'),
    },
    {
      id: 'wear-your-mask',
      images: fullFaceMaskImages('614d361d-be1e-4edf-84f4-e68c2fe36a9f'),
    },
    {
      id: 'anti-facial1',
      images: fullFaceMaskImages('26afe91c-be63-49c0-9f76-ab27160e3f71'),
    },
    {
      id: '5g-bad',
      images: fullFaceMaskImages('603ad7c0-8898-4d93-8739-70d809affdce'),
    },
    {
      // TODO Description
      id: 'emf-tower',
      images: foldedImages('ef9ccd32-7218-487e-bf0a-505f6d193f02'),
    },
    {
      // TODO Description
      id: 'sovereign-mask',
      images: foldedImages('25a0e91a-269e-44f3-b1b4-128f4015c81f'),
    },
    {
      // TODO Description
      id: 'sovereign-t',
      images: tShirtImages('714d0a19-a658-4b59-a26c-b76d5105d71c'),
    },
    {
      // TODO Description
      id: 'boo-hoo',
      images: foldedImages('4c18d8e8-e60f-466f-892b-eaccc54f438f'),
    },
  ],
  branded: [
    {
      id: 'fastcash-t',
      images: tShirtImages('f70c9ef9-ef33-4650-811d-996b7d950e77')
    },

    {
      id: 'fastcash-plus-t',
      images: darkTshirtImages('522778e4-3ea9-447f-bf22-e8787ca77cf3')
    },

    {
      id: 'fastcash-super-plus-t',
      images: tShirtImages('ae7f66ce-d683-45ee-b458-848f3127fffe'),
    },
    {
      id: `fastcash-colorful`,
      images: fullFaceMaskImages('2bfff509-dace-4287-886c-af100e2562f8'),
    },
    {
      id: 'ronamerch-mask',
      images: fullFaceMaskImages('f2a2999a-7b19-4135-82a3-583f26033544'),
    },
    {
      id: 'ronamerch-t',
      images: tShirtImages('399af8ed-e7fa-4d0d-a170-adbbb999ae22'),
    },
    {
      id: 'fake-news',
      images: fullFaceMaskImages('1a523fd9-cd3a-41e3-8102-9933eb48815b'),
    },
    {
      id: 'rm-see-through',
      images: seeThroughImages('f58689ad-14d1-49f4-aa88-4e9d8a2237c1'),
    },
    {
      id: 'fastcash-premium',
      images: cottonImages('32425339-4886-4843-b418-51cd4fbafeb7'),
    },
    {
      id: 'branded',
      images: cottonImages('82ec9606-ffba-4922-92b4-69323563f3de'),
    },
    {
      id: 'not-meddly',
      images: cottonImages('5be6d22a-0810-40d2-a36b-d0b3f2cb9d81'),
    },
    {
      id: 'fastcash-leggings',
      images: leggingImages('b1ffb19d-536e-4cf6-b5da-f645dc4870e0'),
    },
    {
      // TODO Description
      id: 'fastcash-logo-folded',
      images: foldedImages('0879f6cd-29f7-4010-bafd-d61342cba79d'),
    },
    {
      // TODO Description
      id: 'not-mask',
      images: fullFaceMaskImages('b91236de-375e-41a3-a609-80964bd6d13c'),
    },
    {
      // TODO Description
      id: 'not-t',
      images: darkTshirtImages('abb9ada4-5dab-4044-acb4-0d97f4cbfe97'),
    },
    {
      // TODO Description
      id: 'fastcash-text-folded',
      images: foldedImages('dff56b11-96d1-4752-97a1-38b5230d663d'),
    },
  ],
  bargain: [
    {
      id: 'wakka-wakka',
      images: fullFaceMaskImages('84086b27-9d4a-4a68-8d70-f373d48fe436'),
    },
    {
      id: 'smiling-eyes',
      images: fullFaceMaskImages('5c0ef824-8029-460a-bab6-8269ea420eb1'),
    },
    {
      id: 'apocalypse',
      images: fullFaceMaskImages('aab5243c-3815-4155-b616-b4ac59f43328'),
    },
    {
      id: 'freemason-blood-sacrifice',
      images: fullFaceMaskImages('9b931020-ae11-4b9f-9839-96de6a0ead68'),
    },
    {
      id: 'cluck',
      images: fullFaceMaskImages('104479fc-5499-4e55-bdb4-2ce7f68a6c78'),
    },
    {
      id: 'pattern1',
      images: fullFaceMaskImages('c1737843-9996-405a-8ece-83393946e04b'),
    },
    {
      id: 'smarty-pants',
      images: seeThroughImages('6600da7b-16ab-4d6a-be8b-62073678458c'),
    },
    {
      id: 'useless',
      images: darkTshirtImages('0c4504a7-16e1-4d8b-85a5-e29fe29f6785'),
    },
    {
      id: 'flash-sale',
      images: tanktopImages('6a2fd9a0-c683-465c-b857-81c5b38c0aa7'),
    },
    {
      id: 'dollar-dollar',
      images: foldedImages('3ed0044b-3556-4d7f-b571-35a5885f2fa4'),
    },

    {
      id: 'knotty-mask',
      images: foldedImages('3ba9f754-a976-47e5-8004-868dd5c9c867'),
    },
    {
      id: 'mask-mask',
      images: fullFaceMaskImages('9766814c-94df-477b-9b1d-3a1327aa7ea3'),
    },
    {
      id: 'shale-bad',
      images: darkTshirtImages('b9ba6d23-ec23-4d35-9c08-8dafb47a7712'),
    },
    {
      id: 'hat-hat',
      images: hatImages('5569f287-c67e-46dd-b1ef-f593dfcef9fd'),
    },
    {
      id: 'super-spreader',
      images: womanShirt('df865af7-c848-4f68-ba0e-cdf4b98ad567'),
    },
  ],
}

// const pullImage = (url, path, cb) => {
//   request.head(url, (err, res, body) => {
//     if (err) throw new Error(err)
//     console.log('blah')
//     request(url).pipe(fs.createWriteStream(path)).on('close', (...args) => {
//       cb ? cb(args) : console.log(args)
//       process.exit()
//     });
//   });
// }

// pullImage(fullFaceMaskImages('104479fc-5499-4e55-bdb4-2ce7f68a6c78')[0], './assets/test.jpeg')

const PATH = './public/images/'
const pullImage = (url, name) => new Promise((res, rej) => {
  https.request(url, response => {
    const data = new Stream()

    response.on('data', chunk => data.push(chunk))

    response.on('end', () => {
      // fs.writeFileSync(PATH + name, data.read())

      sharp(data.read())
        .resize(320, 320)
        .toFile(PATH + name, err => {
          if (err) console.log(err, url, name,'<<<<<<<<<<<<<<<<<<<<<')
          res()
        })

    })
  }).end()
})

const allData = [
  ...data.patriot,
  ...data.bargain,
  ...data.branded,
  ...data.safety,
]


console.log('start...')

Promise.all(allData.map(item => {

  return Promise.all(item.images.map((image, i) => {
    const name = item.id + '-' + i + '.jpeg'

    return pullImage(image, name)
  }))
})).then(() => {
  console.log('completed')
  // process.exit()
})

