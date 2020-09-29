import {shuffle} from 'lodash'

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


const tShirtImages = (id: string) => shuffle([
  process.env.PUBLIC_URL + '/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/' + id + '-1.jpeg',
  process.env.PUBLIC_URL + '/' + id + '-2.jpeg',
])

const darkTshirtImages = (id: string) => shuffle([
  process.env.PUBLIC_URL + '/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/' + id + '-1.jpeg',
  process.env.PUBLIC_URL + '/' + id + '-2.jpeg',
])

const fullFaceMaskImages = (id: string) => shuffle([
  process.env.PUBLIC_URL + '/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/' + id + '-1.jpeg',
  process.env.PUBLIC_URL + '/' + id + '-2.jpeg',
  process.env.PUBLIC_URL + '/' + id + '-3.jpeg',
  process.env.PUBLIC_URL + '/' + id + '-4.jpeg',
  process.env.PUBLIC_URL + '/' + id + '-5.jpeg',
])

// TODO
  // full masks
    // - crazy for adrenachrome https://www.zazzle.com/pd/spp?dz=01d34249-179e-4d73-8af0-ca2eed56a9a5
    // - fake news
    // - rona merch co https://www.zazzle.com/pd/spp?dz=9bc3dd90-6f52-4726-8814-44e43c4b8305
    // - pattern 1 https://www.zazzle.com/pd/spp?dz=a836f76a-c758-4de0-968f-ed4a8322134e

