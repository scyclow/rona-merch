import {shuffle} from 'lodash'
import img1 from './assets/FC-T-model1.jpeg'
import img2 from './assets/FC-thumbnail1.jpeg'
import img3 from './assets/FCMP-mask-model.jpeg'
import img4 from './assets/anti-face1.jpeg'
import img5 from './assets/hoax.jpeg'

export type Review = {
  author: string
  date: string
  content: string
  rating: number
}

export type Item = {
  id: string
  title: string
  images: Array<string>
  link: string
  description: string
  reviews: Array<Review>
}

export type Data = {
  patriot: Array<Item>
  safety: Array<Item>
  branded: Array<Item>
  bargain: Array<Item>
}

const authors = {
  wendy: {
    author: 'WendyPilsen',
  },
  dumbo: {
    author: 'DumboTheClown',
  },
  pleiadian: {
    author: 'ActualPleiadian',
  },
  vince: {
    author: 'VinceSlickson',
  },
  octo: {
    author: 'octofuzz',
  },
  bob: {
    author: 'BullseyeBob',
  },
  ray: {
    author: 'ray',
  },
  salvation: {
    author: 'SweetSalvation',
  },
  tom: {
    author: 'TargetedTom',
  },
  stupid: {
    author: 'stupid',
  }
}

const tShirtImages = (id: string, back: boolean = false) => shuffle([
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113745894146800642&design=${id}&style=hanes_mens_crew_tshirt_5250&size=a_s&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113562383382757001&design=${id}&style=hanes_mens_crew_tshirt_5250&size=a_s&max_dim=325&bg=0xffffff`,
  back ? `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113047569559324703&design=${id}&style=hanes_mens_crew_tshirt_5250&size=a_s&max_dim=325&bg=0xffffff` : ''
].filter(i => !!i))

const darkTshirtImages = (id: string, back: boolean = false) => shuffle([
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113745894146800642&design=${id}&style=hanes_mens_crew_darktshirt_5250&size=a_s&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113562383382757001&design=${id}&style=hanes_mens_crew_darktshirt_5250&size=a_s&max_dim=325&bg=0xffffff`,
  back ? `https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113047569559324703&design=${id}&style=hanes_mens_crew_darktshirt_5250&size=a_s&max_dim=325&bg=0xffffff` : ''
].filter(i => !!i))

const fullFaceMaskImages = (id: string) => shuffle([
  `https://www.zazzle.com/rlv/svc/view?realview=113161478230575712&design=${id}&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113637405611640427&design=${id}&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113668507371945024&design=${id}&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113741992753217556&design=${id}&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113172235682006239&design=${id}&max_dim=325&bg=0xffffff`,
  `https://www.zazzle.com/rlv/svc/view?realview=113885022310819668&design=${id}&max_dim=325&bg=0xffffff`,
])

// [center]
//   `https://www.zazzle.com/rlv/svc/view?realview=113161478230575712&design=21d83c6c-f833-472e-9d06-d16f69c3c904&rlvnet=1&style=cottonpolyblend&color=black&max_dim=325&bg=0xffffff[/img][/url]
// [url=https://www.zazzle.com/pd/spp/pt-zazzle_facemaskcoverblend?dz=21d83c6c-f833-472e-9d06-d16f69c3c904&clone=true&pending=true&style=cottonpolyblend&size=standard&color=black&design.areas=%5Bzazzle_facemaskcoverblend_front%5D&social=true&view=113161478230575712&rf=238012063771219973]Smiling Eyes Yellow Mask[/url]

// [/center]

