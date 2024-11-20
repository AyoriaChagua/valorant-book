import { Agent } from "@/lib/types";
import { useState } from "react";

interface Props {
    readonly agent: Agent;
}

export default function CharacterCard({ agent }: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const colorRgb = "#" + agent.backgroundGradientColors[1].substring(0, 6);
    const gradientColor = isHovered ? colorRgb : "#000";

    return (
        <div
            className="flex-shrink-0 border-4 p-2 rounded-xl relative transition-colors cursor-pointer"
            style={{
                borderColor: isHovered ? colorRgb : '#323743'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative md:h-96  md:w-56 h-72 w-44 overflow-hidden rounded-lg z-10 bg-[#323743]">
                <div className="absolute inset-0 rounded-lg overflow-hidden z-0">
                    <img
                        src="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/listviewicontall.png"
                        alt="Fondo"
                        className="w-full h-full object-cover opacity-15"
                    />
                </div>
                <img
                    src={agent.fullPortrait}
                    alt={agent.displayName}
                    className="absolute inset-0 h-[60vh] object-cover -top-10"
                />
                <div
                    className="absolute bottom-0 left-0 right-0 h-1/2 rounded-b-lg"
                    style={{
                        background: `linear-gradient(to top, ${gradientColor} 20%, transparent 100%)`,
                    }}
                />
                <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-5xl font-[Tungsten-bold]">
                    {agent.displayName.toUpperCase()}
                </span>
            </div>
        </div>
    );
}