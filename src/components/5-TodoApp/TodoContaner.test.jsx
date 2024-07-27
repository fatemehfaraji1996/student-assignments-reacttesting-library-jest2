import TodoContainer from "./TodoContainer"
import { render,screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
describe('test to do',()=>{

    it('render',()=>{
    
        render(<TodoContainer/>)
    
    
    
          const button = screen.getByRole('button', { name:"Add Todo" }); 
        
          const input = screen.getByPlaceholderText("write a todo"); 
    
   
          fireEvent.change(input, { target: { value: 'First Todo' } });
          fireEvent.click(button);
        
       
          expect(screen.getByText('First Todo')).toBeInTheDocument();
          expect(screen.getAllByRole('listitem')).toHaveLength(1); 
        // it('test lis',()=>{
    
            // render(<TodoContainer/>)
            const input2 = screen.getByPlaceholderText("write a todo"); 
            const button2 = screen.getByRole('button', { name:"Add Todo" })
    
             fireEvent.change(input2, { target: { value: 'Second Todo' } });
             fireEvent.click(button2);
            

             expect(screen.getByText('First Todo')).toBeInTheDocument();
             expect(screen.getByText('Second Todo')).toBeInTheDocument();
             expect(screen.getAllByRole('listitem')).toHaveLength(2); 

             fireEvent.change(input, { target: { value: 'Third Todo' } });
             fireEvent.click(button);
            
        
             expect(screen.getByText('First Todo')).toBeInTheDocument();
             expect(screen.getByText('Second Todo')).toBeInTheDocument();
             expect(screen.getByText('Third Todo')).toBeInTheDocument();
             expect(screen.getAllByRole('listitem')).toHaveLength(3); 

        })    
// })        
})

    
