interface Props {
    readonly label: string
    readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    readonly palceholder: string
}

export default function Input({ label, onChange, palceholder }: Props) {
    return (
        <div>
            <label htmlFor="agent_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#FE4754]">{label}</label>
            <input type="text" id="agent_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#FE4754] dark:focus:ring-red-400 dark:focus:border-red-400" placeholder={palceholder} onChange={onChange} />
        </div>
    )
}
