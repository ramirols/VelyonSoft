import React, { useState, useRef, useEffect } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import {
    Download, Plus, Trash2, Settings2,
    Layers, LayoutPanelLeft, MousePointer2,
    Type, Image as ImageIcon, Palette, ChevronRight
} from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf';

// UI Components
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

import { WIREFRAME_BLOCKS } from '../data/wireframeBlocks';
import { SortableBlock } from './SortableBlock';

export default function ConstructorPage() {
    const [items, setItems] = useState([]);
    const [editingBlock, setEditingBlock] = useState(null);
    const [showNavigator, setShowNavigator] = useState(true);
    const [isExporting, setIsExporting] = useState(false);
    const printRef = useRef();

    // --- PERSISTENCIA LOCAL STORAGE ---
    useEffect(() => {
        const savedItems = localStorage.getItem('velyon-builder-data');
        if (savedItems) {
            try {
                setItems(JSON.parse(savedItems));
                console.log("✅ Datos cargados desde LocalStorage");
            } catch (e) {
                console.error("❌ Error cargando LocalStorage", e);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('velyon-builder-data', JSON.stringify(items));
    }, [items]);
    // ----------------------------------

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    const addBlock = (block) => {
        const newId = `${block.id}-${Date.now()}`;
        setItems([...items, { ...block, instanceId: newId, customTitle: block.label || block.name }]);
    };

    const removeBlock = (instanceId) => {
        setItems(items.filter(item => item.instanceId !== instanceId));
    };

    const updateBlock = (instanceId, newData) => {
        setItems(items.map(item => item.instanceId === instanceId ? { ...item, ...newData } : item));
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            setItems((prevItems) => {
                const oldIndex = prevItems.findIndex(i => i.instanceId === active.id);
                const newIndex = prevItems.findIndex(i => i.instanceId === over.id);
                return arrayMove(prevItems, oldIndex, newIndex);
            });
        }
    };

    const handleExport = async () => {
        console.log("🚀 Iniciando exportación optimizada...");
        setIsExporting(true);

        const element = printRef.current; // Tu div #pdf-content

        try {
            // 1. Generar la imagen con html-to-image
            // Agregamos skipFonts: true para que no intente leer las fuentes de Fontshare
            // y así evitar los errores de SecurityError y CORS en consola.
            const dataUrl = await htmlToImage.toPng(element, {
                quality: 0.95,
                pixelRatio: 2,
                backgroundColor: '#ffffff',
                skipFonts: true, // Esto quita los errores de la consola
                filter: (node) => {
                    if (node.classList && node.classList.contains('no-export')) return false;
                    return true;
                }
            });

            // 2. Configurar el PDF con altura dinámica
            const img = new Image();
            img.src = dataUrl;

            img.onload = () => {
                const pdf = new jsPDF('p', 'mm', 'a4');

                const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
                const pdfHeight = (img.height * pdfWidth) / img.width;

                // Si el diseño es más largo que una hoja A4 normal (297mm), 
                // ajustamos la página del PDF para que quepa todo en una sola "tira" larga 
                // o podemos dejarlo así para que sea una página personalizada.
                if (pdfHeight > 297) {
                    // Creamos un PDF con la altura exacta del contenido
                    const longPdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);
                    longPdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
                    longPdf.save(`maqueta-velyon-${Date.now()}.pdf`);
                } else {
                    pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
                    pdf.save(`maqueta-velyon-${Date.now()}.pdf`);
                }

                console.log("✅ PDF Guardado localmente");

                // 3. INTEGRACIÓN CON WHATSAPP
                const phone = "51997676432";
                const msg = "¡Hola VelyonSoft! 👋 Acabo de diseñar mi maqueta en el constructor y ya descargué el PDF. ¿Podrían darme una cotización para este proyecto?";

                const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

                // Abrir WhatsApp en una pestaña nueva
                window.open(waUrl, '_blank');
            };

        } catch (error) {
            console.error("❌ Error en la generación:", error);
            alert("Hubo un error al generar el PDF. Revisa los componentes añadidos.");
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <TooltipProvider>
            <div className="flex h-[calc(100vh-64px)] bg-[#F1F5F9] overflow-hidden">

                {/* SIDEBAR: LIBRERÍA */}
                <aside className="w-72 border-r bg-white flex flex-col z-20">
                    <div className="p-6 border-b">
                        <div className="flex items-center gap-2 mb-1">
                            <LayoutPanelLeft className="w-5 h-5 text-secondary" />
                            <h2 className="font-bold text-lg tracking-tight">Bloques</h2>
                        </div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.1em]">Librería de Diseño</p>
                    </div>

                    <ScrollArea className="flex-1 p-4">
                        <div className="grid gap-2">
                            {WIREFRAME_BLOCKS.map((block) => (
                                <button
                                    key={block.id}
                                    onClick={() => addBlock(block)}
                                    className="group w-full flex items-center gap-3 p-3 rounded-xl border border-slate-50 bg-white hover:border-secondary hover:shadow-sm transition-all text-left"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-secondary/10 transition-colors text-slate-400 group-hover:text-secondary">
                                        <Plus className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black uppercase tracking-tight text-slate-700">{block.label}</span>
                                        <span className="text-[9px] text-slate-400 font-medium tracking-tight">Sección Ready</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </ScrollArea>

                    <div className="p-4 border-t bg-slate-50/50">
                        <Button
                            onClick={handleExport}
                            disabled={items.length === 0 || isExporting}
                            className="w-full bg-primary hover:bg-secondary text-white font-black uppercase text-[10px] tracking-widest h-11"
                        >
                            {isExporting ? "Generando..." : <><Download className="w-4 h-4 mr-2" /> Exportar PDF</>}
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => {
                                if (confirm("¿Borrar todo el diseño?")) {
                                    setItems([]);
                                    localStorage.removeItem('velyon-builder-data');
                                }
                            }}
                            className="w-full mt-2 text-[9px] text-slate-400 hover:text-red-500 font-bold uppercase"
                        >
                            Limpiar Lienzo
                        </Button>
                    </div>
                </aside>

                {/* LIENZO */}
                <main className="flex-1 overflow-y-auto p-12 relative scroll-smooth bg-slate-100/50">

                    {/* NAVIGATOR FLOTANTE */}
                    <div className={`fixed bottom-10 left-[320px] z-50 transition-all duration-500 ease-in-out ${showNavigator ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
                        <div className="w-64 bg-slate-900 border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden">
                            <div className="p-3 bg-slate-800 flex items-center justify-between border-b border-slate-700">
                                <div className="flex items-center gap-2">
                                    <Layers className="w-3.5 h-3.5 text-secondary" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Navegador</span>
                                </div>
                                <Badge className="bg-secondary text-white text-[9px] h-4 px-1.5">{items.length}</Badge>
                            </div>
                            <ScrollArea className="max-h-[300px]">
                                <div className="p-2 space-y-1">
                                    {items.length === 0 && <p className="text-[10px] text-center text-slate-500 py-6 italic tracking-tight">No hay capas activas</p>}
                                    {items.map((item, index) => (
                                        <div key={item.instanceId} className="group flex items-center gap-3 p-2.5 hover:bg-white/5 rounded-lg transition-all cursor-pointer">
                                            <span className="text-[9px] font-bold text-slate-600 w-4 group-hover:text-secondary">{index + 1}</span>
                                            <span className="flex-1 text-[11px] font-bold truncate text-slate-300 group-hover:text-white uppercase tracking-tighter">{item.customTitle || item.label}</span>
                                            <button onClick={() => removeBlock(item.instanceId)} className="opacity-0 group-hover:opacity-100 transition-opacity p-1">
                                                <Trash2 className="w-3 h-3 text-red-500 hover:text-red-400" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                        onClick={() => setShowNavigator(!showNavigator)}
                        className={`fixed bottom-10 left-[320px] z-50 p-4 rounded-full shadow-2xl transition-all ${showNavigator ? 'translate-x-[260px] bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
                    >
                        <Layers className="w-5 h-5" />
                    </button>

                    <div id="pdf-content" ref={printRef} className="max-w-[210mm] mx-auto bg-white shadow-2xl min-h-[297mm] p-[15mm] rounded-sm relative">
                        {/* Cabecera Pro */}
                        <div className="flex justify-between items-end mb-12 border-b-4 border-slate-900 pb-8">
                            <div>
                                <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Velyon<span className="text-secondary font-light italic">Soft</span></h1>
                                <p className="text-[10px] font-black text-slate-400 mt-2 tracking-[0.4em] uppercase">Architecture & Logic</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Propuesta No.</p>
                                <p className="text-xl font-black text-slate-900 leading-none">#{Math.floor(1000 + Math.random() * 9000)}</p>
                            </div>
                        </div>

                        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                            <SortableContext items={items.map(i => i.instanceId)} strategy={verticalListSortingStrategy}>
                                <div className="space-y-6">
                                    {items.length === 0 && (
                                        <div className="py-40 border-4 border-dashed border-slate-100 rounded-[40px] flex flex-col items-center justify-center text-slate-200">
                                            <MousePointer2 className="w-16 h-16 mb-4 opacity-10 rotate-12" />
                                            <p className="text-lg font-black uppercase tracking-tighter italic">Comienza a construir tu flujo</p>
                                        </div>
                                    )}
                                    {items.map((item) => (
                                        <SortableBlock key={item.instanceId} id={item.instanceId} item={item} onRemove={() => removeBlock(item.instanceId)} onEdit={() => setEditingBlock(item)} />
                                    ))}
                                </div>
                            </SortableContext>
                        </DndContext>
                    </div>
                </main>

                {/* SIDEBAR EDICIÓN: SIN BLUR, PROFESIONAL */}
                <Sheet open={!!editingBlock} onOpenChange={() => setEditingBlock(null)}>
                    <SheetContent className="w-[420px] bg-white border-l shadow-[-20px_0_50px_rgba(0,0,0,0.05)] p-0">
                        <div className="h-full flex flex-col">
                            <div className="p-8 bg-slate-900 text-white">
                                <SheetHeader>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
                                            <Settings2 className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <SheetTitle className="text-xl font-black uppercase tracking-tight text-white">Configurar</SheetTitle>
                                            <SheetDescription className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                ID: {editingBlock?.instanceId.split('-')[1]}
                                            </SheetDescription>
                                        </div>
                                    </div>
                                </SheetHeader>
                            </div>

                            <ScrollArea className="flex-1 p-8">
                                <div className="space-y-10">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-4 bg-secondary rounded-full"></div>
                                            <span className="text-xs font-black uppercase tracking-widest text-slate-800">Textos Principales</span>
                                        </div>
                                        <div className="space-y-3">
                                            <Label htmlFor="title" className="text-[10px] font-black text-slate-400 uppercase">Título de la sección</Label>
                                            <Input
                                                id="title"
                                                className="h-12 border-slate-200 focus:ring-4 focus:ring-secondary/10 transition-all font-bold text-slate-700 rounded-xl"
                                                value={editingBlock?.customTitle || ''}
                                                onChange={(e) => {
                                                    const val = e.target.value;
                                                    updateBlock(editingBlock.instanceId, { customTitle: val });
                                                    setEditingBlock({ ...editingBlock, customTitle: val });
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-6 opacity-40">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-4 bg-slate-300 rounded-full"></div>
                                            <span className="text-xs font-black uppercase tracking-widest text-slate-400">Estilos Avanzados</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 border-2 border-dashed border-slate-100 rounded-2xl flex flex-col items-center gap-2">
                                                <Palette className="w-4 h-4" />
                                                <span className="text-[9px] font-bold uppercase">Color</span>
                                            </div>
                                            <div className="p-4 border-2 border-dashed border-slate-100 rounded-2xl flex flex-col items-center gap-2">
                                                <ImageIcon className="w-4 h-4" />
                                                <span className="text-[9px] font-bold uppercase">Imagen</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollArea>

                            <div className="p-8 border-t border-slate-100">
                                <Button onClick={() => setEditingBlock(null)} className="w-full bg-slate-900 hover:bg-secondary text-white font-black uppercase tracking-widest h-14 rounded-2xl transition-all shadow-xl shadow-slate-200">
                                    Aplicar y Cerrar
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </TooltipProvider>
    );
}