import { FiX } from "react-icons/fi";
import { SlideOverPropsType } from "./type";

const SlideOver = ({ title, children, orientation, action }: SlideOverPropsType) => {
    return (
        <div className="relative z-10" role="dialog" aria-modal="true">
            <div onClick={action} className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity" />
            <div className="fixed inset-0 w-screen max-w-sm overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className={`pointer-events-none fixed inset-y-0 ${orientation == 'left' ? 'left-0' : 'right-0'} flex w-screen max-w-sm`}>
                        <div className="pointer-events-auto relative w-full">
                            <div className="flex h-full flex-col overflow-y-scroll bg-slate-700 py-6 shadow-xl">
                                <div className="flex items-center justify-between px-4 sm:px-6">
                                    <h2 className="text-lg font-semibold leading-6 text-white" id="slide-over-title">
                                        {title}
                                    </h2>
                                    <button type="button" onClick={action}>
                                        <FiX className="text-2xl" />
                                    </button>
                                </div>
                                <div className="relative mt-8 flex-1 px-4 sm:px-6">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideOver;