import React, {FC} from "react";

type Props = {};
const Navbar: FC<Props> = ({}): React.JSX.Element => {
    return (
        <div className={`flex justify-center items-center w-full h-[60px] shadow-md bg-white p-3 rounded-md`}>
            <h1 className={"font-[500] leading-[1.75rem] text-gray-900 text-xl"}> ООО "Find Work New Service"</h1>
        </div>
    )
}

export default Navbar;