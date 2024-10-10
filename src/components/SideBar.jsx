import { Home, PanelsTopLeft, SquareMenu, TrendingUp } from 'lucide-react'
import React from 'react'

const SideBar = () => {
    const SidebarItems =[
        {icon: <Home/>, text: "Dashboard"},
        {icon: <SquareMenu/>, text: "Blogs"},
        {icon: <PanelsTopLeft/>, text: "Finances"},
        {icon: <TrendingUp/>, text: "Pitches"},

    ]

  return (
    <div className='px-4 fixed top-0 z-10 left-0 border-r border-gray-300 w-[16%] h-screen'>
            <div className="flex flex-col">
                <h1 className='my-8 pl-3 font-bold text-xl'>LOGO</h1>
                <div>
                    {
                        SidebarItems.map((item, index) => {
                            return (
                                <div  onClick={() =>sidebarHandler(item.text)}key={index} className='flex items-center gap-3 relative hover:bg-gray-100 cursor-pointer rounded-lg p-3 my-3'>
                                    {item.icon}
                                    <span>{item.text}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* <CreatePost open ={open} setOpen ={setOpen}/> */}
        </div>
  )
}

export default SideBar;
