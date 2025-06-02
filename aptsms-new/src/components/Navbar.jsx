import * as React from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    {
        title: "Membership",
        to: "/membership",
        children: [
            { title: "List of Corporate Members", to: "/corporate-members" },
            { title: "List of Life Members", to: "/life-members" },
        ],
    },
    {
        title: "Events",
        to: "/events",
        children: [
            { title: "Annual Congress", to: "/annual-congress" },
            { title: "International Conferences", to: "/international-conferences" },
        ],
    },
    {
        title: "About APTSMS",
        to: "/about-aptsms",
        children: [
            { title: "APTSMS Presidents", to: "/aptsms-presidents" },
            { title: "Executive Council", to: "/executive-council" },
            { title: "Endowment Lectures", to: "/endowment-lectures" },
            { title: "By-laws", to: "/by-laws" },
        ],
    },
    { title: "Contact", to: "/contact" },
    { title: "President Message", to: "/president-message" },
    { title: "Gallery", to: "/gallery" },
    { title: "E-Magzine", to: "/e-magzine" },
]

export function Navbar() {
    const [open, setOpen] = React.useState(false)

    return (
        <nav className="w-full px-2 md:px-4">
            <div className="flex justify-end items-center py-2 bg-white dark:bg-gray-900 xl:hidden">
                <button onClick={() => setOpen(!open)} className="text-gray-700 dark:text-white focus:outline-none">
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <div className={`xl:flex ${open ? 'block' : 'hidden'} w-full`}> 
                <NavigationMenu viewport={false} className="w-full">
                    <NavigationMenuList className="flex flex-col xl:flex-row flex-wrap justify-center items-start xl:items-center gap-1 xl:gap-2 2xl:gap-3 w-full bg-white dark:bg-gray-900 xl:bg-transparent xl:dark:bg-transparent">
                        {components.map((item) =>
                            item.children ? (
                                <NavigationMenuItem key={item.title} className="w-full xl:w-auto">
                                    <NavigationMenuTrigger className="text-sm md:text-sm px-3 py-2 xl:px-2 xl:py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        {item.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="min-w-[180px] xl:min-w-[220px] bg-white dark:bg-gray-900 shadow-lg rounded-md mt-1 z-50 xl:static absolute left-0 right-0 xl:absolute xl:left-auto xl:right-auto xl:top-full">
                                        <ul className="grid w-full gap-1 p-2">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link to={item.to} className="font-semibold text-sm md:text-sm block py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                                        {item.title}
                                                    </Link>
                                                </NavigationMenuLink>
                                                {item.children.map((child) => (
                                                    <NavigationMenuLink asChild key={child.title}>
                                                        <Link to={child.to} className="text-sm md:text-sm block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                                            {child.title}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ) : (
                                <NavigationMenuItem key={item.title} className="w-full xl:w-auto flex items-center">
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + " text-sm md:text-sm px-3 py-2 xl:px-2 xl:py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors block flex items-center"}>
                                        <Link to={item.to}>{item.title}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            )
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    )
}
