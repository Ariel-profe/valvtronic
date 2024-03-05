
import { ICategory } from "@/interfaces/category";

export const categories: ICategory[] = [
    {
        id: 1,
        name: "todas",
        href: "todas",
    },
    {
        id: 2,
        name: "válvulas",
        href: 'valvulas',
        subcategories: [
            {
                id: 1,
                name: 'mariposa',
                href: 'mariposa'
            },
            {
                id: 2,
                name: 'esféricas',
                href: 'esfericas'
            },
            {
                id: 3,
                name: 'de retención',
                href: 'de_retencion'
            },
            {
                id: 4,
                name: 'guillotina y compuertas',
                href: 'guillotina_y_compuertas'
            },
            {
                id: 5,
                name: 'globo',
                href: 'globo'
            },
            {
                id: 6,
                name: 'esclusas',
                href: 'esclusas'
            },
            {
                id: 7,
                name: 'de aire',
                href: 'de_aire'
            },
        ]
    },
    {
        id: 3,
        name: "actuadores",
        href: 'actuadores',
        subcategories: [
            {
                id: 1,
                name: 'accionamientos manuales',
                href: 'accionamientos_manuales'
            },
            {
                id: 2,
                name: 'neumáticos',
                href: 'neumaticos'
            },
            {
                id: 3,
                name: 'eléctricos',
                href: 'electricos'
            },
            {
                id: 4,
                name: 'electrohidráulicos',
                href: 'electrohidraulicos'
            },
        ]
    },
    {
        id: 4,
        name: "accesorios",
        href: 'accesorios',
        subcategories: [
            {
                id: 1,
                name: 'posicionadores',
                href: 'posicionadores'
            },
            {
                id: 2,
                name: 'Solenoides',
                href: 'solenoides'
            },
            {
                id: 3,
                name: 'filtros',
                href: 'filtros'
            },
        ]
    },
    {
        id: 5,
        name: "sistemas de control",
        href: 'sistemas_de_control',
        subcategories: [
            {
                id: 1,
                name: 'tableros' ,
                href: 'tableros'
            }
        ]
    }
];