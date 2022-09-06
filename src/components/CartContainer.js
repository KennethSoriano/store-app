import CartItem from "./CartItem"
import { useSelector } from "react-redux";

const CartContainer = () => {
    const { CartItem, total, amount} = useSelector((state) => state.cart)
  
    if (amount < 1) {
        return (
            <section className="cart">
                {/* cart headr */}
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }
}

export default CartContainer