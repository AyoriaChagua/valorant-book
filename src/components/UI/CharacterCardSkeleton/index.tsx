export default function CharacterCardSkeleton() {
    return (
        <div
            className="flex-shrink-0 border-4 border-[#323743] p-2 rounded-xl relative"
        >
            <div className="relative h-96 w-56 overflow-hidden rounded-lg z-10 bg-[#323743]">
                {/* Fondo animado */}
                <div className="absolute inset-0 rounded-lg overflow-hidden z-0">
                    <div className="w-full h-full animate-pulse bg-gray-700 opacity-15" />
                </div>

                {/* Área de la imagen del personaje */}
                <div className="absolute inset-0 h-[60vh] -top-10">
                    <div className="w-full h-full animate-pulse bg-gray-600" />
                </div>

                {/* Gradiente inferior */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-1/2 rounded-b-lg bg-gradient-to-t from-black to-transparent"
                />

                {/* Nombre del personaje skeleton */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-32 animate-pulse bg-gray-500 rounded" />
                </div>
            </div>
        </div>
    );
};
