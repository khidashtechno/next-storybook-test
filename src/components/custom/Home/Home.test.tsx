import '@testing-library/jest-dom';
import Home from "./Home";
import {render} from "@testing-library/react";

describe('Home page testing h1', ()=>{
    it('should render Home component', ()=>{
        const {getByRole} = render(<Home/>);
        expect(getByRole('heading',{level:1})).toBeInTheDocument();
    })

    it('should render description p-tag ', () => {
    const {getByTestId} = render(<Home/>);
    expect(getByTestId('desc1')).toBeInTheDocument();
    });

    it('should render description content ', () => {
        const {getByTestId} = render(<Home/>);
        expect(getByTestId('desc1').textContent).toMatch(/Description/i);
    });
})