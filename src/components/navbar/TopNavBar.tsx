// "use client";
// import React, { useEffect, useState } from "react";
// import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
// import { useTheme } from "next-themes";
// import { Switch } from "@nextui-org/react";

// export default function App() {
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//     const [mounted, setMounted] = useState(false)
//     const { theme, setTheme } = useTheme()

//     useEffect(() => {
//         setMounted(true)
//     }, [])

//     if (!mounted) return null

//     const menuItems = [
//         "کاربری",
//         "محصولات",
//         "فروشگاه",
//         "پیگیری سفارش",
//         "تماس با کارشناسان",
//         "ارتباط با ما",
//         "خروج",

//     ];

//     return (
//         <Navbar
//             isBordered
//             isMenuOpen={isMenuOpen}
//             onMenuOpenChange={setIsMenuOpen}
//             dir="rtl"


//         >
//             <NavbarMenu dir="rtl">
//                 {menuItems.map((item, index) => (
//                     <NavbarMenuItem key={`${item}-${index}`}>
//                         <Link
//                             className="w-full"
//                             color={
//                                 index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
//                             }
//                             href="#"
//                             size="lg"
//                         >
//                             {item}
//                         </Link>
//                     </NavbarMenuItem>
//                 ))}
//             </NavbarMenu>
//             <NavbarContent className="sm:hidden" justify="start">
//                 <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
//             </NavbarContent>

//             <NavbarContent className="sm:hidden pr-3" justify="center">
//                 <NavbarBrand>

//                 </NavbarBrand>
//             </NavbarContent>

//             <NavbarContent className="hidden sm:flex gap-4" justify="center">
//                 <NavbarBrand>

//                 </NavbarBrand>
//                 <NavbarItem>
//                     <Link color="foreground" href="#">
//                         صفحه نخست
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem isActive>
//                     <Link href="#" aria-current="page">
//                         محصولات
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem>
//                     <Link color="foreground" href="#">
//                         ارتباط با ما
//                     </Link>
//                 </NavbarItem>
//             </NavbarContent>

//             <NavbarContent justify="end" className="align-middle">
//                 <NavbarItem className="hidden lg:flex">
//                     <Link href="#">ورود</Link>
//                 </NavbarItem>
//                 <Switch isSelected={theme === 'dark'} onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
//             </NavbarContent>


//         </Navbar>
//     );
// }
// // app / components / ThemeSwitcher.tsx
// // "use client";

// // import { Switch } from "@nextui-org/react";
// // import { useTheme } from "next-themes";
// // import { useEffect, useState } from "react";

// // export default function TopNavBar() {
// //     const [mounted, setMounted] = useState(false)
// //     const { theme, setTheme } = useTheme()

// //     useEffect(() => {
// //         setMounted(true)
// //     }, [])

// //     if (!mounted) return null

// //     return (
// //         <div>

// //             <Switch isSelected={theme === 'dark'} onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
// //         </div>
// //     )
// // };
"use client";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, User } from '@nextui-org/react'
import React from 'react'

export default function TopNavBar() {
    const items = [
        {
            key: "new",
            label: "New file",
        },
        {
            key: "copy",
            label: "Copy link",
        },
        {
            key: "edit",
            label: "Edit file",
        },
        {
            key: "delete",
            label: "Delete file",
        }
    ];
    return (
        <div className='flex justify-between p-2' >
            <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                }}
            />
            <div className='hidden sm:flex'>
                <Button size='sm' variant='light'>پیگیری سفارش</Button>
                <Button size='sm' variant='light'>محصولات</Button>
                <Button size='sm' variant='light'>صفحه نخست</Button>
            </div>
            <div className='flex sm:hidden'>

                <Dropdown>
                    <DropdownTrigger>
                        <Button size='sm' variant='light'>منو</Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Dynamic Actions" items={items}>
                        {(item) => (
                            <DropdownItem
                                key={item.key}
                                color={item.key === "delete" ? "danger" : "default"}
                                className={item.key === "delete" ? "text-danger" : ""}
                            >
                                {item.label}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    )
}
