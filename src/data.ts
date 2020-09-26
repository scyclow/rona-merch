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
    author: 'Octofuzz',
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
  patriot: [
    {
      id: 'proud-american-t',
      title: 'Proud American T',
      link: '',
      images: ['https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113745894146800642&design=50ace06b-3e2f-40a0-bde4-85ca3accf954&style=hanes_mens_crew_tshirt_5250&size=a_s&color=white&max_dim=325&bg=0xffffff'],
      description: "There's no better way to show the world that you're a proud American than by flaunting it with this stunning image of America's mascot: the majestic Bald Eagle",
      reviews: [
        {
          ...authors.salvation,
          date: '9/25/20',
          rating: 4,
          content: `I wear this shirt every day that i wake up and feel proud to be an American on God's green earth let me tell ya! The only thing that would make this better is if the picutre eagle was a bit sharper but other than that it's my favorite t shirt in my arsenal!`
        }
      ]
    }
  ],
  safety: [
    test,
    test,
    test,
    test,
    test,
    test,
    test,
    test,
    test,
    test,
  ],
  branded: [
    test,
    test,
    test,
    test,
    test,
    test,
    test,
    test,
    test,
    test,
  ],
  bargain: [
    test,
    test,
    test,
    test,
    test,
    test,
    test,
    test,
    test,
    test,
  ],
}

export default data
export const allData = [
  ...data.patriot,
  ...data.safety,
  ...data.branded,
  ...data.bargain,
]
