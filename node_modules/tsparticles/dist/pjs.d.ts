import { Container } from "./Core/Container";
import { MainSlim } from "./main.slim";
declare const initPjs: (main: MainSlim) => {
    particlesJS: any;
    pJSDom: Container[];
};
export { initPjs };
