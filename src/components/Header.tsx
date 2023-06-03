import { IconMenu2 } from "@tabler/icons-react";

interface HeaderProps{
    onClick: () => void
}

export default function Header(props: HeaderProps) {
    return (
        <header className={`
            flex px-10 py-5 w-full h-20 bg-neutral-900 justify-between items-center text-[#E6E8E6]
        `}>
            <div className="cursor-pointer" onClick={props.onClick}>
                <IconMenu2 />
            </div>
            <div>
                WHISKAS
            </div>
            <div className="flex gap-5">
                <div className="bg-[#297373] py-3 px-6 rounded-md cursor-pointer">Login</div>
                <div className="border border-[#297373] py-3 px-6 rounded-md cursor-pointer hover:bg-[#297373]">Cadastrar</div>
            </div>
        </header>
    )
}