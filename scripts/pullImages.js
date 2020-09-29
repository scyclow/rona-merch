const fs = require('fs')
const https = require('https')
const Stream = require('stream').Transform

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
      id: 'infected1-t',
      images: tShirtImages('58542316-bfc5-46dc-b99a-658002772cc5'),
    },
    {
      id: 'radio-wave-protection',
      images: fullFaceMaskImages('2d5da480-4278-4e44-9318-dfe650aac28e'),
    },
  ],
  branded: [
    {
      id: 'fastcash-lime',
      images: tShirtImages('ae7f66ce-d683-45ee-b458-848f3127fffe'),
    },
    {
      id: `fastcash-colorful`,
      images: fullFaceMaskImages('2bfff509-dace-4287-886c-af100e2562f8'),
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
      fs.writeFileSync(PATH + name, data.read())
      console.log(`${url} -> ${PATH + name}`)
      res(name)
    })
  }).end()
})

const allData = [
  ...data.patriot,
  ...data.bargain,
  ...data.branded,
  ...data.safety,
]

fs.readdir(PATH, (err, files) => {
  if (err) throw new Error(err)
  console.log('start...')

  const promises = allData.map(item => {
    console.log('collecting item', item.id)
    const responses = item.images.map((image, i) => {
      const name = item.id + '-' + i + '.jpeg'
      console.log('pulling image', image)

      if (files.includes(name)) return Promise.resolve()
      return pullImage(image, name)
    })
    return Promise.all(responses)
  })
  Promise.all(promises).then(() => {
    process.exit()
  })
})
