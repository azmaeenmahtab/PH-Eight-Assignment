import { Navbar } from "@/components/Shared/Navbar/Navbar"

const AllPagesLayout = ({ children }) => {

    return(
        <div>
            <Navbar /> 
            {children}
         </div>
    )

}

export default AllPagesLayout