import React, { useEffect, useRef, useState } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import { ChildProps, Marquee, Arrows, ImageRotate} from './Main'
import Logo from './Logo'
import './Item.css'
import {allData, Item } from './data'
import {Helmet} from 'react-helmet'
import analytics from './analytics'


const getText = (tree: any)=>{
  if (typeof tree === 'string' || !tree){
    return tree;
  }

  if (typeof tree.props.children === 'string') {
    return tree.props.children
  }

  if (!tree.props.children) {
    return
  }

  return tree.props.children.map((child: any)=>{
    return getText(child);
  }).join('');
}

export default function ItemElem() {
  const { itemId } = useParams()
  const item = allData.find(i => i.id === itemId)

  return (
    <>
      <Helmet>
        <meta name="twitter:image" content={'https://ronamerch.co' + item?.images[item.primaryIx]} />
        <meta name="og:image" property="og:image" content={'https://ronamerch.co' + item?.images[item.primaryIx]}/>
        <meta name="og:image:alt" content="Rona Merch Co. Logo" />

        <meta name="title" content={item?.title || 'Rona Merch Item'} />
        <meta name="og:title" content={item?.title || 'Rona Merch Item'} />
        <meta name="twitter:title" content={item?.title || 'Rona Merch Item'} />
        <meta property="og:site_name" content="Rona Merch Co." />

        <meta name="twitter:description" content={getText(item?.description || 'Rona Merch Item')} />
        <meta name="description" content={getText(item?.description || 'Rona Merch Item')} />
        <meta name="og:description" content={getText(item?.description || 'Rona Merch Item')} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />

        <meta property="og:url" content={`https://ronamerch.co/items/${item?.id}`} />
        <meta name="twitter:url" content={`https://ronamerch.co/items/${item?.id}`} />

        <title>{item?.title || 'Rona Merch Item'}</title>
      </Helmet>

      <Wrapper>
        <Header/>
        <Content item={item} />
      </Wrapper>
    </>
  )
}


export function Header() {
  return (
    <Link to="/" className="itemHeader">
      <Logo size={70}/>
      <div className="itemHeaderTitle">
        <div  style={{
          borderLeft: '3px solid',
          borderRight: '3px solid'
        }}>
          <Marquee>
            <h3 className="rmName">
              RONA MERCH CO.
            </h3>
          </Marquee>
        </div>
      </div>
    </Link>
  )
}

export function Wrapper({ children }: ChildProps) {
  return (
    <div className="itemWrapper">
      {children}
    </div>
  )
}

