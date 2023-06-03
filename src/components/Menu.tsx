import { IconCalculator, IconBox, IconChecklist, IconUser, IconBook, IconAdjustmentsHorizontal } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu(){
    return (
        <nav className={`
            flex flex-col bg-neutral-900 w-56 h-62 border-t border-t-[#CED0CE]
        `}>
            <ul>
                <MenuItem icon={<IconCalculator/>} title={'Calculadora'}/>
                <MenuItem icon={<IconBox/>} title={'Produtos'}/>
                <MenuItem icon={<IconChecklist/>} title={'Checklist'}/>
                <MenuItem icon={<IconBook/>} title={'Portfolio'}/>
                <MenuItem icon={<IconAdjustmentsHorizontal />} title={'Temas'}/>
                <MenuItem icon={<IconUser/>} title={'Sobre mim'}/>
            </ul>
        </nav>
    )
}