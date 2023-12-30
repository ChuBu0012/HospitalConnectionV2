
const Background = ({ children }) => {

    return <div
        className={`min-h-[650px]   bg-background bg-no-repeat bgmobile bgmobile-xs bgmobile-sm bgmobile-md bgmobile-lg overflow-hidden h-screen w-full`}
    >{children}
    </div >
}
export default Background;
