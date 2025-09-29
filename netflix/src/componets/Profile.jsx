import React from 'react'

export default function Profile(props) {
    const { name, age, greeting, children } = props
    
    const h3 = React.Children.toArray(children).find(
        child => child.type === "h3"
    );

    return (
        <div>
            <div> {name} </div>
            <div> {age} </div>
            <div> {greeting} </div>
            <div> {children} </div>
            <div> h3 = {h3} </div>
        </div>
    )
}

// export default function Profile(props) {
//     return (
//         <div>
//             <div> {props.name} </div>
//             <div> {props.age} </div>
//             <div> {props.greeting} </div>
//             <div> {props.children} </div>
//             <div> == {props.children.h3} </div>
//         </div>
//     )
// }

