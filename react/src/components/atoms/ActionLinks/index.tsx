import DynamicIcon from '../DynamicIcon';
import { ActionLinksPropsType } from './types';

const ActionLinks = ({ icon, style, notified = false, action }: ActionLinksPropsType) => {
    return (
        <button type="button" onClick={action} className={`${style} flex items-center text-2xl hover:text-blue-400`}>
            <DynamicIcon iconFamily="fi" icon={icon} />
            {notified && (
                <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500" />
                </span>
            )}
        </button>
    )
}

export default ActionLinks;