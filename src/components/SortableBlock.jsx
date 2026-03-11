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
                    <div className="w-full flex flex-col md:flex-row items-center justify-between py-4 md:py-5 px-4 md:px-8 bg-white border-b border-slate-100 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-900 rounded-lg flex items-center justify-center text-[8px] md:text-[10px] font-black text-white">LOGO</div>
                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-tighter text-slate-800">{title}</span>
                        </div>
                        <div className="flex items-center gap-4 md:gap-6">
                            {/* En mobile ocultamos algunos links para no saturar */}
                            <div className="hidden sm:flex items-center gap-4">
                                {['Inicio', 'Servicios'].map(link => (
                                    <div key={link} className="h-1.5 w-8 md:w-10 bg-slate-100 rounded-full"></div>
                                ))}
                            </div>
                            <div className="h-8 md:h-9 px-4 md:px-5 bg-secondary text-white rounded-full flex items-center justify-center text-[8px] md:text-[9px] font-bold uppercase tracking-wider">
                                Contactar
                            </div>
                        </div>
                    </div>
                );

            case 'hero':
                return (
                    <div className="w-full flex flex-col items-center text-center py-12 md:py-20 px-6 md:px-10 bg-slate-50 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                            <div className="absolute top-10 left-10 w-20 md:w-40 h-20 md:h-40 bg-secondary rounded-full blur-3xl no-export"></div>
                        </div>
                        <span className="text-[8px] md:text-[10px] font-black text-secondary uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 bg-secondary/10 px-3 md:px-4 py-1.5 rounded-full">
                            {subtitle}
                        </span>
                        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6 max-w-2xl leading-tight uppercase tracking-tighter">
                            {title}
                        </h2>
                        <p className="text-xs md:text-sm text-slate-500 mb-8 md:mb-10 max-w-lg leading-relaxed">
                            {description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                            <div className="h-10 md:h-12 px-6 bg-slate-900 rounded-xl shadow-lg flex items-center justify-center text-[9px] md:text-[10px] text-white font-black uppercase tracking-widest cursor-default">
                                Comenzar Proyecto
                            </div>
                            <div className="h-10 md:h-12 px-6 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[9px] md:text-[10px] text-slate-600 font-black uppercase tracking-widest cursor-default">
                                Ver Portafolio
                            </div>
                        </div>
                    </div>
                );

            case 'features':
                return (
                    <div className="w-full py-12 md:py-16 px-4 md:px-8 bg-white">
                        <div className="mb-8 md:mb-12 text-center">
                            <h3 className="font-black text-slate-900 uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2">{title}</h3>
                            <div className="h-1 w-8 md:w-10 bg-secondary mx-auto rounded-full"></div>
                        </div>
                        {/* Grid responsive: 1 columna en móvil, 3 en escritorio */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="p-6 md:p-8 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white shadow-sm rounded-xl mb-4 md:mb-6 flex items-center justify-center border border-slate-100">
                                        <div className="w-4 h-4 md:w-5 md:h-5 bg-secondary/20 rounded-md"></div>
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
                    <div className="w-full py-12 md:py-16 px-4 md:px-8 bg-slate-900">
                        <h3 className="text-white font-black uppercase text-[10px] md:text-xs tracking-widest mb-8 md:mb-10 text-center">{title}</h3>
                        {/* Grid responsive: 1 columna en móvil pequeño, 2 en adelante */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-video bg-slate-800 rounded-xl md:rounded-2xl flex items-center justify-center border border-slate-700 group/item overflow-hidden relative">
                                    <ImageIcon className="text-slate-600 w-6 h-6 md:w-8 md:h-8" />
                                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 h-8 md:h-10 bg-white/10 backdrop-blur-md rounded-lg border border-white/10"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'form':
                return (
                    <div className="w-full py-12 md:py-16 px-4 md:px-8 bg-white">
                        <div className="max-w-xl mx-auto border border-slate-100 p-6 md:p-10 rounded-[24px] md:rounded-[32px] bg-slate-50/30">
                            <h3 className="text-lg md:text-xl font-black text-slate-900 mb-6 md:mb-8 uppercase tracking-tighter text-center">{title}</h3>
                            <div className="space-y-3 md:space-y-4">
                                <div className="h-11 md:h-12 w-full bg-white border border-slate-200 rounded-xl px-4 flex items-center text-slate-300 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Nombre completo</div>
                                <div className="h-11 md:h-12 w-full bg-white border border-slate-200 rounded-xl px-4 flex items-center text-slate-300 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Email Corporativo</div>
                                <div className="h-24 md:h-32 w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-300 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Cuéntanos sobre tu proyecto...</div>
                                <div className="h-12 md:h-14 w-full bg-secondary rounded-xl flex items-center justify-center text-white font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs gap-2 cursor-default">
                                    Enviar Propuesta <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'footer':
                return (
                    <div className="w-full py-8 md:py-12 px-4 md:px-8 bg-white border-t-2 border-slate-900">
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 md:mb-10 gap-6 text-center md:text-left">
                            <div className="max-w-xs w-full">
                                <h4 className="font-black text-base md:text-lg mb-3 md:mb-4 uppercase tracking-tighter">Velyon<span className="text-secondary italic">Soft</span></h4>
                                <div className="h-2 w-full bg-slate-100 rounded mb-2"></div>
                                <div className="h-2 w-2/3 bg-slate-100 rounded mx-auto md:mx-0"></div>
                            </div>
                            <div className="flex gap-3 md:gap-4">
                                {[Instagram, Linkedin, Globe].map((Icon, i) => (
                                    <div key={i} className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-secondary transition-colors cursor-default">
                                        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pt-6 md:pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            <span>© 2026 VELYONSOFT ARCHITECTURE</span>
                            <div className="flex gap-4">
                                <span>Privacy Policy</span>
                                <span>Terms</span>
                            </div>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="bg-slate-50/50 rounded-lg p-8 md:p-12 border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-center">
                        <h3 className="text-lg md:text-xl font-bold text-slate-800 uppercase tracking-tighter">{title}</h3>
                    </div>
                );
        }
    };

    return (
        <div ref={setNodeRef} style={style} className="group relative bg-white border border-slate-200 rounded-xl transition-all hover:shadow-2xl hover:border-secondary/50">
            {/* Controles de edición: En mobile son siempre visibles o se activan con touch, he ajustado el posicionamiento */}
            <div className="no-export absolute -right-2 md:-right-3 top-2 md:top-4 flex flex-col gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all translate-x-0 md:translate-x-2 md:group-hover:translate-x-0 z-30">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button {...attributes} {...listeners} className="p-1.5 md:p-2 bg-white shadow-xl rounded-full border border-slate-100 hover:text-secondary cursor-grab active:cursor-grabbing">
                            <GripVertical className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">Reordenar</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button onClick={onEdit} className="p-1.5 md:p-2 bg-white shadow-xl rounded-full border border-slate-100 hover:text-secondary text-slate-500">
                            <Settings2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">Editar</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button onClick={onRemove} className="p-1.5 md:p-2 bg-white shadow-xl rounded-full border border-slate-100 hover:text-destructive text-slate-500">
                            <Trash2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">Eliminar</TooltipContent>
                </Tooltip>
            </div>

            <div className="p-1 md:p-2">
                <div className="rounded-lg overflow-hidden border border-slate-50">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}