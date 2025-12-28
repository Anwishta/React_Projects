class ChocolateCake{
    serve(){
        return `Serving chocolate cake`
    }
}

class StrawberryCake{
    serve(){
        return `Serving strawberry cake`
    }
}

function serve(cake : ChocolateCake | StrawberryCake){
    if (cake instanceof ChocolateCake) {
        return `Make ${cake}`
    }
    if (cake instanceof StrawberryCake) {
        return `Make ${cake}`
    }
}

function getCake(cake: string | number){
    if (typeof cake === "string") {
        return `Serving ${cake}`
    }
    return `Serving #${cake}`
}

getCake(45);

function serveCake(msg?: string){
    return `Serving cakes with ${msg}`
}

function sizeCake(size: "small" | "medium" | "large" | number){
    if (size === "small") {
        return `Make small cake`
    }
    if (size === "medium" || size === "large") {
        return  `Make extra cake`
    }
    return `Make #${size} cakes`
}