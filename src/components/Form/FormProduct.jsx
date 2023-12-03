import Input from "../UI/Input"

function FormProduct() {
   return(
      <>
         <form>
         <Input
            label="Amount"
            input={{
               type: "number",
               min: "1",
               max: "5",
               step: "1",
               defaultValue: "1",
            }}
         />
         </form>   
      </>
   )
}

export default FormProduct