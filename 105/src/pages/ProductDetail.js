export const ProductDetail = () => {
  return (
    <main>
        <section>
          <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">The Complete Guide to Backend Development</h1>
          <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.</p>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3">
              <img className="rounded" src="" alt="" />
            </div>
            <div className="max-w-xl my-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                <span className="mr-1">$</span>
                <span className="">29</span>
              </p>
              <p className="my-3"> 
                <span>
                  <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                  <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                  <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                  <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                  <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>
                </span>
              </p>
              <p className="my-4 select-none">
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>   
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>
                {/* <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span> */}
                <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">5 MB</span>
              </p>
              <p className="my-3">
                <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>
                {/* <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
              </p>
              <p className="text-lg text-gray-900 dark:text-slate-200">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.
              </p>
            </div>
          </div>
        </section>
      </main> 
  )
}
