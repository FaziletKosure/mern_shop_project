// import React from 'react'
// import {Link} from 'react-router-dom'
// import {Card} from 'react-bootstrap'
// import Rating from './Rating'

// const Product = ({_id,name,image,rating, numReviews,price}) => {
//     return (
//         <Card className='my-3 p-3 rounded'>
//             <Link to={`/product/${_id}`}>
//                 <Card.Img src={image} variant='top'/>
//             </Link>
//             <Card.Body>
//             <Link to={`/product/${_id}`}>
//                 <Card.Title as='div'><strong>{name}</strong> </Card.Title>
//             </Link>
//             <Card.Text as='div'>
//                <Rating value={rating} text={`${numReviews} reviews`}/>
//              </Card.Text>
//              <Card.Text as='h3'>
//                  ${price}
//              </Card.Text>
//             </Card.Body>
            
//         </Card>
//     )
// }

// export default Product
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
