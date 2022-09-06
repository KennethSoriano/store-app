import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { amount } = useSelector((state) => state.cart)

    return (
        <nav>
            <div className='nav-center'>
                <h3>reduc toolkit</h3>
            </div>
        </nav>
    )
}