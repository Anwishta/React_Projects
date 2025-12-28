function customRender(rootElement, mainContainer){
    const reactElement = document.createElement(rootElement.type);
    reactElement.innerHTML = rootElement.children;

    for(let prop in rootElement.props){
        if (prop === 'children') {
            continue;
        }
        reactElement.setAttribute(prop, rootElement.props[prop]);
    }
    mainContainer.appendChild(reactElement);
}


const rootElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit Google"
}

const mainContainer = document.getElementById('root')

customRender(rootElement, mainContainer)