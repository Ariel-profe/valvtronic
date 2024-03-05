import { ILink } from '@/interfaces/link';

export const links: ILink[] = [
    {
        id: 0,
        name: 'inicio',
        href: '/',
    },
    {
        id: 1,
        name: 'nosotros',
        href: '/nosotros',
        subMenus: ['Historia', 'ADN', 'Departamentos']
    },
    {
        id: 2,
        name: 'servicios',
        href: '/servicios',
        subMenus: ['Charlas técnicas', 'Capacitaciones técnicas', 'Postventa', 'Asistencia técnica']
    },
    {
        id: 3,
        name: 'productos',
        href: '/productos',
        subMenus: ['Válvulas','Actuadores ','Accesorios de control']
    },
    {
        id: 4,
        name: 'ctv',
        href: '/ctv',
    },
    {
        id: 5,
        name: 'certificaciones',
        href: '/certificaciones',
    },
    {
        id: 6,
        name: 'contacto',
        href: '/contacto',
    }
];