const data: Data = {
  patriot: shuffle([
    {
      id: 'proud-american-t',
      title: 'Proud American T',
      link: '',
      images: tShirtImages('proud-american-t'),
      description: "There's no better way to show the world that you're a proud American than by flaunting it with this stunning image of America's mascot: the majestic Bald Eagle",
      reviews: [
        {
          author: 'SweetSalvation',
          date: '9/25/20',
          rating: 4,
          content: `I wear this shirt every day that i wake up and feel proud to be an American on God's green earth let me tell ya! The only thing that would make this better is if the picutre eagle was a bit sharper but other than that it's my favorite t shirt in my arsenal!`
        }
      ]
    },
    {
      id: 'afraid-of-feminism',
      title: 'Afraid of Feminism Mask',
      link: '',
      images: fullFaceMaskImages('proud-american-t'),
      description: "The fabric of American society has changed drastically over the last 70 years, due in no small part to the rise of feminism. Let the world know that you're scared of change, and miss simpler times.",
      reviews: [
        {
          author: 'SweetSalvation',
          date: '9/24/20',
          rating: 4,
          content: `I don't understand why any woman would say that they're a feminist it just doesn't make any sense to me why they wouldn't want to stay where they belong and that's in the kitchen making me a sandwich`
        },
        {
          author: 'CrystalBell',
          date: '9/28/20',
          rating: 3,
          content: `I would not wear this mask, personally, as feminism is a tremendous force of good in the world. But I'm glad that this mask exists so I know who to peg as an idiot.`
        }
      ]
    },
    {
      id: 'george-cat',
      title: 'Henry George Cat Mask',
      link: '',
      images: fullFaceMaskImages('george-cat'),
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
      images: fullFaceMaskImages('guns-n-beer-dark'),
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
      images: fullFaceMaskImages('guns-n-beer-white'),
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
      images: fullFaceMaskImages('antifa-antico'),
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
      images: fullFaceMaskImages('wwg1wga-q'),
      description: `Celebrate the patriotic 1996 classic White Squall with this fetching "Where We Go 1 We Go All" minimalist design.`,
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
      images: fullFaceMaskImages('gas-mask'),
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
      images: fullFaceMaskImages('infected1-mask'),
      description: `There's only one sure-fire way to make sure that people stay 6 feet away from you -- and that's by implying that you may be infected with COVID-19. `,
      reviews: [
        {
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
      id: 'infected2-mask',
      title: 'Infected Mask 2',
      link: '',
      images: fullFaceMaskImages('infected1-mask'),
      description: `There's only one sure-fire way to make sure that people stay 6 feet away from you -- and that's by implying that you may be infected with COVID-19. `,
      reviews: [
        {
          author: 'HunterMcFarlane',
          date: '7/5/20',
          rating: 0,
          content: `Again, this mask was NOT INFECTED, Why do people buy this garbage?`
        },
        {
          author: 'Hubert',
          date: '9/2/20',
          rating: 4,
          content: `This mask reminds me of my days as a young man in Korea. Not pleasent memories at all. But the mask is very comfortable.`
        },
      ]
    },
    {
      id: 'infected1-t',
      title: 'Infected T 1',
      link: '',
      images: tShirtImages('infected1-t'),
      description: `There's only one sure-fire way to make sure that people stay 6 feet away from you -- and that's by implying that you may be infected with COVID-19. `,
      reviews: [
        {
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
      id: 'infected2-t',
      title: 'Infected T 2',
      link: '',
      images: tShirtImages('infected2-t'),
      description: `There's only one sure-fire way to make sure that people stay 6 feet away from you -- and that's by implying that you may be infected with COVID-19. `,
      reviews: [
      {
          author: 'ActualPleiadian',
          date: '8/1/20',
          rating: 5,
          content: `This shirt is great!`
        },
      ]
    },
    {
      id: 'radio-wave-protection',
      title: 'Radio Wave Protection Mask',
      link: '',
      images: fullFaceMaskImages('radio-wave-protection'),
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
    {
      id: 'wear-your-mask',
      title: 'Wear Your Mask Mask',
      link: '',
      images: tShirtImages('wear-your-mask'),
      description: `Sometimes you just want to let your mask do the talking for you. Perfect for long subway rides or grocery shopping when you want to give nearby non-mask-wearing bystanders a reminder that they should wear their fucking mask.`,
      reviews: [
        {
          author: 'YeeHaw',
          date: '8/30/20',
          rating: 4,
          content: `Down here in Florida some people just aren't respectful. And usually I just don't want to open my mouth`
        },
        {
          author: 'octofuzz',
          date: '9/2/20',
          rating: 5,
          content: `This mask is pretty solid overall. It definitely gets the point across. Sometimes when I'm riding the subway and I see an idiot not wearing their mask, I'll look them directly in the eyes and point at my face. Works every time.`
        },
      ]
    },
    {
      id: 'anti-facial1',
      title: 'Anti Facial Recognition Mask 1',
      link: '',
      images: tShirtImages('anti-facial1'),
      description: `Whether you're protesting for civil rights or freeing children from the grips of satanic pedophiles, one thing is constant: the government is increasingly using facial recognition technology to keep tabs on you and your political leanings. Using the latest advancements in anti-facial recognition technology, this mask will garble the signal of anyone watching you, making it hard to link you to groups considered problematic by authority figures.`,
      reviews: [
        {
          author: 'TargetedTom',
          date: '7/12/20',
          rating: 5,
          content: `Thank f_cking god. I've needed a mask like this for quite some time. The description really sells this product short. There are plenty of agencies and groups who employ facial recognition and gang stalking techniques that you need to watch out for. Forget COVID -- this is mask a must-wear ant time you leave the house, pandemic or no pandemic.`
        },
        {
          author: 'pastisfuture',
          date: '9/11/20',
          rating: 5,
          content: `I have to agree with @TargetedTom here. Anti-facial recog masks are critical in today's day and age`
        },
      ]
    },

  ]),
  branded: shuffle([
    {
      id: 'fastcash-lime',
      title: 'FastCash Logo T Lime Green Purple',
      link: '',
      images: tShirtImages('fastcash-lime'),
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
      id: 'fastcash-bw',
      title: 'FastCash Logo B/W T',
      link: 'https://www.zazzle.com/fastcash_logo_b_w_t_t_shirt-235890455630096256',
      images: tShirtImages('fastcash-bw'),
      description: `Nothing beats the classic style of the Black/White FastCashMoneyPlus logo T. No frills. All business.`,
      reviews: [
        {
          author: 'VinceSlickson',
          date: '9/27/20',
          rating: 5,
          content: `Clearly one of the best designed t-shirts on the market. I'd also check out the dark version of this shirt for more formal occasions`
        },
        {
          author: 'DumboTheClown',
          date: '9/28/20',
          rating: 5,
          content: `What a great shirt!`
        },
        {
          author: 'WendyPilsen',
          date: '9/28/20',
          rating: 5,
          content: `this shirt fits well`
        },
      ]
    },
    {
      id: 'fastcash-bw-dark',
      title: 'FastCash Logo B/W Dark T',
      link: '',
      images: darkTshirtImages('fastcash-bw-dark'),
      description: `Nothing beats the classic style of the Black/White FastCashMoneyPlus logo T. No frills. All business. Break out this sleek dark rendition for any occasion`,
      reviews: [
        {
          author: 'VinceSlickson',
          date: '9/27/20',
          rating: 5,
          content: `This, frankly, is my favorite t-shirt of all time. Well fitting, slick logo, comfortable, stylish, and versatile enough to wear for any occasion. This belongs in everyone's wardrobe.`
        },
        {
          author: 'WendyPilsen',
          date: '9/29/20',
          rating: 5,
          content: `i have several pairs of this shirt`
        },
      ]
    },
    {
      id: `fastcash-colorful`,
      title: "FastCash Logo Mask Colorful",
      link: '',
      description: 'This vibrant, multi-colored face mask is the perfect way to express your identity as someone who is both forward-thinking and ambitious.',
      images: fullFaceMaskImages('fastcash-colorful'),
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
  ]),
  bargain: shuffle([
    {
      id: 'wakka-wakka',
      title: 'Wakka Wakka Mask',
      link: '',
      images: fullFaceMaskImages('wakka-wakka'),
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
      images: fullFaceMaskImages('smiling-eyes'),
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
      images: fullFaceMaskImages('apocalypse'),
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
      images: fullFaceMaskImages('freemason-blood-sacrifice'),
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
      images: fullFaceMaskImages('cluck'),
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
