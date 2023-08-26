import { CartContext } from "@/components/Cartcontexts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useContext, useEffect, useState } from "react";
// banke hawa mai
export default function Cart() {
  const { cartProducts, addProduct, removeProduct,clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAdress, setStreetAdress] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess,setIsSuccess] = useState(false);
  const { data: session } = useSession();


console.log(session)


  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success')) {
        setIsSuccess(true);
        clearCart()
    }
  }, []);

  function moreofthisproduct(id) {
    addProduct(id);
  }
  function lessofthisproduct(id) {
    removeProduct(id);
  }
  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAdress,
      country,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }
  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }
  



  if (isSuccess) {

    return (
      <>
       <Header/>
       <div className="Center">
       <div className="Box1">

              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
         </div>
         </div>
      </>
    );
  }


  return (
    <>
      <Header />
      <div className="Center">
        <div className="ColumsWrapper">
          <div className="Box1">
            <h2 className="text-3xl">Cart</h2>

            {!cartProducts?.length && <div>Your cart is empty</div>}
            {products?.length > 0 && (
              <table className="table1">
                <thead>
                  <tr>
                    <th >Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} >
                      <td>
                        <div  className="productimagebox">
                          <img src={product.images[0]} alt="" />
                        </div>
                        {product.title}
                      </td>
                      <td>
                        <button
                          onClick={() => lessofthisproduct(product._id)}
                          className="plus"
                        >
                          - 
                        </button>

                        {cartProducts.filter((id) => id === product._id).length}

                        <button
                          onClick={() => moreofthisproduct(product._id)}
                          className="plus"
                        >
                          +
                        </button>
                      </td>
                      <td>
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.price}{" "}
                        ₹
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>₹{total}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          {!!cartProducts?.length && (
            <div className="Box1">
              <h2>
                <b>Order information</b>
              </h2>

              <input
                className="styledinput mt-10"
                type="text"
                placeholder={session?.user?.name}
                name="name"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
              <input
                className="styledinput mt-2"
                type="text"
                placeholder={session?.user?.email}
                name="email"
                value={email}
                onChange={() => setEmail(session?.user?.email)}
              />
              <div className="cityholder">
                <input
                  className="styledinput mt-2"
                  type="text"
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={(ev) => setCity(ev.target.value)}
                />
                <input
                  className="styledinput mt-2"
                  type="text"
                  placeholder="Postal code"
                  name="postalCode"
                  value={postalCode}
                  onChange={(ev) => setPostalCode(ev.target.value)}
                />
              </div>
              <input
                className="styledinput mt-2"
                type="text"
                placeholder="Street Address"
                name="streetAdress"
                value={streetAdress}
                onChange={(ev) => setStreetAdress(ev.target.value)}
              />
              <input
                className="styledinput mt-2"
                type="text"
                placeholder="country"
                name="country"
                value={country}
                onChange={(ev) => setCountry(ev.target.value)}
              />
              <input
                type="hidden"
                name="products"
                value={cartProducts.join(",")}
              />
              <button className="btn-primary1" onClick={goToPayment}>
                continue to payment
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}
