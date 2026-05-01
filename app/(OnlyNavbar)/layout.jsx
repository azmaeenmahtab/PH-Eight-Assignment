import { Footer } from "@/components/Shared/Footer/Footer"
import { Navbar } from "@/components/Shared/Navbar/Navbar"

const AllPagesLayout = ({ children }) => {

    return(
        <div>
            <Navbar /> 
            {children}
            <Footer />
         </div>
    )

}

export default AllPagesLayout