interface MenuItemProps {
    title: string
    icon: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <li className={`
        flex border-b border-[#CED0CE]
         py-2 gap-1 justify-start px-5 text-[#CED0CE]
         cursor-pointer hover:text-white
         `}>
            {props.icon}{props.title}
        </li>
    )
}