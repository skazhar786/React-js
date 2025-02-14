function customReact(reactElement,container){
// the below code is working properly but its not optimized approach 

//    const domElement =  document.createElement(reactElement.type)
//    domElement.innerHTML = reactElement.children
//    domElement.setAttribute("href", reactElement.props.href)
//    container.appendChild(domElement)

// here we will code the same thing in a optimze approach

const domElement =  document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
    if (1) {
        domElement.setAttribute(prop,reactElement.props[prop])
    }
   }
   container.appendChild(domElement)
}

const reactElement = {
   type :"a",
   props:{
    href: "https://google.com",
    target : "_default"
   },
   children : "click to visit google"
}

  const reactDom = document.getElementById("root")
   
   customReact(reactElement,reactDom)