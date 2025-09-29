import React from 'react'
import './Cart.css'

// export default function Cart(props) {
//     const {data} = props

export default function Cart({ data }) {
    console.log(data)
    const { image, ["product-name"]: productName, rating, description, Genre } = data
    const cascading = {
        padding: '1,2rem 2.4rem',
        backgroundColor: 'var( --bnt-hover-bg-color)',
        color: 'var(--bg  -color)',
        fontSize: '16px'
    }
    return ( 
        <li className='card'>
            <div>
                <img style={{ width: '100%' }}
                    src={image}
                    alt="image"
                    height='100%'
                    width='40%'
                />
            </div>
            <div className='card-content'>
                <h3>{productName}</h3>
                <h4>rating : {rating} </h4>
                <p>{description}</p>
                <p>Genre : {Genre}</p>
                <button style={cascading}>watch now</button>
                {/* <button style={{
                    padding: '1,2rem 2.4rem',
                    backgroundColor: 'var( --bnt-hover-bg-color)',
                    color : 'var(--bg  -color)',
                    fontSize: '16px'
                }}>watch now</button> */}
            </div>
        </li>
    )
}



///////////////////-------------------------------------//////////////




// import React from 'react'

// export default function Cart(props) {
//     return (
//         <div>
//             <ul>
//                 {/* <li key={props.key} > */}
//                 <li>
//                     <div>
//                         <img
//                             src={props.data.image}
//                             alt="image"
//                             height='100%'
//                             width='40%'
//                         />
//                         <h2>{props.data['product-name']}</h2>
//                         <h3>rating : {props.data.rating} </h3>
//                         <p>{props.data.description}</p>
//                         <p>{props.data.Genre} : Entertainment</p>
//                         <button>watch now</button>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//     )
// }

///////////////////-------------------------------------//////////////

// import cartData from '../api/cartItem.json'

// export default function Cart() {
//     return (
//         <ul>
//             {
//                 cartData.map((item, index) => {
//                     return (
//                         <li key={index} >
//                             <div>
//                                 <img
//                                     src={item.image}
//                                     alt="image"
//                                     height='100%'
//                                     width='40%'
//                                 />
//                                 <h2>{item['product-name']}</h2>
//                                 <h3>rating : {item.rating} </h3>
//                                 <p>{item.description}</p>
//                                 <p>{item.Genre} : Entertainment</p>
//                                 <button>watch now</button>
//                             </div>
//                         </li>
//                     );
//                 })
//             }
//         </ul>

//     )
// }

//------------------------------------------------------------


// import image from '../../public/image.png'
// import students from '../api/students.json'

// export default function Cart() {
//     return (
//         <ul>
//             <li>
//                 <div>
//                     <img src={students[0].image} alt="image" />
//                     <h2>{students[0]['product-name']}</h2>
//                     <h3>rating : {students[0].rating} </h3>
//                     <p>{students[0].description}</p>
//                     <p>{students[0].Genre} : Entertainment</p>
//                     <button>watch now</button>
//                 </div>
//             </li>
//         </ul>
//     )
// }



//////////////////-------------////////////////////

// import image from '../../public/image.png'

// export default function Cart() {
//     return (
//         <>
//             <div>
//                 <img src={image} alt="image" />
//                 <h2>soundrum</h2>
//                 <h3>rating : {4.0} </h3>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis dignissimos deserunt alias facere officiis eligendi fugit! Obcaecati magni perferendis ullam deserunt. Accusantium ipsum nostrum dolor dignissimos rem accusamus quibusdam?</p>
//                 <p>Genre : Entertainment</p>
//                 <button>watch now</button>
//             </div>
//         </>
//     )
// }

// export function Footer(){
//     return (
//         <p> Copyrite @ 2025</p>
//     )
// }