const test = {
  id: 'test',
  title: 'Rona Merch Test Title T Mask',
  images: [img1, img3],
  link: '',
  description: "There's no better way to show the world that you're a proud American than by flaunting it with this stunning image of America's mascot: the majestic Bald Eagle",
  reviews: [
    {
      ...authors.salvation,
      date: '9/25/20',
      rating: 4,
      content: `I wear this shirt every day that i wake up and feel proud to be an American on God's green earth let me tell ya! The only thing that would make this better is if the picutre eagle was a bit sharper but other than that it's my favorite t shirt in my arsenal!`
    },
    {
      ...authors.ray,
      date: '9/26/20',
      rating: 4,
      content: `how do I buy the product?`
    }
  ]
}
const data: Data = {
  patriot: shuffle([
    {
      id: 'proud-american-t',
      title: 'Proud American T',
      link: '',
      images: tShirtImages('619b9cda-2c73-44c5-96ee-14cfc6008831'),
      description: "There's no better way to show the world that you're a proud American than by flaunting it with this stunning image of America's mascot: the majestic Bald Eagle",
      reviews: [
        {
          ...authors.salvation,
          date: '9/25/20',
          rating: 4,
          content: `I wear this shirt every day that i wake up and feel proud to be an American on God's green earth let me tell ya! The only thing that would make this better is if the picutre eagle was a bit sharper but other than that it's my favorite t shirt in my arsenal!`
        }
      ]
    },
    {
      id: 'george-cat',
      title: 'Henry George Cat Mask',
      link: '',
      images: fullFaceMaskImages('68feda60-1da3-467f-b20e-ab8e8d8a161a'),
      description: `Have you seen the cat? As most proponents of Henry George's Land Value Tax will tell you, once you "see the cat" and understand how deeply the LVT aligns with American values, you can't "unsee" it. Rock this vintage looks to tell everyone around you that you stand for Free Land, Free Trade, and Free People`,
      reviews: [
        {
          author: 'octofuzz',
          date: '7/4/20',
          rating: 5,
          content: `Honestly, George's Land Value Tax makes a lot of sense -- I never understood why we don't tax the hell out of landlords. What the hell are they doing for us? They're all a bunch of parasites, if you ask me, just sitting around and pulling in the rent. If we implement a 100% tax rate on land rents, what are they going to do? Produce less land? I don't think so. Seems like a no-brainer to me`
        },
        {
          author: 'SweetSalvation',
          date: '7/24/20',
          rating: 5,
          content: `I don't know who this george fellow is and I don't like taxes, but as far as taxes go the LVT seems pretty good since it means my income tax will go down`
        },
        {
          author: 'VinceSlickson',
          date: '9/4/20',
          rating: 5,
          content: `I agree with everyone here. If an LVT means that we can get rid of capital gains and income taxes, then sign me up`
        },
        {
          author: 'DumboTheClown',
          date: '9/5/20',
          rating: 5,
          content: `The cat on this mask is cute!`
        },
        {
          author: 'schoonerscaptain',
          date: '9/5/20',
          rating: 5,
          content: `What has my landlord done for me lately? As long as I have to pay rent, I'd rather it go towards the common good -- not just lining some leeches pockets`
        },
      ]
    },
    {
      id: 'guns-n-beer-dark',
      title: 'Guns N Beer Mask Dark',
      link: '',
      images: fullFaceMaskImages('fbfdbdb2-28b1-40af-86d7-2c4a85b71b00'),
      description: "Nothing is more American then drinking beer and shooting guns. let your neighbors know what you're really all about.",
      reviews: [
        {
          author: 'HankWilson77',
          date: '8/15/20',
          rating: 5,
          content: `Ever since I started wearing this mask, those antifa f_cks haven't laid a finger on me. They know that I've kicked back a few and won't hesitate to blow their brains all over the pavement`
        },
        {
          author: 'JamesJohnson97',
          date: '9/27/20',
          rating: 5,
          content: `This is the first piece of gear we give our members here at the Kansas City Arm The Left chapter. As Chapter Lead it's my job to make sure that all members stay safe evern before they have a chance to exercise their Second Amendment rights.`
        }
      ]
    },
    {
      id: 'guns-n-beer-white',
      title: 'Guns N Beer Mask White',
      link: '',
      images: fullFaceMaskImages('fa40acb8-9a74-4a6b-9bbc-b5a236470135'),
      description: "Nothing is more American then drinking beer and shooting guns. let your neighbors know what you're really all about.",
      reviews: [
        {
          author: 'YeeHaw',
          date: '9/27/20',
          rating: 4,
          content: `I don't think this one is as stylish as the black version, but it still gets the point across.`
        }
      ]
    },
    {
      id: 'antifa-antico',
      title: 'Antifascist Anticommunist Mask',
      link: '',
      images: fullFaceMaskImages('7a31c773-abf3-4fb2-aba2-15815ac3f06a'),
      description: "Real Americans hate Fascism as much as they hate Communism. Show the world that you're a real American with this sleek modernist design. #WWG1WGA",
      reviews: [
        {
          author: 'SweetSalvation',
          date: '9/24/20',
          rating: 2,
          content: `I don't know about this one...`
        }
      ]
    },
    {
      id: 'wwg1wga-q',
      title: 'WWG1WGA Q Mask',
      link: '',
      images: fullFaceMaskImages('14cb1052-0f6f-4eca-b584-bf8824127ccf'),
      description: "Celebrate the patriotic 1996 classic White Squall with this fetching minimalist design. ",
      reviews: [
        {
          author: 'DumboTheClown',
          date: '9/21/20',
          rating: 5,
          content: `White Squall is one of my favorite movies! Jeff Bridges is great in it!!`
        },
        {
          author: 'SweetSalvation',
          date: '9/22/20',
          rating: 5,
          content: `I wore this little number at the last #SaveTheChildren rally and it felt great not too flashy but still very smart and well designed, i was the talk of the town #WWG1WGA #SaveTheChildren #RealPatriot`
        },
        {
          author: 'HarryManson',
          date: '9/28/20',
          rating: 5,
          content: `I like to wear this mask whenever I leave the house for groceries. As long as I'm being watched I might as well let them know that Q is on my side. #WWG1WGA`
        },
        {
          author: 'TommyFlombego',
          date: '10/1/20',
          rating: 5,
          content: `I don't normally wear face masks, but this one is too good not to wear! `
        },
      ]
    },
  ]),
  safety: shuffle([
    {
      id: 'gas-mask',
      title: 'Gas Mask Mask',
      link: '',
      images: fullFaceMaskImages('786592f3-f00c-4041-9bf9-f59720dfdb7a'),
      description: `Whether you're braving the California wild fires, getting teargassed by the police, or simply browsing through your local COVID-19-invected super market, this face mask offers an extra layer of protection above the competition. Don't leave home without it!`,
      reviews: [
        {
          author: 'WendyPilsen',
          date: '9/15/20',
          rating: 5,
          content: `I don't leave home without it`
        },
        {
          author: 'fuckface99',
          date: '9/19/20',
          rating: 5,
          content: `DON'T LEAVE HOME WITHOUT IT!`
        },
        {
          author: 'DumboTheClown',
          date: '9/20/20',
          rating: 5,
          content: `I wouldn't leave home without it!`
        },
        {
          author: 'octoFuzz',
          date: '9/30/20',
          rating: 3,
          content: `I don't get it -- is the picture of the gas mask supposed to make this mask safer? In any case, I suppose it looks cool.`
        },
      ]
    },
    {
      id: 'infected1-mask',
      title: 'Infected Mask 1',
      link: '',
      images: fullFaceMaskImages('de02c477-1f2a-45a5-807f-02c1c0762496'),
      description: `There's only one sure-fire way to make sure that people stay 6 feet away from you -- and that's by implying that you may be infected with COVID-19. `,
      reviews: [
        {
          // author: 'TommyFlombego',
          author: 'HunterMcFarlane',
          date: '7/5/20',
          rating: -1,
          content: `Very dissapointing. This mask was NOT INFECTED, much like the title promises. I tried to infect my kids with it so they could build their antibodies, but now they are totally fine. WOULD NOT BUY THIS PRODUCT AGAIN!`
        },
        {
          author: 'TargetedTom',
          date: '8/31/20',
          rating: 4,
          content: `There's this one guy who lives in my building who won't leave me the f_ck alone... That is, until I started wearing this mask. I still see him more than I'd like, but at least now he sure as hell stays 6 feet away from me.`
        },
        {
          author: 'CrystalBell',
          date: '9/2/20',
          rating: 2,
          content: `I find this tasteless, to be perfectly honest. Tons of bad energy here. Would not reccomend`
        },
      ]
    },
    {
      id: 'infected1-t',
      title: 'Infected T 1',
      link: '',
      images: tShirtImages('58542316-bfc5-46dc-b99a-658002772cc5', true),
      description: `There's only one sure-fire way to make sure that people stay 6 feet away from you -- and that's by implying that you may be infected with COVID-19. `,
      reviews: [
        {
          // author: 'TommyFlombego',
          author: 'HunterMcFarlane',
          date: '7/16/20',
          rating: 3,
          content: `Again, very dissapointed with this product, as well as the INFECTED line of merchandise. As with the mask, this T shirt failed to infect my kids with anything. However, my daghter really likes the color and the design. She thinks it's "edgy". `
        },
        {
          author: 'DontCallMeRaul',
          date: '8/1/20',
          rating: 2,
          content: `Honestly, I'm not the biggest fan of this "infected" merch. I think it's stupid`
        },
      ]
    },
    {
      id: 'radio-wave-protection',
      title: 'Radio Wave Protection Mask',
      link: '',
      images: fullFaceMaskImages('2d5da480-4278-4e44-9318-dfe650aac28e'),
      description: `With 5G technology right around the corner, cancer-causing radio waves and V2K attacks are top of mind for many. Take all the help you can get by donning this sharply designed mask.`,
      reviews: [
        {
          author: 'TransmisionReceivd',
          date: '8/10/20',
          rating: 5,
          content: `After three gentlement in jumpsuits installed a GWEN beacon on my roof last summer my life has been a living hell. I've noticed all sorts of weird phonomenon outside the realm of explainaion. Ultimately, I concluded that the tower on my roof was scrmabling my thoughts and leading to intense visual and auditory hallucinations. Either that, or, as some people haev suggested, it enabled a voice-to-skull (V2K) attack on a previously implanted microchip inside my skull. Either way, this mask has been a breath of fresh air for me. I've felt better since the second I put it on. Can't reccomend it highly enough!`
        },
        {
          author: 'EnergyMatters',
          date: '8/13/20',
          rating: 3,
          content: `As I've said elsewhere, I'm VERY sensitive to electormagnetic frequencies. This mask definitely helps, but frankly I was expecting a little more. The nausia is still there, but at least it makes a dent in things. So to other EMF-sensitive folks, I'd say this mask is better than nothing, but don't get your hopes up too high.`
        },
        {
          author: 'BullseyeBob',
          date: '8/14/20',
          rating: 1,
          content: `The mask uses the completely wrong material to block EMFs. It's a complete scam.`
        },
        {
          author: 'pastisfuture',
          date: '8/30/20',
          rating: 4,
          content: `Reading through these comments, it seems like this mask is rairly controversial. I am obviously not qualified to speak to the science behind it, but I can speak to my personal experience. And with that in mind, I'm fairly confident that this mask has reduced my exposure to EMFs, and has overall had a positive impact on my mental health. And even if it's technically possible that the effects are psychosomatic, better safe than sorry!`
        },

      ]
    },
    test,
  ]),
  branded: shuffle([
    {
      id: 'fastcash-lime',
      title: 'FastCash Logo T Lime Green Purple',
      link: '',
      images: tShirtImages('ae7f66ce-d683-45ee-b458-848f3127fffe', true),
      description: `Stand out from the crowd and let everyone know that you're a winner with the bank account to back it up. Great for biking safely at night -- drivers will think twice before they hit you with their vehicle, lest they find themselves in the middle of a costly lawsuit!`,
      reviews: [
        {
          author: 'pastisfuture',
          date: '9/27/20',
          rating: 5,
          content: `After my biking accident, this shirt was critical for my biking safety protocol. The lime green really screams: "DON'T HIT ME WITH YOUR CAR!", and the purple lettering really pops. As an added bonus, the shirt lets everyone around me know that I'm a winner and have the bank account to back it up. If there was ever a doubt in their mind, this smart, attention-grabbing T let's the world know that I exist.`
        },
        {
          author: 'VinceSlickson',
          date: '9/27/20',
          rating: 5,
          content: `This is the number one T shirt I reccomend to all my clients. Nothing quite helps you garner respect by being the first thing people see when you walk into a room.`
        },
        {
          author: 'DumboTheClown',
          date: '9/28/20',
          rating: 5,
          content: `I like how bright this shirt is!`
        },
        {
          author: 'WendyPilsen',
          date: '9/28/20',
          rating: 5,
          content: `this shirt is comfortable`
        },
        {
          author: 'ray',
          date: '9/28/20',
          rating: 4,
          content: `My financial advisor told me to purchase this shirt, and I'm still waiting to see the results. But things are looking quite promising.`
        },
      ]
    },
    {
      id: `fastcash-colorful`,
      title: "FastCash Logo Mask Colorful",
      link: '',
      description: 'This vibrant, multi-colored face mask is the perfect way to express your identity as someone who is both forward-thinking and ambitious.',
      images: fullFaceMaskImages('2bfff509-dace-4287-886c-af100e2562f8'),
      reviews: [
        {
          author: 'CrystalBell',
          date: '7/2/20',
          rating: 5,
          content: 'So glad to see the fast cash franchise embrace its progressive roots!'
        },
        {
          author: 'VinceSlickson',
          date: '7/3/20',
          rating: 4,
          content: `Look, this one's a bit too flowery for my tastes, but it still get the point across`
        }
      ],
    },
    test,
    test,
  ]),
  bargain: shuffle([
    {
      id: 'wakka-wakka',
      title: 'Wakka Wakka Mask',
      link: '',
      images: fullFaceMaskImages('84086b27-9d4a-4a68-8d70-f373d48fe436'),
      description: `Wakka Wakka all the way home with this hilarious throwback.`,
      reviews: [
        {
          // author: 'TommyFlombego',
          author: 'PissinOnUHoes69',
          date: '9/26/20',
          rating: 1,
          content: `This mask is disgusting`
        },
        {
          author: 'lemoncurd',
          date: '9/28/20',
          rating: 1,
          content: `Ugh, everyone knows what wakka wakka means. No need to get children involved. Makes me wonder what else these people are selling.`
        },
        {
          author: 'DumboTheClown',
          date: '9/28/20',
          rating: 4,
          content: `What does wakka mean? I like the camel!`
        },
      ]
    },

    {
      id: 'smiling-eyes',
      title: 'Smiling Eyes Mask',
      link: '',
      images: fullFaceMaskImages('5c0ef824-8029-460a-bab6-8269ea420eb1'),
      description: `Who says that it has to be hard to read facial cues when you're wearing a face mask? Use this adorable mask to project good vibes all around and to let the world know: you're smiling!`,
      reviews: [
        {
          author: 'DumboTheClown',
          date: '9/28/20',
          rating: 5,
          content: `This mask makes me happy!`
        },
      ]
    },
    {
      id: 'apocalypse',
      title: 'Apocalypse Mask',
      link: '',
      images: fullFaceMaskImages('aab5243c-3815-4155-b616-b4ac59f43328'),
      description: `Everyone knows it's coming, but no one knows how many years we have left. So live your last days out in style with this bold face mask!`,
      reviews: [
        {
          author: 'FreedomLover76',
          date: '7/18/20',
          rating: 5,
          content: `The liberals have been saying I'm crazy for building my $200k prepper bunker for YEARS. Now who's the crazy one? Better to be crazy than unpreparred. That's what I always say.`
        },
        {
          author: 'octofuzz',
          date: '8/31/20',
          rating: 4,
          content: `Between the global pandemic, political instability, and a worsening climate crisis, things seem pretty f_cking grim. I guess we might as well have some fun with things...`
        },
        {
          author: 'SweetSalvation',
          date: '9/10/20',
          rating: 2,
          content: `The only apocalypse that's coming is one from sweet god above with his heavenly rapture so I don't appreciate the satanic implications of this mask the apocalypse is nothin to be afraid of that's what i say!`
        },
      ]
    },
    {
      id: 'freemason-blood-sacrifice',
      title: 'Freemason Blood Sacrifice Mask',
      link: '',
      images: fullFaceMaskImages('9b931020-ae11-4b9f-9839-96de6a0ead68'),
      description: ``,
      reviews: [
        {
          author: 'BullseyeBob',
          date: '8/18/20',
          rating: 4,
          content: `Even if this mask is a little too "on the nose", it gets an important message across. I can't count how many times this phrase saved my butt`
        },
      ]
    },
    {
      id: 'cluck',
      title: 'Cluck Mask',
      link: '',
      images: fullFaceMaskImages('104479fc-5499-4e55-bdb4-2ce7f68a6c78'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '9/28/20',
          rating: 2,
          content: `stupid`
        },
      ]
    },
  ]),
}

export default data
export const allData = [
  ...data.patriot,
  ...data.safety,
  ...data.branded,
  ...data.bargain,
]
