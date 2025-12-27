const rootElement = {
    type: "a",
    prop: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit Google"
}

const mainContainer = document.getElementById('root')

customRender(rootElement, mainContainer)