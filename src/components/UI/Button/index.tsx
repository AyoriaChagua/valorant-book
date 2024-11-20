
interface Props {
    readonly color: string;
    readonly text: string;
    readonly onClick?: () => void;
}

export default function Button({ color, text, onClick }: Props) {
    const buttonStyle = {
        backgroundColor: color,
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer',
    };

    return <button style={buttonStyle} onClick={onClick}>{text}</button>;
};
