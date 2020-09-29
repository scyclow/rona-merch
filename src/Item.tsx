import React, { useEffect, useRef, useState } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import { ChildProps, Marquee, Arrows, ImageRotate} from './Main'
import Logo from './Logo'
import './Item.css'
import {allData } from './data'

export default function Item() {
  return (
    <Wrapper>
      <Header/>
      <Content />
    </Wrapper>
  )
}


function Header() {
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

function Wrapper({ children }: ChildProps) {
  return (
    <div className="itemWrapper">
      {children}
    </div>
  )
}

function Content() {
  const { itemId } = useParams()
  const item = allData.find(i => i.id === itemId)
  if (!item) return <Redirect to="/" />

  return (
    <div>
      <h1 className="itemTitle">{item.title}</h1>
      <div className="contentGrid">
        <div className="itemLeftCol">
          <a href={item.link}>
            <ImageRotate ms={4000}>
              {item.images.map((image, i) => (
                <img className="itemImage" src={image} alt={item.title + i} key={item.title + i} />
              ))}
            </ImageRotate>
            <div className="itemImage" style={{}}/>
            <div style={{marginTop: 10}}>
              <Arrows>
                <div className="buyNowLink">BUY<br/> NOW</div>
              </Arrows>
            </div>
          </a>
        </div>

        <div>
          <div className="description">
            <h2 className="itemSectionHeader">PRODUCT DESCRIPTION</h2>
            <p className="descriptionText">{item.description || 'DESCRIPTION MISSING'}</p>
          </div>
          <h2 className="itemSectionHeader">REVIEWS</h2>
          <div className="reviews">
            <a href="https://friendworld.social/" target="_blank"><h3 className="itemSectionSubHeader">Powered by <span className="link">friendworld.social</span></h3></a>
            {item.reviews.map(review => (
              <div key={review.content} className="review">
                <h4 className="reviewRating">{review.rating} Stars!</h4>
                <p className="reviewContent">{review.content}</p>
                <div className="reviewData" style={{backgroundColor: '#f6f6f6'}}>
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
    </div>
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
