import React from 'react'

export type Review = {
  author: string
  date: string
  content: string
  rating: number
}

export type Item = {
  id: string
  title: string
  primaryIx: number
  images: Array<string>
  link: string
  description: React.ReactNode
  reviews: Array<Review>
  emText?: string
  featured?: boolean
}

export type Data = {
  patriot: Array<Item>
  safety: Array<Item>
  branded: Array<Item>
  bargain: Array<Item>
}


const tShirtImages = (id: string) => [
  process.env.PUBLIC_URL + '/images/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-1.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-2.jpeg',
]

const darkTshirtImages = (id: string) => [
  process.env.PUBLIC_URL + '/images/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-1.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-2.jpeg',
]

const fullFaceMaskImages = (id: string) => [
  process.env.PUBLIC_URL + '/images/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-1.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-2.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-3.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-4.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-5.jpeg',
]

const seeThroughImages = (id: string) => [
  process.env.PUBLIC_URL + '/images/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-1.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-2.jpeg',
]

const cottonImages = (id: string) => [
  process.env.PUBLIC_URL + '/images/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-1.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-2.jpeg',
]


const tanktopImages = (id: string) => [
  process.env.PUBLIC_URL + '/images/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-1.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-2.jpeg',
]

const lunchBoxImages = (id: string) => [
  process.env.PUBLIC_URL + '/images/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-1.jpeg',
]

const leggingImages = (id: string) => [
  process.env.PUBLIC_URL + '/images/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-1.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-2.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-3.jpeg',
]

const foldedImages = (id: string) => [
  process.env.PUBLIC_URL + '/images/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-1.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-2.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-3.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-4.jpeg',
]
const hatImages = (id: string) => [
  process.env.PUBLIC_URL + '/images/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-1.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-2.jpeg',
 ]


