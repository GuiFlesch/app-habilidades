export default function Pagina(props: any){
    return (
        <div className={`
            flex flex-col bg-gradient-to-br from-gray-400 to-gray-800 w-screen h-screen`}>
            {props.children}
        </div>
    )
}