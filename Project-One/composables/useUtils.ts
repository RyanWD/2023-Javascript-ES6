export const useUtils = () => {
const sayHello = (message: string) => {
    console.log(message)
}
return {
    sayHello
}
}