const data: Data = {
  patriot: [
    {
      id: 'proud-american-t',
      title: 'Proud American T',
      link: '',
      primaryIx: 0,
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
    // {
    //   id: 'afraid-of-feminism',
    //   title: 'Afraid of Feminism Mask',
    //   link: '',
    //   primaryIx: 4,
    //   images: fullFaceMaskImages('afraid-of-feminism'),
    //   description: "The fabric of American society has changed drastically over the last 70 years, due in no small part to the rise of feminism. Let the world know that you're scared of change, and miss simpler times.",
    //   reviews: [
    //     {
    //       author: 'SweetSalvation',
    //       date: '9/24/20',
    //       rating: 4,
    //       content: `I don't understand why any woman would say that they're a feminist it just doesn't make any sense to me why they wouldn't want to stay where they belong and that's in the kitchen making me a sandwich`
    //     },
    //     {
    //       author: 'CrystalBell',
    //       date: '9/28/20',
    //       rating: 3,
    //       content: `I would not wear this mask, personally, as feminism is a tremendous force of good in the world. But I'm glad that this mask exists so I know who to peg as an idiot.`
    //     }
    //   ]
    // },
    {
      id: 'george-cat',
      title: 'Henry George Cat Mask',
      link: '',
      primaryIx: 1,
      images: fullFaceMaskImages('george-cat'),
      description: <>Have you seen the cat? As most proponents of Henry George's Land Value Tax will tell you, once you "see the cat" and understand how deeply the LVT aligns with American values, you can't "unsee" it. Rock this vintage looks to tell everyone around you that you stand for Free Land, Free Trade, and Free People</>,
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
      id: 'guns-n-beer',
      title: 'Guns N Beer Mask',
      link: '',
      primaryIx: 1,
      images: fullFaceMaskImages('guns-n-beer'),
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
        },
        {
          author: 'YeeHaw',
          date: '9/27/20',
          rating: 4,
          content: `Definitely gets the point across.`
        }
      ]
    },
    {
      id: 'antifa-antico',
      title: 'Antifascist Anticommunist Mask',
      link: '',
      primaryIx: 1,
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
      primaryIx: 1,
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
    {
      id: 'adrenochrome',
      title: 'Crazy For Adrenochrome Mask',
      link: '',
      primaryIx: 5,
      images: fullFaceMaskImages('adrenochrome'),
      description: `Adrenochrome is a chemical compound with the molecular formula C9H9NO3 produced by the oxidation of adrenaline (epinephrine). The derivative carbazochrome is a hemostatic medication. Despite a similarity in chemical names, it is unrelated to chrome or chromium.`,
      reviews: [
        {
          author: 'Sarah_Johnson',
          date: '10/2/20',
          rating: 1,
          content: `Disgusting`
        },
        {
          author: 'TommyFlombego',
          date: '10/2/20',
          rating: 4,
          content: `What a lot of people don't get is that this is tongue-in-cheek. No one in their right mind is crazy for adrenochrome. That is, unless they're crazy.`
        },
        {
          author: 'SweetSalvation',
          date: '10/2/20',
          rating: 2,
          content: `This description doesn't even get to the meat of what adrenochroms is or why it's important so let me educate anyone who might be reading this: the onyl reason anyone gives two licks about adrenochrome is because the Satanic pedophiles that run the world drink the blood directly out of the veins of terrified children to get their fix of adrenochrome to stay young and vigorous. When was the last time you took a look at Joe Biden it's clear as crystal that he's drinkin that kiddie blood.`
        },
        {
          author: 'BullseyeBob',
          date: '10/4/20',
          rating: 3,
          content: `There seems to be quite a bit of misinformation floating around out there. Adrenochromeis a chemical that's metabolized by the adrenoline of terrified children. This is why it's imperative that the global elite terrify their victims before consoming their blood.`
        },
      ]
    },
    {
      id: 'wwg1wga-flag',
      title: 'WWG1WGA Flag Mask',
      link: '',
      primaryIx: 2,
      images: cottonImages('wwg1wga-flag'),
      description: `Celebrate the patriotic 1996 classic White Squall with this patriotic "Where We Go 1 We Go All" flag design.`,
      reviews: [
        {
          author: 'TommyFlombego',
          date: '8/21/20',
          rating: 3,
          content: `Eh, this one is sort of middle of the road. I'm not so sure that this will strike fear into the heart of the deep state`
        },

        {
          author: 'DumboTheClown',
          date: '9/21/20',
          rating: 5,
          content: `Very patriotic, and comfortable!`
        },
        {
          author: 'fuckface99',
          date: '9/23/20',
          rating: 4,
          content: `THIS DEAL IS A REAL STEAL`
        },
      ]
    },
    {
      id: 'covid-2020',
      title: 'Covid 2020 Cotton Mask',
      link: '',
      primaryIx: 0,
      images: cottonImages('covid-2020'),
      description: `Nothing captures the zeitgeist of 2020 like this hilarious satirical cotton mask, drawing attention to both the global pandemic that changed life as we know it and the American presidential election of 2020.`,
      reviews: [
        {
          author: 'username',
          date: '10/14/20',
          rating: 5,
          content: `biting satire`
        },

        {
          author: 'SweetSalvation',
          date: '10/16/20',
          rating: 5,
          content: `I'd sooner vote for corona virus than for Sleepy Joe Biden that's for damn sure!`
        },
      ]
    },
    {
      id: 'hoax',
      featured: true,
      title: 'HOAX Cotton Mask',
      link: '',
      primaryIx: 1,
      images: cottonImages('hoax'),
      description: `Hedge your bets by telling the world that you think COVID-19 is just a silly hoax, all while protecting yourself and other from the deadly virus if you happen to be incorrect. You can't lose!`,
      reviews: [
        {
          author: 'DumboTheClown',
          date: '9/5/20',
          rating: 5,
          content: `I can't lose!`
        },

        {
          author: 'BullseyeBob',
          date: '9/16/20',
          rating: 5,
          content: `This is one of the few face masks that really falls in line with my sensibilities. I most certainly think that COVID-19 is a hoax, but not in the way that most people think. The virus is absolutely floating around out there, but let's jsut say that the government hasn't been 100% up front with us about its effects on the human body. Additionally, there are a million reasons why you should wear a face mask aside from the "novel" coronavirus. It's just common sense.`
        },
      ]
    },
    {
      id: 'usa',
      title: 'USA Mask',
      link: '',
      primaryIx: 1,
      images: fullFaceMaskImages('usa'),
      description: `Honor the greatest country in the world by proudly displaying its initials across your face. Perfect for international travel.`,
      reviews: [
        {
          author: 'Hubert',
          date: '7/4/20',
          rating: 3,
          content: `A little too modernist for my taste, but not terrible.`
        },
        {
          author: 'ProudAmerican76',
          date: '7/4/20',
          rating: 4,
          content: `Yes, definitely a little too modernist... strikes me as a bit of a communist aesthetic even. But nonetheless, this mask is loud and proud.`
        },
      ]
    },
    {
      id: 'real-americans',
      title: 'Real Americans Mask',
      link: '',
      primaryIx: 2,
      images: fullFaceMaskImages('real-americans'),
      description: `Real Americans know that individual liberty is the first and foremost driving force of what they do in public. No one can tell you what to do because you're an American. And with that freedom comes the responsability of not infringing on anyone else's liberty, no matter the cost. So when it comes to the global spread of a deadly infectous disease that's hidden in plain sight, real Americans know that that it's their responsability, as an American, to take all the necessary precautions. Real Americans wear face masks, and this mask is the perfect way to fulfil your duty as a Real American.`,
      reviews: [
        {
          author: 'DumboTheClown',
          date: '9/9/20',
          rating: 5,
          content: `Everyone do your duty!`
        },
        {
          author: 'ProudAmerican76',
          date: '9/13/20',
          rating: 5,
          content: `I'm a stone-cold libertarian, and what I think what a lot of people don't realize is that A) This virus is real and came from a government research lab, B) Lockdowns are illegal and immoral, and C) If you aren't wearing a mask that is an ACT OF AGGRESSION towards me -- you're infringing on my rights as an American citizen to walk around without your virus particles being spewed all over my face.`
        },
      ]
    },
    {
      id: 'antifa-antico-lunch',
      title: 'Antifascist Anticommunist Lunchbox',
      link: '',
      primaryIx: 0,
      images: lunchBoxImages('antifa-antico-lunch'),
      description: `Be the coolest one amongst your co workers when you whip out this exciting new lunchbox. Coupled with the antifa-antico face mask, there will be no mistaking it: You don't like fascists or communists.`,
      reviews: [
        {
          author: 'SweetSalvation',
          date: '8/23/20',
          rating: 5,
          content: `I pulled this one out the other day when I was eating lunch with the boys and they all got a real hoot out of it except for phil because he's a pinko`
        },
        {
          author: 'haris',
          date: '8/29/20',
          rating: 2,
          content: `I thought this was supposed to come with an apple, but it didn't`
        },
        {
          author: 'anushv',
          date: '9/23/20',
          rating: 1,
          content: `This is dumb. Antico is an idea, not an organization`
        },
      ]
    },

    // TODO Description
    {
      id: 'american-flag',
      title: 'American Flag Pleated Mask',
      link: '',
      primaryIx: 1,
      images: foldedImages('american-flag'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
    {
      id: 'wwg1wga-text',
      title: 'WWG1WGA Text Pleated Mask',
      link: '',
      primaryIx: 1,
      images: foldedImages('wwg1wga-text'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
  ],
  safety: [
    {
      id: 'gas-mask',
      featured: true,
      title: 'Gas Mask Mask',
      link: '',
      primaryIx: 3,
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
      primaryIx: 4,
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
      primaryIx: 5,
      images: fullFaceMaskImages('infected2-mask'),
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
      featured: true,
      title: 'Infected T 1',
      link: '',
      primaryIx: 0,
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
      primaryIx: 1,
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
      primaryIx: 1,
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
      featured: true,
      title: 'Wear Your Mask Mask',
      link: '',
      primaryIx: 0,
      images: fullFaceMaskImages('wear-your-mask'),
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
      primaryIx: 2,
      emText: 'ANTI-FACIAL RECOG',
      images: fullFaceMaskImages('anti-facial1'),
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
    {
      id: '5g-bad',
      title: '5G Bad mask',
      link: '',
      primaryIx: 1,
      images: fullFaceMaskImages('5g-bad'),
      description: `With the fifth generation of telecom infrastucture upon us, it's natural to have your doubts regarding it's effects on public safety. `,
      reviews: [
        {
          author: 'EnergyMatters',
          date: '8/15/20',
          rating: 2,
          content: `Given how sensitive I am to elctro magnetic frequencies (EMFs), this type of mask obviously appeals to me. However, I have to say that this mask fails to live up to my expectations. Wearing this mask only reduces my headaches by 16%... which is better than nothing, but not quite as effective as some of the other products in the Rona Merch catalogue.`
        },
      ]
    },


    // TODO Description
    {
      id: 'sovereign-t',
      title: 'Sovereign Citizen T',
      link: '',
      primaryIx: 1,
      images: tShirtImages('sovereign-t'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },

    {
      id: 'sovereign-mask',
      title: 'Sovereign Citizen Pleated Mask',
      link: '',
      primaryIx: 0,
      images: foldedImages('sovereign-mask'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },

    {
      id: 'emf-tower',
      title: 'EMF Tower Pleated Mask',
      link: '',
      primaryIx: 2,
      images: foldedImages('emf-tower'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
    {
      id: 'boo-hoo',
      title: 'Boo Hoo Anti Facial Recognition Mask',
      emText: 'ANTI-FACIAL RECOG',
      link: '',
      primaryIx: 2,
      images: foldedImages('boo-hoo'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
  ],

  branded: [
    // fastcash-lime -> Fast Cash Super Plus T [double logo backtext. picture: black shirt, teal/purple logo ] "the gold standard of fastcash t shirts"
    // fastcash-bw-dark -> Fast Cash Plus T [logo back text] "Solid, dependable shirt"
    // fastcash-bw -> Fast Cash T [logo] "Get the most bang for your buck with this thrifty FastCash Logo T. Not quite as flashy as the FastCash Plus and FastCash Super Plus Ts, but still a great deal. A great bargain of an investment"
    // NOT-logo "Text redacted for legal reasons"
    {
      id: 'fastcash-super-plus-t',
      featured: true,
      emText: 'BEST SELLER',
      title: 'FastCash Super Plus Logo T',
      primaryIx: 0,
      link: '',
      images: tShirtImages('fastcash-super-plus-t'),
      description: <>The gold standard of FastCash Logo Ts, with an inverse-color text shadow along with the the back investment text. Now available in SAFETY GREEN, allowing you to stand out from the crowd -- all while letting everyone know that you're a winner with the bank account to back it up. Great for biking safely at night. Drivers will think twice before they hit you with their vehicle, lest they find themselves in the middle of a costly lawsuit!<br/><a className="link" href="http://fastcashmoneyplus.biz" target="_blank">Sponsored by FastCashMoneyPlus.biz</a></>,
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
      id: 'fastcash-t',
      title: 'FastCash Logo T',
      link: 'https://www.zazzle.com/fast_cash_logo_t_t_shirt-235242209585069073',
      primaryIx: 1,
      images: tShirtImages('fastcash-t'),
      description: <>Get the most bang for your buck with this thrifty FastCash Logo T. Not quite as flashy as the FastCash Plus and FastCash Super Plus Ts, but still a great deal. A great bargain of an investment<br/><a className="link" href="http://fastcashmoneyplus.biz" target="_blank">Sponsored by FastCashMoneyPlus.biz</a></>,
      reviews: [
        {
          author: 'VinceSlickson',
          date: '9/27/20',
          rating: 5,
          content: `A great shirt for someone who's not looking for anything fancy, but still knows that they're a winner`
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
      id: 'fastcash-plus-t',
      title: 'FastCash Plus Logo T',
      link: '',
      primaryIx: 0,
      images: darkTshirtImages('fastcash-plus-t'),
      description: <>The Swiss-Army knife of FastCash logo Ts. The addition of the iconic FastCashMoneyPlus investment text on the back makes this a nice upgrade from the standard FastCash T, even if it doesn't have the flair of the text shadow found on the FastCash Super Plus T. No frills. All business. Break out this sleek dark rendition for any occasion<br/><a className="link" href="http://fastcashmoneyplus.biz" target="_blank">Sponsored by FastCashMoneyPlus.biz</a></>,
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
      primaryIx: 2,
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
    {
      id: `ronamerch-mask`,
      featured: true,
      title: "Rona Merch Co. Mask Official",
      link: '',
      primaryIx: 4,
      description: 'Strut your stuff with the OFFICIAL Rona Merch Co. face mask. Get in on the ground floor of the hottest new face mask brand, all while supporting small businesses throughout the pandemic.',
      images: fullFaceMaskImages('ronamerch-mask'),
      reviews: [
        {
          author: 'username',
          date: '8/10/20',
          rating: 5,
          content: `I like this mask and the branding`
        },
        {
          author: 'CrystalBell',
          date: '8/12/20',
          rating: 2,
          content: 'This mask is a hot mess'
        },
        {
          author: 'ActualPleiadian',
          date: '9/3/20',
          rating: 4,
          content: `This mask looks great! I would definitely wear it!`
        }
      ],
    },
    {
      id: `ronamerch-t`,
      title: "Rona Merch Co. T Official",
      link: '',
      primaryIx: 0,
      description: 'Strut your stuff with the OFFICIAL Rona Merch Co. T. Get in on the ground floor of the hottest new face mask brand, all while supporting small businesses throughout the pandemic.',
      images: tShirtImages('ronamerch-t'),
      reviews: [
        {
          author: 'username',
          date: '8/10/20',
          rating: 5,
          content: `I like this mask and the branding`
        },
        {
          author: 'fuckface99',
          date: '8/21/20',
          rating: 5,
          content: 'THIS SHIRT ROCKS'
        },
        {
          author: 'DumboTheClown',
          date: '9/1/20',
          rating: 5,
          content: `Very stylish!`
        }
      ],
    },
    {
      id: `fake-news`,
      title: "Fake News Mask",
      link: '',
      primaryIx: 5,
      description: <>As the informational landscape of America shifts away from truth and closer to fiction, this mask serves as a reminder to remain vigilant and skeptical of misinformation. <br/><a className="link" href="http://fakebullshit.news" target="_blank">Sponsored by FakeBullshit.news</a></>,
      images: fullFaceMaskImages('fake-news'),
      reviews: [
        {
          author: 'SweetSalvation',
          date: '9/16/20',
          rating: 5,
          content: `Nothin gets me riled up more than seeing all the propaganda being served up on a hot platter by all the FAKE news organizations on the CNN show which is why I get all my news from trusted sources that don't hate America.`
        },
        {
          author: 'WendyPilsen',
          date: '9/21/20',
          rating: 5,
          content: `I get all my news from fake bullshit news: http://fakebullshit.news`
        },
      ],
    },
    {
      id: 'rm-see-through',
      title: "Rona Merch See Through Mask",
      link: '',
      primaryIx: 0,
      description: '',
      images: seeThroughImages('rm-see-through'),
      reviews: [
        {
          author: 'DumboTheClown',
          date: '9/1/20',
          rating: 5,
          content: `When I sneeze the Rona Merch logo protects my friends!`
        },
      ],
    },
    {
      id: 'fastcash-premium',
      title: "FastCash Premium Cotton Mask",
      link: '',
      primaryIx: 2,
      description: `A formal face mask for the most formal occasions. Pair this elegent beauty with a tux or black dress of your choosing. Or, wear it along with your New Yorker "all black" outfit. Either way, you'll be making one thing clear: you like making money, and you're good at it.`,
      images: cottonImages('fastcash-premium'),
      reviews: [
        {
          author: 'VinceSlickson',
          date: '7/1/20',
          rating: 5,
          content: `Wow, simply impecable.`
        },
        {
          author: 'PickleNY',
          date: '7/8/20',
          rating: 5,
          content: `This mask is so cool that I'd pay $20 for it if I could!`
        },
      ],
    },
    {
      id: 'not-meddly',
      title: "Not A Security Meddly Cotton Mask",
      link: '',
      primaryIx: 1,
      emText: 'LIMITED EDITION',
      description: `The famous Not A Security (NOT) ERC-20 token releases it's limited edition Logo Meddly Cotton Face Mask. Purchase while supplies last!`,
      images: cottonImages('not-meddly'),
      reviews: [
        {
          author: 'DumboTheClown',
          date: '8/8/20',
          rating: 5,
          content: `What a cool collection of logos!`
        },
      ],
    },
    {
      id: 'fastcash-leggings',
      title: "FastCash Leggings",
      link: '',
      primaryIx: 2,
      description: `Perfect for yoga, running, or working out`,
      images: leggingImages('fastcash-leggings'),
      reviews: [
        {
          author: 'Ever_Wondering',
          date: '8/9/20',
          rating: 5,
          content: `I LOVE this. Definitely going to wear this on my next outting.`
        },
      ],
    },
    // TODO descriptions, comments
    {
      id: 'fastcash-logo-folded',
      title: 'Fast Logo Pleated Mask',
      link: '',
      primaryIx: 1,
      images: foldedImages('fastcash-logo-folded'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },

    {
      id: 'not-mask',
      title: 'NOT Logo Mask',
      link: '',
      primaryIx: 1,
      images: fullFaceMaskImages('not-mask'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
   {
      id: 'not-t',
      title: 'NOT T',
      link: '',
      primaryIx: 0,
      images: fullFaceMaskImages('not-t'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
   {
      id: 'fastcash-text-folded',
      title: 'FastCash Text Pleated Mask',
      link: '',
      primaryIx: 1,
      images: foldedImages('fastcash-text-folded'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
  ],

  bargain: [
    {
      id: 'wakka-wakka',
      title: 'Wakka Wakka Mask',
      link: '',
      primaryIx: 1,
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
      featured: true,
      title: 'Smiling Eyes Mask',
      link: '',
      primaryIx: 2,
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
      primaryIx: 0,
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
      primaryIx: 3,
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
      primaryIx: 1,
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
    {
      id: `pattern1`,
      title: "Pattern 1",
      link: '',
      primaryIx: 4,
      description: '',
      images: fullFaceMaskImages('pattern1'),
      reviews: [
        {
          author: 'TommyFlombego',
          date: '9/11/20',
          rating: 3,
          content: `Do you see the all-seeing eye?`
        },
      ],
    },
    {
      id: 'smarty-pants',
      title: 'Smarty Pants See Through Mask',
      link: '',
      primaryIx: 1,
      images: seeThroughImages('smarty-pants'),
      description: `Who says you can't be safe AND smart? Embrace your inner nerd with this chic see through mask.`,
      reviews: [
        {
          author: 'stupid',
          date: '9/28/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
    {
      id: 'useless',
      title: 'Useless T',
      link: '',
      primaryIx: 0,
      images: darkTshirtImages('useless'),
      description: ``,
      reviews: [
        {
          author: 'DontCallMeRaul',
          date: '9/13/20',
          rating: 5,
          content: `This shirt is great!`
        },
        {
          author: 'stupid',
          date: '9/31/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
    {
      id: 'branded',
      title: 'Branded Cotton Mask',
      link: '',
      primaryIx: 1,
      images: cottonImages('branded'),
      description: `Be the life of the party as all your friends try to scan your face at your next social gathering`,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
    {
      id: 'flash-sale',
      title: 'Flash Sale Tanktop',
      link: '',
      primaryIx: 0,
      emText: 'SEXY',
      images: tanktopImages('flash-sale'),
      description: `This sexy little number is one of the hottest selling items of the summer. Wear it to the beach, or to impress a special someone at home.`,
      reviews: [
        {
          author: 'heatherhot6',
          date: '7/12/20',
          rating: 1,
          content: `sexy`
        },
        {
          author: 'StarSeeker',
          date: '8/10/20',
          rating: 5,
          content: `This is the only shirt I can truly breathe in.`
        },
        {
          author: 'TommyFlombego',
          date: '8/31/20',
          rating: 1,
          content: `How old is this model and you're calling her sexy? Is she supposed to "flash" me? Gross.`
        },
      ]
    },

    // TODO descriptions,comments
    {
      id: 'dollar-dollar',
      title: 'Dollar Dollar Pleated Mask',
      link: '',
      primaryIx: 0,
      images: foldedImages('dollar-dollar'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
    {
      id: 'knotty-mask',
      title: 'Knotty Pleated Mask',
      link: '',
      primaryIx: 1,
      images: foldedImages('knotty-mask'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
    {
      id: 'mask-mask',
      title: 'Mask Mask',
      link: '',
      primaryIx: 0,
      images: fullFaceMaskImages('mask-mask'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
    {
      id: 'shale-bad',
      title: 'Shale Bad T',
      link: '',
      primaryIx: 0,
      images: darkTshirtImages('shale-bad'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
    {
      id: 'hat-hat',
      title: 'Hat Hat',
      link: '',
      primaryIx: 1,
      images: hatImages('hat-hat'),
      description: ``,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
      ]
    },
  ],
}

export default data
export const allData = [
  ...data.patriot,
  ...data.safety,
  ...data.branded,
  ...data.bargain,
]
