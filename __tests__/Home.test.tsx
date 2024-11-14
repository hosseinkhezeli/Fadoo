import {render,screen} from "@testing-library/react"
import Home from '@/app/page'

describe("Home",()=>{
    it("should have Docs text",()=>{
        render(<Home/>) //ARRANGE
    
        const el = screen.getByText('Read our docs') //ACT
    
        expect(el).toBeInTheDocument() //ASSERT
    })
    it("should have Learn text",()=>{
        render(<Home/>) //ARRANGE
    
        const el = screen.getByText(/learn/i) //ACT
    
        expect(el).toBeInTheDocument() //ASSERT
    })

    it("should have a link with name of Example",()=>{
        render(<Home/>) //ARRANGE
    
        const el = screen.getByRole("link",{
            name:'Examples'
        }) //ACT
    
        expect(el).toBeInTheDocument() //ASSERT
    })
})

//TRIPLE AAA Testing rule