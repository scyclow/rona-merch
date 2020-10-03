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
      id: 'guns-n-beer-dark',
      images: fullFaceMaskImages('fbfdbdb2-28b1-40af-86d7-2c4a85b71b00'),
    },
    {
      id: 'guns-n-beer-white',
      images: fullFaceMaskImages('fa40acb8-9a74-4a6b-9bbc-b5a236470135'),
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
  ],
  branded: [
    {
      id: 'fastcash-bw',
      images: tShirtImages('f64ed6c7-cf64-4b23-8127-746a76169e82')
    },
    {
      id: 'fastcash-bw-dark',
      images: darkTshirtImages('751e51e6-3b74-411d-ae43-031055218869')
    },
    {
      id: 'fastcash-lime',
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
      images: tShirtImages('1a523fd9-cd3a-41e3-8102-9933eb48815b'),
    },
    {
      id: 'rm-see-through',
      images: seeThroughImages('f58689ad-14d1-49f4-aa88-4e9d8a2237c1'),
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

const PATH = './public/'
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

