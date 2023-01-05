export const OrderSuccess = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
        <div className="my-5">
            <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>
            <p>Thank you user name for order!</p>
            <p>Your Order ID: user id</p>          
        </div>
        <div className="my-5">
            <p>Your order is confirmed.</p>
            <p>Please check your mail (user@email.com) for the eBook.</p>
            <p className="my-5">Payment ID: xyz_123456789</p>
        </div>
        <a href="/" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Continue Shopping <i className="ml-2 bi bi-cart"></i></a>
    </section>
  )
}
