import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Trash2, Settings2, Image as ImageIcon, Send, Instagram, Linkedin, Globe } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function SortableBlock({ id, item, onRemove, onEdit }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 50 : 'auto',
        opacity: isDragging ? 0.6 : 1,
    };

    const renderContent = () => {
        const title = item.customTitle || item.label;
        const subtitle = item.customSubtitle || "Subtítulo o categoría";
        const description = item.customDescription || "Descripción detallada del bloque para convencer al cliente.";

        switch (item.id) {
            case 'nav':
                return (
                    <div className="w-full flex items-center justify-between py-5 px-8 bg-white border-b border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-[10px] font-black text-white">LOGO</div>
                            <span className="text-[11px] font-black uppercase tracking-tighter text-slate-800">{title}</span>
                        </div>
                        <div className="flex items-center gap-6">
                            {['Inicio', 'Servicios', 'Nosotros'].map(link => (
                                <div key={link} className="h-1.5 w-10 bg-slate-100 rounded-full"></div>
                            ))}
                            <div className="h-9 px-5 bg-secondary text-white rounded-full flex items-center justify-center text-[9px] font-bold uppercase tracking-wider">
                                Contactar
                            </div>
                        </div>
                    </div>
                );

            case 'hero':
                return (
                    <div className="w-full flex flex-col items-center text-center py-20 px-10 bg-slate-50 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                            <div className="absolute top-10 left-10 w-40 h-40 bg-secondary rounded-full blur-3xl no-export"></div>
                        </div>
                        <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-6 bg-secondary/10 px-4 py-1.5 rounded-full">
                            {subtitle}
                        </span>
                        <h2 className="text-4xl font-black text-slate-900 mb-6 max-w-2xl leading-tight uppercase tracking-tighter">
                            {title}
                        </h2>
                        <p className="text-sm text-slate-500 mb-10 max-w-lg leading-relaxed">
                            {description}
                        </p>
                        <div className="flex gap-4">
                            <div className="h-12 w-44 bg-slate-900 rounded-xl shadow-lg flex items-center justify-center text-[10px] text-white font-black uppercase tracking-widest">
                                Comenzar Proyecto
                            </div>
                            <div className="h-12 w-44 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[10px] text-slate-600 font-black uppercase tracking-widest">
                                Ver Portafolio
                            </div>
                        </div>
                    </div>
                );

            case 'features':
                return (
                    <div className="w-full py-16 px-8 bg-white">
                        <div className="mb-12 text-center">
                            <h3 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em] mb-2">{title}</h3>
                            <div className="h-1 w-10 bg-secondary mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="p-8 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all">
                                    <div className="w-12 h-12 bg-white shadow-sm rounded-xl mb-6 flex items-center justify-center border border-slate-100">
                                        <div className="w-5 h-5 bg-secondary/20 rounded-md"></div>
                                    </div>
                                    <div className="h-3 w-3/4 bg-slate-900 rounded mb-3"></div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-slate-200 rounded"></div>
                                        <div className="h-2 w-5/6 bg-slate-200 rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'gallery':
                return (
                    <div className="w-full py-16 px-8 bg-slate-900">
                        <h3 className="text-white font-black uppercase text-xs tracking-widest mb-10 text-center">{title}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group/item overflow-hidden relative">
                                    <ImageIcon className="text-slate-600 w-8 h-8" />
                                    <div className="absolute bottom-4 left-4 right-4 h-10 bg-white/10 backdrop-blur-md rounded-lg border border-white/10"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'form':
                return (
                    <div className="w-full py-16 px-8 bg-white">
                        <div className="max-w-xl mx-auto border border-slate-100 p-10 rounded-[32px] bg-slate-50/30">
                            <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tighter text-center">{title}</h3>
                            <div className="space-y-4">
                                <div className="h-12 w-full bg-white border border-slate-200 rounded-xl px-4 flex items-center text-slate-300 text-[10px] font-bold uppercase tracking-widest">Nombre completo</div>
                                <div className="h-12 w-full bg-white border border-slate-200 rounded-xl px-4 flex items-center text-slate-300 text-[10px] font-bold uppercase tracking-widest">Email Corporativo</div>
                                <div className="h-32 w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-300 text-[10px] font-bold uppercase tracking-widest">Cuéntanos sobre tu proyecto...</div>
                                <div className="h-14 w-full bg-secondary rounded-xl flex items-center justify-center text-white font-black uppercase tracking-[0.2em] text-xs gap-2">
                                    Enviar Propuesta <Send className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'footer':
                return (
                    <div className="w-full py-12 px-8 bg-white border-t-2 border-slate-900">
                        <div className="flex justify-between items-start mb-10">
                            <div className="max-w-xs">
                                <h4 className="font-black text-lg mb-4 uppercase tracking-tighter">Velyon<span className="text-secondary italic">Soft</span></h4>
                                <div className="h-2 w-full bg-slate-100 rounded mb-2"></div>
                                <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                            </div>
                            <div className="flex gap-4">
                                {[Instagram, Linkedin, Globe].map((Icon, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pt-8 border-t border-slate-100 flex justify-between items-center text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            <span>© 2026 VELYONSOFT ARCHITECTURE</span>
                            <span>Privacy Policy / Terms</span>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="bg-slate-50/50 rounded-lg p-12 border-2 border-dashed border-slate-100 flex flex-col items-center justify-center">
                        <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tighter">{title}</h3>
                    </div>
                );
        }
    };

    return (
        <div ref={setNodeRef} style={style} className="group relative bg-white border border-slate-200 rounded-xl transition-all hover:shadow-2xl hover:border-secondary/50">
            <div className="no-export absolute -right-3 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 z-30">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button {...attributes} {...listeners} className="p-2 bg-white shadow-xl rounded-full border border-slate-100 hover:text-secondary cursor-grab active:cursor-grabbing">
                            <GripVertical className="w-4 h-4" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">Reordenar</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button onClick={onEdit} className="p-2 bg-white shadow-xl rounded-full border border-slate-100 hover:text-secondary text-slate-500">
                            <Settings2 className="w-4 h-4" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">Editar Contenido</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button onClick={onRemove} className="p-2 bg-white shadow-xl rounded-full border border-slate-100 hover:text-destructive text-slate-500">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">Eliminar</TooltipContent>
                </Tooltip>
            </div>

            <div className="p-2">
                <div className="rounded-lg overflow-hidden border border-slate-50">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}