function MaybeLink(props: any) {
  if (props?.item?.soldOut) {
    return (
      <div style={{pointerEvents: 'none'}}>
        {props?.children}
      </div>
    )
  } else {
    return (
      <a
        href={props?.item?.link}
        {...props}
      >
        {props.children}
      </a>
    )
  }
}
function Content({ item }: {item?: Item}) {
  if (!item) return <Redirect to="/" />

  const trackLinkClick = () => {
    analytics('?buy=' + item.id)
    // // @ts-ignore
    // const g = window?.ga?.getAll?.()?.[0]
    // // @ts-ignore
    // g?.send({
    //   hitType: 'event',
    //   eventCategory: 'Zazzle',
    //   eventAction: 'click',
    //   eventValue: item.id
    // })
  }

  const description: any = item?.description || 'DESCRIPTION MISSING'
  return (
    <main>
      {item.soldOut && (
        <div className="soldOutMarquee">
          <Marquee style={{ width: '200vw', maxWidth: 3000}}>
            <span className="soldOutText">
              SOLD OUT
            </span>
          </Marquee>
        </div>
      )}
      <div className="itemTitleSection">
        <h1 className="itemTitle">
          {item.title}
          {item.emText && <h2 className="itemEmText">{item.emText}</h2>}
        </h1>
      </div>
      <div className="contentGrid">
        <div className="itemLeftCol">
          <MaybeLink item={item} rel="noopener" target="_blank" onClick={trackLinkClick}>
            <ImageRotate ms={4000}>
              {item.images.map((image, i) => (
                <img className="itemImage" src={image} alt={item.title + i} key={item.title + i} />
              ))}
            </ImageRotate>
            <div className="itemImage" style={{}}/>
            <div style={{marginTop: 5}}>
              <div className="customizeLink">CUSTOMIZE{' >'}</div>
            </div>
            <div style={{marginTop: 15}}>
              <Arrows>
                <div className={`buyNowLink ${item.soldOut ? 'soldOutBuyNow' : ''}`}>BUY<br/> NOW</div>
              </Arrows>
            </div>
          </MaybeLink>

          <div className="itemIntegrationSection">
            <div>
              <a href="http://fastcashmoneyplus.biz/wallet?transferAddress=electricGOD_POWERvyS4xY69R3aR$" target="_blank" rel="noreferrer">
                <h2 className="itemSectionSubHeader">FastCash Checkout:</h2>
                <div>
                  <span className="itemSubHeadingContent" style={{ fontFamily: 'monospace' }}>electricGOD_POWERvyS4xY69R3aR$</span>
                </div>
              </a>
            </div>

            <div className="socialShareSection">
              <h2 className="itemSectionSubHeader">Share:</h2>
              <div>
                <div className="itemSubHeadingContent">
                  <a href="https://friendworld.social/threads/new" target="_blank" rel="noreferrer">Friendworld</a>
                </div>
                <div className="itemSubHeadingContent">
                  <a href={`mailto:?Subject=Check%20out%20this%20awesome%20merch%3A&Body=This%20would%20look%20great%20on%20you%2C%20don%27t%20you%20think%3F%20${window.location.href}`} target="_blank" rel="noreferrer">Email</a>
                </div>
                <div className="itemSubHeadingContent">
                  <a href={`https://twitter.com/`} target="_blank" rel="noreferrer">Twitter</a>
                </div>
                <div className="itemSubHeadingContent">
                  <a href={`https://facebook.com/`} target="_blank" rel="noreferrer">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="description">
            <h2 className="itemSectionHeader">PRODUCT DESCRIPTION</h2>
            <p className="descriptionText">{description}</p>
          </div>
          <h2 className="itemSectionHeader">REVIEWS</h2>
          <div className="reviews">
            <a href="https://friendworld.social/" target="_blank"><h3 className="itemSectionSubHeader">Powered by <span className="link">friendworld.social</span></h3></a>
            {!item.reviews.length && (
              <h2 style={{ textAlign: 'center', fontSize: 25, marginBottom: 15}}>No reviews for this item yet.</h2>
            )}
            {item.reviews.map(review => (
              <div key={review.content} className="review">
                <h4 className="reviewRating">{review.rating} Stars!</h4>
                <p className="reviewContent">{review.content}</p>
                <div className="reviewData">
                  <a href={`https://friendworld.social/users/${review.author}`} target="_blank">
                    <div className="link">{review.author}</div>
                    <div style={{ marginTop: 3 }}>{new Date(review.date).toISOString()}</div>
                  </a>
                </div>
              </div>
            ))}
            <TextInput />
          </div>
        </div>
      </div>
    </main>
  )
}


function TextInput () {
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const submit = () => {
    window.open('https://friendworld.social/login', '_blank');
    setError('Please log in to your friendworld account to leave a review')
  }
  const submitOnCommandEnter = (e: any) => {
    if (e.keyCode === 13 && e.metaKey) {
      submit()
    }
  }

  return (
    <div>
      <select style={{ marginBottom: 5, cursor: 'pointer'}}>
        <option>5 Stars</option>
        <option>4 Stars</option>
        <option>3 Stars</option>
        <option>2 Stars</option>
        <option>1 Stars</option>
      </select>
      <textarea
        className="reviewInput"
        placeholder="Leave a review..."
        onChange={e => {
          setContent(e.target.value)
        }}
        value={content}
        onKeyDown={submitOnCommandEnter}
      />
      <button
        className="reviewSubmitButton"
        onClick={submit}
      >
        {'Submit'}
      </button>
      {!!error && (
        <div className="errorText">{error}</div>
      )}
    </div>
  )
}
