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
  soldOut?: boolean
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

const womanShirt = (id: string) => [
  process.env.PUBLIC_URL + '/images/' + id + '-0.jpeg',
  process.env.PUBLIC_URL + '/images/' + id + '-1.jpeg',
]


const data: Data = {
  patriot: [
    {
      id: 'proud-american-t',
      title: 'Proud American T',
      link: 'https://www.zazzle.com/z/ax3s0bqh?rf=238012063771219973',
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
    {
      id: 'george-cat',
      title: 'Henry George Cat Mask',
      link: 'https://www.zazzle.com/z/aqpgpbxv?rf=238012063771219973',
      primaryIx: 1,
      images: fullFaceMaskImages('george-cat'),
      description: <>Have you seen the cat? As most proponents of Henry George's Land Value Tax will tell you, once you "see the cat" and understand how deeply the LVT aligns with American values, you can't "unsee" it. Rock this vintage look to tell everyone around you that you stand for Free Land, Free Trade, and Free People.</>,
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
      link: 'https://www.zazzle.com/z/lyvbtkqh?rf=238012063771219973',
      primaryIx: 1,
      images: fullFaceMaskImages('guns-n-beer'),
      description: "Nothing is more American then drinking beer and shooting guns. Let your neighbors know what you're really all about.",
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
      link: 'https://www.zazzle.com/z/araljafe?rf=238012063771219973',
      primaryIx: 1,
      images: fullFaceMaskImages('antifa-antico'),
      description: "Real Americans hate Fascism as much as they hate Communism. Show the world that you're a real American with this sleek modernist design.",
      reviews: [
        {
          author: 'SweetSalvation',
          date: '9/24/20',
          rating: 2,
          content: `I don't know about this one...`
        }
      ]
    },
    // REJECTED
    {
      id: 'wwg1wga-q',
      title: 'WWG1WGA Q Mask',
      soldOut: true,
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
      link: 'https://www.zazzle.com/z/ayp6t3hk?rf=238012063771219973',
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
    // REJECTED
    {
      id: 'wwg1wga-flag',
      title: 'WWG1WGA Flag Mask',
      link: '',
      soldOut: true,
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
      title: 'Covid 2020 Mask',
      link: 'https://www.zazzle.com/z/zubbqmnr?rf=238012063771219973',
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
      title: 'HOAX Mask',
      link: 'https://www.zazzle.com/z/18ifgqbv?rf=238012063771219973',
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
        {
          author: 'HarryManson',
          date: '9/23/20',
          rating: 5,
          content: `Since the end of 2019 I've been living in an alternate reality on Tuesdays and Thursdays. Today's a Wednesday, so I'm a little disoriented from the switching back and forth and forgot which reality is the real alternate and which is the real one. But one of them doesn't have any of this covid nonsense going on. Life carries on as normal and people don't wear masks all day. If folks in the other reality don't need to wear masks and they're all fine, then I don't think the people in this reality need to wear them either. But people in non-alternate reality yell at me when I don't wear a mask and keep it over my nose, so I do it anyhow. If that makes people feel better, then so be it.`
        },
        {
          author: 'schoonerscaptain',
          date: '9/29/20',
          rating: 3,
          content: `Wait, is the mask a hoax or is covid a hoax? I don't get it.`
        },
        {
          author: 'FrankFrankson',
          date: '10/05/20',
          rating: 4,
          content: `The straps were a little too small for my ears, resulting in a tight fit. But that's my fault since I chose the 6.5 inch straps at checkout. Don't make the same mistake I did!`
        },
      ]
    },
    {
      id: 'usa',
      title: 'USA Mask',
      link: 'https://www.zazzle.com/z/fwtio3kk?rf=238012063771219973',
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
      emText: 'REAL AMERICANS WEAR FACE MASKS',
      title: 'Real Americans Mask',
      link: 'https://www.zazzle.com/z/attc209i?rf=238012063771219973',
      primaryIx: 2,
      images: fullFaceMaskImages('real-americans'),
      description: `Real Americans know that individual liberty is the first and foremost driving force of what they do in public. No one can tell you what to do because you're an American. And with that freedom comes the responsibility of not infringing on anyone else's liberty, no matter the cost. So when it comes to the global spread of a deadly infectious disease that's hidden in plain sight, real Americans know that that it's their responsibility, as an American, to take all the necessary precautions. Real Americans wear face masks, and this mask is the perfect way to fulfill your duty as a Real American.`,
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
    // REJECTED??
    {
      id: 'antifa-antico-lunch',
      soldOut: true,
      title: 'Antifascist Anticommunist Lunchbox',
      link: 'https://www.zazzle.com/z/ar7u429e?rf=238012063771219973',
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
    {
      id: 'american-flag',
      title: 'American Flag Pleated Mask',
      link: 'https://www.zazzle.com/z/aph85s08?rf=238012063771219973',
      description: 'Nothing is as iconic as the American flag. Wear it proudly across your face to pledge your allegiance to the greatest country on earth.',
      primaryIx: 1,
      images: foldedImages('american-flag'),
      reviews: [
        {
          author: 'anushv',
          date: '9/23/20',
          rating: 3,
          content: `Can I still wear this if I'm Canadian?`
        },
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
        {
          author: 'SweetSalvation',
          date: '10/3/20',
          rating: 5,
          content: `This mask aint stupid like some of the other reviewers are saying it's a proud display that you're an American, and nothing less`
        },
      ]
    },
    // REJECTED
    {
      id: 'wwg1wga-text',
      soldOut: true,
      title: 'WWG1WGA Text Pleated Mask',
      link: '',
      primaryIx: 1,
      images: foldedImages('wwg1wga-text'),
      description: `Celebrate the patriotic 1996 classic White Squall with this patriotic design.`,
      reviews: [
        {
          author: 'DumboTheClown',
          date: '9/21/20',
          rating: 3,
          content: `I don't get it. What does this mean?`
        },
        {
          author: 'TeachersPet',
          date: '9/24/20',
          rating: 3,
          content: `I hear you loud and clear!`
        },
      ]
    },
    {
      id: 'donate-to-save',
      title: 'Donate to Save America T',
      link: 'https://www.zazzle.com/donate_to_save_america_t_shirt-235780360309234967',
      description: 'If you want to show your country that you\'re the Best Patriot around, nothing beats this slick Official donation T!',
      primaryIx: 0,
      images: tShirtImages('donate-to-save'),
      reviews: [
        {
          author: 'outerpockets',
          date: '7/4/22',
          rating: 5,
          content: `This is my favorite T shirt! I bought it in a heartbeat!`
        },
        {
          author: 'stupid',
          date: '7/10/22',
          rating: 1,
          content: `stupid`
        },
        {
          author: 'SweetSalvation',
          date: '7/11/22',
          rating: 5,
          content: `Every time President Trump sends me an email to defeat sleepy joe biden I do my patriotic civil duty to support this country that I love more than just about anything except God himself because those radical leftists will get control of this country over my dead body!`
        },
      ]
    }
  ],


  safety: [
    {
      id: 'anti-facial2',
      title: 'Anti Facial Recognition Mask 2',
      link: 'https://www.zazzle.com/z/avwgzmi7?rf=238012063771219973',
      primaryIx: 2,
      emText: 'ANTI-FACIAL RECOG',
      images: fullFaceMaskImages('anti-facial2'),
      description: `Regardless of whether you believe COVID-19 is real, the deep state stealing and deep faking your identity is now just a plain fact of life. By reverse engineering Illuminati technologies, our uniquely patterned deep learned masks are guaranteed to scramble the government's facial recognition algorithms, making sure you get home safe to you and yours, "365-24/7". `,
      reviews: [
        {
          author: 'friendlyfriend',
          date: '8/12/20',
          rating: 5,
          content: `They thought I was a pumpkin!`
        },
        {
          author: 'TargetedTom',
          date: '8/15/20',
          rating: 5,
          content: `This is another solid one. It seems like some of the algos that had been tracking me got used to the masks with human faces on them. But this one appears to have thrown them off the scent.`
        },
      ]
    },
    {
      id: 'gas-mask',
      featured: true,
      title: 'Gas Mask Mask',
      link: 'https://www.zazzle.com/z/afyw5e3j?rf=238012063771219973',
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
          author: 'PickleNY',
          date: '9/28/20',
          rating: 3,
          content: `Is this mask N95 or higher?`
        },
        {
          author: 'DumboTheClown',
          date: '10/05/20',
          rating: 5,
          content: `I wouldn't leave home without it!`
        },
        {
          author: 'SweetSalvation',
          date: '10/07/20',
          rating: 1,
          content: `I don't like this mask or anyone wearing it i can hardly breathe whenever this damn contraption is on my face!`
        },
        {
          author: 'octofuzz',
          date: '9/30/20',
          rating: 3,
          content: `I don't get it -- is the picture of the gas mask supposed to make this mask safer? In any case, I suppose it looks cool.`
        },
      ]
    },
    {
      id: 'infected1-t',
      featured: true,
      title: 'Infected T 1',
      link: 'https://www.zazzle.com/z/1ljw4n7t?rf=238012063771219973',
      primaryIx: 0,
      images: tShirtImages('infected1-t'),
      description: `There's only one sure-fire way to make sure that people stay 6 feet away from you -- and that's by implying that you may be infected with COVID-19. `,
      reviews: [
        {
          author: 'HunterMcFarlane',
          date: '7/5/20',
          rating: 2,
          content: `Very dissapointing. This shirt was NOT INFECTED, much like the title promises. I tried to infect my kids with it so they could build their antibodies, but now they are totally fine. WOULD NOT BUY THIS PRODUCT AGAIN! However, unfortunately for me, my daghter really likes the color and the design of this ugly shirt. She thinks it's "edgy" and won't stop wearing it around the house. At least someone likes it. `
        },
        {
          author: 'TargetedTom',
          date: '8/31/20',
          rating: 4,
          content: `There's this one guy who lives in my building who won't leave me the f_ck alone... That is, until I started wearing this shirt. I still see him more than I'd like, but at least now he sure as hell stays 6 feet away from me.`
        },
        {
          author: 'CrystalBell',
          date: '9/2/20',
          rating: 2,
          content: `I find this tasteless, to be perfectly honest. Tons of bad energy here. Would not reccomend`
        },
        {
          author: 'SweetSalvation',
          date: '9/20/20',
          rating: 2,
          content: `You look like a goddamn pumpkin wearing this outfit`
        },
      ]
    },
    {
      id: 'radio-wave-protection',
      title: 'Radio Wave Protection Mask',
      link: 'https://www.zazzle.com/z/ad48gg2e?rf=238012063771219973',
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
      title: 'Wear Your F*cking Mask Mask',
      link: 'https://www.zazzle.com/z/amw5vjnt?rf=238012063771219973',
      primaryIx: 0,
      images: fullFaceMaskImages('wear-your-mask'),
      description: `Sometimes you want to let your mask do the talking for you. Give those around you a friendly reminder to wear their face mask in public. Perfect for long subway rides, grocery shopping, and large crowds.`,
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
        {
          author: 'Maxxx',
          date: '9/13/20',
          rating: 2,
          content: `I don't like this one`
        },
        {
          author: 'SweetSalvation',
          date: '9/13/20',
          rating: 1,
          content: `You can't tell me what to do I'm an American citizen and here in America it's illegal to infringe on my rights as an American citizen you should take this mask off the store`
        },
        {
          author: 'schoonerscaptain',
          date: '9/15/20',
          rating: 3,
          content: `I don't know what to make of this one, to be honest`
        },
      ]
    },
    {
      id: 'anti-facial1',
      title: 'Anti Facial Recognition Mask 1',
      link: 'https://www.zazzle.com/z/am2tesp0?rf=238012063771219973',
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
      id: 'anti-facial3',
      title: 'Anti Facial Recognition (Camo) Mask 3',
      link: 'https://www.zazzle.com/z/asmsmjoh?rf=238012063771219973',
      primaryIx: 0,
      emText: 'ANTI-FACIAL RECOG',
      images: foldedImages('anti-facial3'),
      description: `With a pattern obtained from hacked documents straight from the pentagon, our latest anti-facial recognition design mixes the All-American aesthetics of camo with the All-American values of freedom. Get yours now!`,
      reviews: [
        {
          author: 'friendlyfriend',
          date: '8/15/20',
          rating: 5,
          content: `I originally bought this to throw off the government, but I started using it while hunting as well. Just last week I walked right up to a deer and shot it point blank while wearing this mask! It never even recognized me as human!`
        },
        {
          author: 'SweetSalvation',
          date: '9/12/20',
          rating: 5,
          content: `I'm not one to buy into all this government facebook watching us mumbo jumbo but this is still a damn fine facemask if I've ever seen one I used it on my last hunting trip and blended right in!`
        },
        {
          author: 'TargetedTom',
          date: '9/27/20',
          rating: 4,
          content: `Unlike some of the other reviews, I can't say I'm a huge fan of the camo aesthetics... but I'll be damned if this mask doesn't work. It's like the cameras don't even know I'm there.`
        },
      ]
    },
    {
      id: 'infected2-mask',
      title: 'Infected Mask 2',
      link: 'https://www.zazzle.com/z/ajyn1uqf?rf=238012063771219973',
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
      id: '5g-bad',
      title: '5G Bad mask',
      link: 'https://www.zazzle.com/z/wcx1fgiu?rf=238012063771219973',
      primaryIx: 1,
      images: fullFaceMaskImages('5g-bad'),
      description: `With the fifth generation of telecom infrastructure upon us, it's natural to have your doubts regarding it's effects on public safety. `,
      reviews: [
        {
          author: 'EnergyMatters',
          date: '8/15/20',
          rating: 2,
          content: `Given how sensitive I am to elctro magnetic frequencies (EMFs), this type of mask obviously appeals to me. However, I have to say that this mask fails to live up to my expectations. Wearing this mask only reduces my headaches by 16%... which is better than nothing, but not quite as effective as some of the other products in the Rona Merch catalogue.`
        },
      ]
    },


    {
      id: 'infected1-mask',
      title: 'Infected Mask 1',
      link: 'https://www.zazzle.com/z/ak68h6xl?rf=238012063771219973',
      primaryIx: 4,
      images: fullFaceMaskImages('infected1-mask'),
      description: `There's only one sure-fire way to make sure that people stay 6 feet away from you -- and that's by implying that you may be infected with COVID-19. `,
      reviews: [
        {
          author: 'HunterMcFarlane',
          date: '7/16/20',
          rating: -1,
          content: `Again, very dissapointed with this product, as well as the INFECTED line of merchandise. As with the T shirt, this mask failed to infect my kids with anything. `
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
      id: 'boo-hoo',
      title: 'Boo Hoo Anti Facial Recognition Mask',
      emText: 'ANTI-FACIAL RECOG',
      link: 'https://www.zazzle.com/z/92mq192h?rf=238012063771219973',
      primaryIx: 2,
      images: foldedImages('boo-hoo'),
      description: `Hide your face while communicating to all machine learning algorithms that facial recognition technology makes you sad.`,
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
      link: 'https://www.zazzle.com/z/yblzo95w?rf=238012063771219973',
      primaryIx: 0,
      images: foldedImages('sovereign-mask'),
      description: `Declare your sovereignty from any nation that treads on you with this Sovereign Citizen mask. Upon being stopped by a police officer, simply point to your face to express that they have no legal power over you. Perfect for any type of protest with police presence.`,
      reviews: [
        {
          author: 'Ech0mike',
          date: '8/5/20',
          rating: 4,
          content: `Just like with the t shirt, I was able to figure out the text on this mask through a combination of squinting and machine learning: "Am I being detained? Can I have your name and badge number? Is there a recording being made of this encounter? Am I being detained? What facts or information are you alleging gave you probable cause to stop and accost me? do you have a properly signed and issued warrant authorizing you to search me or my property? Am I being detained? What is the Articulable probable cause that leads you to believe that I have committed or am about to commit a crime that authorizes you to stop and detain or arrest me? Am I being detained? From this point forward I do not consent to providing you with any information or documents that could or will be used against me in a court of law or to possibly incriminate me, so please do not ask me to produce anything and give it to you. No law is valid if it requires me in any way to waive any fundamentally protected right in order to exercise any other right or alleged privilege. And no law can convert the free exercise of any right into a crime. Are fully aware that I have already invoked my fundamentally protected right to remain silent and my right to assistance of counsel? Do you intend to continue in your unlawful efforts to violate my rights? Am I being detained? Am I being detained? Are you now trying to fabricate probable cause by making false statements into the record and false allegations against me?"`
        },
        {
          author: 'SweetSalvation',
          date: '8/15/20',
          rating: 5,
          content: `If and when the Socialist Democrats ever take power then that'll be the day that I don't consider myself a citizen of this fine nation any more so I keep one of these masks with me in my back pocket all the time.`
        },
        {
          author: 'pastisfuture',
          date: '8/16/20',
          rating: 4,
          content: `I'm not sure if I consider myself a sovereign citizen, or what. But I still think it's important to keep in mind that the only power police have over you is determined by a social construct. We're born into this society with no say about it, and for some reason we're expected to follow the rules? I don't think so. The humans of the pre agricultural days didn't have police officers, and they roamed the same land we stand on today under an entirely different legal framework. `
        }
      ]
    },

    {
      id: 'sovereign-t',
      title: 'Sovereign Citizen T',
      link: 'https://www.zazzle.com/z/ad4dtgge?rf=238012063771219973',
      primaryIx: 1,
      images: tShirtImages('sovereign-t'),
      description: `Clearly declare your sovereignty from any nation that treads on you with this Sovereign Citizen T. Don't leave home without it! Perfect for any type of protest with police presence.`,
      reviews: [
        {
          author: 'Ech0mike',
          date: '8/5/20',
          rating: 4,
          content: `I squinted really hard and was able to make out the following text on this t shirt: "Am I being detained? Are you now trying to fabricate probable cause by making false statements into the free exercise any way to you. No law can convert the Articulable probable cause that authorizes you alleging gave you have your name and accost me? do not ask me to search me to possibly incriminate me, so please do you probable cause that could or information are you to violate my right to believe that I being detained? From this point forward I being detained? What facts or alleged privilege. And no law can convert the Articulable probable cause that I have your unlawful efforts to fabricate probable cause that authorizes you have committed or information are you have a court of this point forward I have a properly signed and false allegations against me? Am I have your unlawful efforts to fabricate probable cause to believe that I being detained? Can I have a properly signed and accost me? do you have committed or alleged privilege. And no law can convert the Articulable probable cause by making false statements into the Articulable probable cause to waive any other right to violate my rights? Am I being detained? What facts or to produce anything and give it requires me in any information or am about to continue in your unlawful efforts to stop and give it to continue in order to search me in order to search me in your unlawful efforts to violate my property? Am I being detained? Are From this point forward I have your name and false statements into the record and my fundamentally protected right to waive any other right into a recording being detained? Can I have already invoked my property? Am I being detained? Are fully aware that I have your unlawful efforts to believe that I being detained? What facts or arrest me? do not consent to assistance of any way to fabricate probable cause by making false statements into the record and false statements into a crime. And no law is the record and my property? Am I being detained? Can I being made of this point forward I being detained? Can I have your unlawful efforts to possibly incriminate me, so please do not ask me in order to stop and give it to fabricate probable cause that I have committed or am about to providing you to providing you have your name and badge number? Is there a court of counsel? Do you probable cause to assistance of law or arrest me? Am I being made of this encounter? Am I being detained? Am I have already invoked my fundamentally protected right or to produce anything and give it to continue in order to possibly incriminate me, so please do you to violate my rights? Am I being detained?"`
        },
        {
          author: 'octofuzz',
          date: '8/8/20',
          rating: 2,
          content: `I don't think this shirt will get you off the hook for anything. If the above commenter is right, this is just pure gibberish. Reads like something a machine wrote...`
        },
        {
          author: 'pastisfuture',
          date: '8/16/20',
          rating: 4,
          content: `I've been thinking a lot about this lately, and I think I'm going to purchase this t shirt. It's the least I can do to express the fact that society is a total fabrication. None of these laws are written in the cosmos. Why should I be subject to the arbitrary rules that others decided to enforce?`
        }
      ]
    },
    {
      id: 'emf-tower',
      title: 'EMF Tower Pleated Mask',
      link: 'https://www.zazzle.com/z/aqvf1elx?rf=238012063771219973',
      primaryIx: 3,
      images: foldedImages('emf-tower'),
      description: ``,
      reviews: [
        {
          author: 'EnergyMatters',
          date: '8/27/20',
          rating: 1,
          content: `No no no no no, I don't like this one at all...`
        },
      ]
    },
    {
      id: 'infected2-t',
      title: 'Infected T 2',
      link: 'https://www.zazzle.com/z/adhrpg9t?rf=238012063771219973',
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
  ],

  branded: [
    {
      id: 'fastcash-super-plus-t',
      featured: true,
      emText: 'BEST SELLER',
      title: 'FastCash Super Plus Logo T',
      primaryIx: 0,
      link: 'https://www.zazzle.com/z/au6uwl9q?rf=238012063771219973',
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
      id: 'fastcash-text-folded',
      title: 'FastCash Text Pleated Mask',
      link: 'https://www.zazzle.com/z/ehi1okrk?rf=238012063771219973',
      primaryIx: 0,
      images: foldedImages('fastcash-text-folded'),
      description: <>Make a statement with this bold pleated mask from the folks at FastCashMoneyPlus.biz.<br/><a className="link" href="http://fastcashmoneyplus.biz" target="_blank">Sponsored by FastCashMoneyPlus.biz</a></>,
      reviews: [
        {
          author: 'VinceSlickson',
          date: '8/16/20',
          rating: 5,
          content: `Now THIS is a statement mask! Anyone who wears this is clearly broadcasting to the world that they're a winner. What mroe cna I say?`
        },
        {
          author: 'WendyPilsen',
          date: '8/20/20',
          rating: 5,
          content: `This mask is safe, comfortable, and a great deal.`
        },
        {
          author: 'ray',
          date: '8/23/20',
          rating: 5,
          content: `I was reccomended this mask and I purchased it. I wear it fondly.`
        },
      ]
    },
    {
      id: 'fastcash-leggings',
      title: "FastCash Leggings",
      link: 'https://www.zazzle.com/z/a850he0s?rf=238012063771219973',
      primaryIx: 2,
      description: <>Perfect for yoga, running, working out, or just lying around the house. These leggings are perfect for any occasion.<br/><a className="link" href="http://fastcashmoneyplus.biz" target="_blank">Sponsored by FastCashMoneyPlus.biz</a></>,
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
    {
      id: 'fastcash-plus-t',
      title: 'FastCash Plus Logo T',
      link: 'https://www.zazzle.com/z/4ovyqjwf?rf=238012063771219973',
      primaryIx: 0,
      images: darkTshirtImages('fastcash-plus-t'),
      description: <>The Swiss-Army knife of FastCash logo Ts. The addition of the iconic FastCashMoneyPlus investment text on the back makes this a nice upgrade from the standard FastCash T, even if it doesn't have the flair of the text shadow found on the FastCash Super Plus T. No frills. All business. Break out this sleek dark rendition for any occasion.<br/><a className="link" href="http://fastcashmoneyplus.biz" target="_blank">Sponsored by FastCashMoneyPlus.biz</a></>,
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
      id: `ronamerch-mask`,
      featured: true,
      title: "Rona Merch Co. Mask Official",
      link: 'https://www.zazzle.com/z/a8l18ega?rf=238012063771219973',
      primaryIx: 4,
      description: 'Strut your stuff with the OFFICIAL Rona Merch Co. face mask. Get in on the ground floor of the hottest new face mask brand, all while supporting small businesses throughout the pandemic.',
      images: fullFaceMaskImages('ronamerch-mask'),
      reviews: [
        {
          author: 'username',
          date: '8/10/20',
          rating: 5,
          content: `i like this mask and the branding`
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
        },
        {
          author: 'FrankFrankson',
          date: '9/26/20',
          rating: 5,
          content: `It looks even better if you change the background to black and the logo to white at checkout. Almost like the website's night mode. Very cool!`
        },
      ],
    },
    {
      id: 'not-meddly',
      title: "Not A Security Medley Mask",
      link: 'https://www.zazzle.com/z/tdyn05kw?rf=238012063771219973',
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
      id: 'fastcash-t',
      title: 'FastCash Logo T',
      link: 'https://www.zazzle.com/z/qb22iopm?rf=238012063771219973',
      primaryIx: 0,
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

    // THIS IS actually sold out
    {
      id: 'rm-see-through',
      title: "Rona Merch See Through Mask",
      soldOut: true,
      // TODO replace link with rf code
      link: 'https://www.zazzle.com/z/yj1wuoo2?rf=238012063771219973',
      primaryIx: 0,
      description: 'Who says sneeze guards need to be lame? With the Rona Merch See Through Mask, you can protect everyone around you from unwanted sneezes and more... all while donning the Rona Merch logo!',
      images: seeThroughImages('rm-see-through'),
      reviews: [
        {
          author: 'DumboTheClown',
          date: '9/1/20',
          rating: 5,
          content: `When I sneeze the Rona Merch logo protects my friends!`
        },
        {
          author: 'FrankFrankson',
          date: '10/1/20',
          rating: 5,
          content: `This is great! I've been looking for a sneeze guard mask that wasn't quite as boring as the rest of them. This fits that bill. The sharp RM logo really complements my facial structure.`
        },
        {
          author: 'username',
          date: '10/11/20',
          rating: 5,
          content: `the logo is too big`
        },
      ],
    },
    {
      id: 'not-t',
      title: 'NOT T',
      link: 'https://www.zazzle.com/z/arrx8cqd?rf=238012063771219973',
      primaryIx: 0,
      images: darkTshirtImages('not-t'),
      description: `Sponsored by the famous Not A Security (NOT) ERC-20 token.`,
      reviews: [
        {
          author: 'StarSeeker',
          date: '8/1/20',
          rating: 5,
          content: `I'm feeling some fantastic energy from this shirt. Absolutely stellar`
        },
        {
          author: 'octofuzz',
          date: '8/11/20',
          rating: 4,
          content: `I'm not a huge fan of NOT for obvious reasons, but even I have to admit that this is a pretty cool looking t shirt.`
        },
      ]
    },
    {
      id: `ronamerch-t`,
      title: "Rona Merch Co. T Official",
      link: 'https://www.zazzle.com/z/y254zpyi?rf=238012063771219973',
      primaryIx: 0,
      description: 'Strut your stuff with the OFFICIAL Rona Merch Co. T. Get in on the ground floor of the hottest new face mask brand, all while supporting small businesses throughout the pandemic.',
      images: tShirtImages('ronamerch-t'),
      reviews: [
        {
          author: 'username',
          date: '8/10/20',
          rating: 5,
          content: `i like this mask and the branding`
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
      id: 'fastcash-logo-folded',
      title: 'Fast Logo Pleated Mask',
      link: 'https://www.zazzle.com/z/fjly6uyg?rf=238012063771219973',
      primaryIx: 1,
      images: foldedImages('fastcash-logo-folded'),
      description: <>Make a statement with this fashionable FastCash Logo Pleated Mask. Perfect for standing out from the crowd on a crowded summer beach, or at a late summer backyard BBQ party. <br/><a className="link" href="http://fastcashmoneyplus.biz" target="_blank">Sponsored by FastCashMoneyPlus.biz</a></>,
      reviews: [
        {
          author: 'jonesBeachHead',
          date: '8/2/20',
          rating: 4,
          content: `This doesn't exactly match my bathing suit, but I suppose it's fine for what it is.`
        },
        {
          author: 'fuckface99',
          date: '8/23/20',
          rating: 5,
          content: `I FEEL LIKE MY FACE IS GOING TO FUCKING EXPLOAD WHENEVER I WEAR THIS MASK`
        },
        {
          author: 'ippso_facto',
          date: '9/12/20',
          rating: 5,
          content: `It's not summer any more, but it's still fashionable!`
        },
      ]
    },
    {
      id: `fastcash-colorful`,
      title: "FastCash Logo Mask Colorful",
      link: 'https://www.zazzle.com/z/agc7i58i?rf=238012063771219973',
      primaryIx: 2,
      description: <>This vibrant, multi-colored face mask is the perfect way to express your identity as someone who is both forward-thinking and ambitious.<br/><a className="link" href="http://fastcashmoneyplus.biz" target="_blank">Sponsored by FastCashMoneyPlus.biz</a></>,
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
      id: `fake-news`,
      title: "Fake News Mask",
      link: 'https://www.zazzle.com/z/cmhsxw0x?rf=238012063771219973',
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
      id: 'fastcash-premium',
      title: "FastCash Premium Mask",
      link: 'https://www.zazzle.com/z/5p2yksqj?rf=238012063771219973',
      primaryIx: 2,
      description: <>A formal face mask for the most formal occasions. Pair this elegant beauty with a tux or black dress of your choosing. Or, wear it along with your New Yorker "all black" outfit. Either way, you'll be making one thing clear: you like making money, and you're good at it.<br/><a className="link" href="http://fastcashmoneyplus.biz" target="_blank">Sponsored by FastCashMoneyPlus.biz</a></>,
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
      id: 'not-mask',
      title: 'NOT Logo Mask',
      link: 'https://www.zazzle.com/z/ib09iyju?rf=238012063771219973',
      primaryIx: 1,
      images: fullFaceMaskImages('not-mask'),
      description: `Sponsored by the famous Not A Security (NOT) ERC-20 token.`,
      reviews: [
        {
          author: 'BullseyeBob',
          date: '9/27/20',
          rating: 3,
          content: `Not many people know this, but this logo originates from the well-known Not A Security (NOT) ERC-20 pyramid scheme. According to some inside sources, the creator of this token is facing intense legal action from the SEC and needed to auction off some of the IP form the project to help pay for his legal fees. A good friend of mine was left "holding the bag" and lost a non-trivial sum of money with this scheme, so I can't say I'm a fan... even if the logo is as good as it is.`
        },
        {
          author: 'TommyFlombego',
          date: '9/28/20',
          rating: 5,
          content: `Great logo. Good for "seeing" what's really going on around you.`
        },
      ]
    },
    {
      id: 'kissy-t',
      title: 'FinSexy.com Kissy T',
      link: 'https://www.zazzle.com/pd/spp?dz=a0e2166a-b652-436a-8edb-0fe523fd6cf2',
      primaryIx: 1,
      images: tShirtImages('kissy-t'),
      description: "Let the whole world know that you want to kiss them with this sexy Kissy T!",
      reviews: [
        {
          author: 'WendyPilsen',
          date: '5/20/24',
          rating: 5,
          content: `the shirt fits well`
        },
        {
          author: 'DumboTheClown',
          date: '5/21/24',
          rating: 5,
          content: `It makes me want to kiss you!`
        },
        {
          author: 'VinceSlickson',
          date: '5/29/24',
          rating: 5,
          content: `I look great in this T!`
        },
        {
          author: 'heatherhot6',
          date: '6/7/24',
          rating: 5,
          content: `I look so hot in this T`
        },
        {
          author: 'CrystalBell',
          date: '6/8/24',
          rating: 5,
          content: `Beautiful`
        },

      ]
    },
    {
      id: 'property-wallet',
      title: 'FinSexy.com Property Wallet',
      link: 'https://www.zazzle.com/steviep_wallet-256704011421712692',
      primaryIx: 0,
      images: tShirtImages('property-wallet'),
      description: "Let everyone know that all of your money belongs to steviep with this stylish, mult-compartment wallet.",
      reviews: [
        {
          author: 'octofuzz',
          date: '4/20/24',
          rating: 3,
          content: `I don't carry any hard currency, so this is useless to me`
        },
        {
          author: 'fuckface99',
          date: '4/28/24',
          rating: 5,
          content: 'FUCK. YES.'
        },
        {
          author: 'DumboTheClown',
          date: '6/1/24',
          rating: 5,
          content: `Stevie P can have all of my money!`
        },

      ]
    },
    {
      id: 'paypig-t',
      title: 'FinSexy.com Paypig T',
      link: 'https://www.zazzle.com/paypig_t_t_shirt-256340684792437822',
      primaryIx: 1,
      images: tShirtImages('paypig-t'),
      description: "Celebrate #FinDomSummer by declaring that you are a loud and proud paypig!",
      reviews: [

        {
          author: 'DumboTheClown',
          date: '5/22/24',
          rating: 5,
          content: `I'm a little paypig oink oink oink!`
        },
        {
          author: 'fuckface99',
          date: '5/23/24',
          rating: 5,
          content: 'FUCK. YES.'
        },
        {
          author: 'PissinOnUHoes69',
          date: '5/27/24',
          rating: 4,
          content: `I'd wear it`
        },
        {
          author: 'SweetSalvation',
          date: '6/1/24',
          rating: 2,
          content: `Whatever consenting adults do in their own homes is one thing I'm not gonna pass judgement but I don't think it's right that you broadcast your sexual fetishes to the whole wide world`
        },

      ]
    },
  ],

  bargain: [
    {
      id: 'wakka-wakka',
      title: 'Wakka Wakka Mask',
      link: 'https://www.zazzle.com/z/a50lic1l?rf=238012063771219973',
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
      link: 'https://www.zazzle.com/z/aa488br4?rf=238012063771219973',
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
        {
          author: 'TommyFlombego',
          date: '10/5/20',
          rating: 1,
          content: `Honestly, I'm sick of all the bullshit products on this website. Hasn't anyone wondered why all these crappy face masks are so expensive? I think it's pretty obvious to anyone paying attention, but let me spell it out for the rest of you: RonaMerchCo is clearly a front for the international child sex trafficking ring run by the global cabal. These listings are obviously not for the shown products, they're for live human beings. Smiling Eyes? Wakka Wakka? Not so subtle if you ask me. If you want more details DM me on friendworld.`
        },
        {
          author: 'WendyPilsen',
          date: '10/18/20',
          rating: 5,
          content: `Charming`
        },
        {
          author: 'SuperCatMeow',
          date: '10/19/20',
          rating: 5,
          content: `You know what they say: Smiling Eyes equals a Smiling Face`
        },
      ]
    },
    {
      id: 'apocalypse',
      title: 'Apocalypse Mask',
      link: 'https://www.zazzle.com/z/a0uzs9ev?rf=238012063771219973',
      primaryIx: 0,
      images: fullFaceMaskImages('apocalypse'),
      description: `Everyone knows it's coming, but no one knows how many years we have left. So live your last days out in style with this explosive face mask!`,
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
      link: 'https://www.zazzle.com/z/g344dgna?rf=238012063771219973',
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
      link: 'https://www.zazzle.com/z/aaibtrcm?rf=238012063771219973',
      primaryIx: 1,
      images: fullFaceMaskImages('cluck'),
      description: ``,
      reviews: []
    },
    {
      id: `pattern1`,
      title: "Pattern 1",
      link: 'https://www.zazzle.com/z/as2x2m15?rf=238012063771219973',
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
    // ACTUALLY SOLD OUT
    {
      id: 'smarty-pants',
      soldOut: true,
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
      link: 'https://www.zazzle.com/z/ars17dln?rf=238012063771219973',
      primaryIx: 0,
      images: darkTshirtImages('useless'),
      description: `Useless`,
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
      title: 'Branded Mask',
      link: 'https://www.zazzle.com/z/mjb7usdh?rf=238012063771219973',
      primaryIx: 1,
      images: cottonImages('branded'),
      description: `Be the life of the party as all your friends try to scan your face at your next social gathering.`,
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
      link: 'https://www.zazzle.com/z/ogdk3sno?rf=238012063771219973',
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
    {
      id: 'dollar-dollar',
      title: 'Dollar Dollar Pleated Mask',
      link: 'https://www.zazzle.com/z/uu5bjx1b?rf=238012063771219973',
      primaryIx: 0,
      images: foldedImages('dollar-dollar'),
      description: `Become a fast cash millionaire whenever you put this mask on. Impress your friends by making it seem like you're actually wearing dollar bills wrapped around your face. It's a real hoot!`,
      reviews: [
        {
          author: 'DumboTheClown',
          date: '9/21/20',
          rating: 5,
          content: `I like money!`
        },
        {
          author: 'ActualPleiadian',
          date: '9/21/20',
          rating: 5,
          content: `lmao 👌👌👌`
        },
        {
          author: 'VinceSlickson',
          date: '9/21/20',
          rating: 3,
          content: `Honestly, I wouldn't wear this mask out of the house. It's not quite as flashy as the $50 and $100 bill masks I've been seeing all over the place. A real step down from all the other FastCash merch. But it's a good mask to wear to bed, espescially if it matches your PJs.`
        },
      ]
    },
    {
      id: 'knotty-mask',
      title: 'Knotty Pleated Mask',
      link: 'https://www.zazzle.com/z/t2p6o9kw?rf=238012063771219973',
      primaryIx: 1,
      images: foldedImages('knotty-mask'),
      description: `Show off your favorite quarantine hobby: knot tying!`,
      reviews: [
        {
          author: 'Hubert',
          date: '10/12/20',
          rating: 2,
          content: `I don't care much for BDSM myself, but the Mrs likes it plenty, so I do it for her.`
        },
      ]
    },
    {
      id: 'mask-mask',
      title: 'Mask Mask',
      link: 'https://www.zazzle.com/z/roud3q2q?rf=238012063771219973',
      primaryIx: 0,
      images: fullFaceMaskImages('mask-mask'),
      description: `Whether you're at the latest masquerade or just attending a local Halloween party, this mask is perfect for obscuring your face. `,
      reviews: [
        {
          author: 'stupid',
          date: '10/2/20',
          rating: 1,
          content: `stupid`
        },
        {
          author: 'Hubert',
          date: '10/12/20',
          rating: 1,
          content: `I dont' get it, it's just a mask on a mask.`
        },
        {
          author: 'octofuzz',
          date: '10/13/20',
          rating: 1,
          content: `What is this garbage? I'd never wear this on my face`
        },
      ]
    },
    {
      id: 'shale-bad',
      title: 'Shale Bad T',
      link: 'https://www.zazzle.com/z/badangem?rf=238012063771219973',
      primaryIx: 0,
      images: darkTshirtImages('shale-bad'),
      description: ``,
      reviews: [
        {
          author: 'octofuzz',
          date: '10/13/20',
          rating: 4,
          content: `Honestly, this shirt is how I feel these days. The world is burning while plenty of Capitalist fat cats laugh their way to the bank by stealing the earth's resources. `
        },
      ]
    },
    {
      id: 'hat-hat',
      featured: true,
      title: 'Hat Hat',
      link: 'https://www.zazzle.com/z/a15nw0eq?rf=238012063771219973',
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
        {
          author: 'FrankFrankson',
          date: '10/11/20',
          rating: 4,
          content: `I was skeptical at first, but this hat really won me over. Not only is it well-made, but it's comfortable too!`
        },
      ]
    },
    {
      id: 'super-spreader',
      featured: true,
      title: 'Super Spreader T',
      link: 'https://www.zazzle.com/z/cyjo2g7d?rf=238012063771219973',
      primaryIx: 0,
      images: womanShirt('super-spreader'),
      description: `Casual, relaxed, and breezy. Spread joy and positivity wherever you go with this cute T. Perfect for any occasion, indoors or outdoors.`,
      reviews: [
        {
          author: 'StarSeeker',
          date: '7/25/20',
          rating: 5,
          content: `Wonderful`
        },
        {
          author: 'ActualPleiadian',
          date: '7/27/20',
          rating: 5,
          content: `I bough this for my plieadian fiance and it looks great on her!`
        },
        {
          author: 'WendyPilsen',
          date: '7/29/20',
          rating: 4,
          content: `Very comfortable and a nice soft shade of blue`
        },
        {
          author: 'PissinOnUHoes69',
          date: '8/08/20',
          rating: 1,
          content: `What a completely inappropriate and sexist thing to put on a t shirt!`
        },
        {
          author: 'username',
          date: '8/13/20',
          rating: 5,
          content: `what is she spreading?`
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

const users: any = allData.reduce((users: any, item: Item) => {
  item.reviews.forEach((review) => {
    users[review.author] = users[review.author] ? [...users[review.author], review.date] : [review.date]
  })
  return users
}, {} as any)


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
