import Input from "@/components/UI/Input";
import SelectInput from "@/components/UI/SelectInput"

interface Props {
    readonly handleFilter: (filter: string, value: string) => void;
    readonly roles: string[];
    readonly className?: string
}

export default function FilterSection({ handleFilter, roles, className }: Props) {
    const handleRoleChange = (role: string) => {
        handleFilter('role', role);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFilter('name', e.target.value);
    };

    return (
        <div className={`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 ${className}`}>
            <SelectInput options={roles} handleFilter={handleRoleChange} label="Role" />
            <Input label="Agent name" onChange={handleNameChange} palceholder="A..." />
        </div>
    )
}
