// function customRender(reactElement, container) {
//     const domElement = document.createElement(reactElement.type); // Create a DOM element of the specified type
//     domElement.innerHTML = reactElement.children; // Set the inner HTML of the DOM element to the children of the react element
//     domElement.setAttribute('href', reactElement.props.href); // Set the href attribute of the DOM element
//     domElement.setAttribute('target', reactElement.props.target); // Set the target attribute of the DOM element
//     container.appendChild(domElement); // Append the DOM element to the container
// } // This is a function to render a react element into a container
// // This is a react element object
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click Me to visit chatpgt'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)
