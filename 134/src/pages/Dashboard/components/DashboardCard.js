export const DashboardCard = () => {
  return (
    <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
        <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
            <span>Order Id: 1234</span>
            <span>Total: $29</span>
        </div>
        <div className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
            <div className="flex">
                <a href="">
                    <img className="w-32 rounded" src="" alt="" />
                </a>
                <div className="">
                    <a href="">
                        <p className="text-lg ml-2 dark:text-slate-200">The Complete Guide to Backend Development</p>
                    </a>
                    <div className="text-lg m-2 dark:text-slate-200">
                        <span>$29</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
