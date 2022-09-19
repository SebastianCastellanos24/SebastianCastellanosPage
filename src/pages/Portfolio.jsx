import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";


export default function Portfolio() {
    return (
        <div className="w-4/5 m-auto mt-28">

            <div className="flex items-center mb-16">
                <h2 className="text-[#0D378C] text-2xl font-bold py-1 mr-5">Portfolio</h2>
                <div className="w-1/3 h-1 bg-[#0D378C]"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {proyectos.map((proyecto) => (
                    <MyCard
                        key={proyecto.id}
                        url={proyecto.url}
                        titulo={proyecto.titulo}
                        descripcion={proyecto.descripcion}
                        url_preview={proyecto.url_preview}
                        url_github={proyecto.url_github}
                    />
                ))}
            </div>
        </div>
    )
}
