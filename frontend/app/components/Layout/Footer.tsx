export default function Footer() {
  return (
    <footer className="container py-4 mt-8">
      <div className="flex gap-[100px] justify-center">
        <div className="products">
          <h3 className="title-h3">Products</h3>
          <p>Scented Candles</p>
          <p>Gift box</p>
          <p>Essential Oil / Scented Wax</p>
          <p>Accessories</p>
        </div>
        <div className="products">
          <h3 className="title-h3">Quick Links</h3>
          <p>Track orders</p>
          <p>Shipping Polices</p>
          <p>Refund & Cancellation</p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Site map</p>
        </div>
        <div className="products">
          <h3 className="title-h3">About</h3>
          <p>Our Story</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>

        <div>
          <p>GET UPDATES</p>
          <p>On Offers and updates ! We have something to share</p>
          <input
            className="shadow appearance-none border border-red-500 rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="input your email"
          />
        </div>
      </div>
      <div className="container mx-auto text-center ">
        <p>&copy; 2024 E-Commerce App. All rights reserved.</p>
      </div>
    </footer>
  );
}
