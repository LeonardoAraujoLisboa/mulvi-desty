export interface SelectPeriodProps {
    label: 'Antecipado (em 1 dia)' | 'Receber a cada 30 dias';
    value: 'Antecipado (em 1 dia)' | 'Receber a cada 30 dias';
}

export interface SelectFlagsProps {
    label: 'Master Card e Visa' | 'Elo' | 'Amex e Hiper' | 'Banese Card';
    value: 'Master Card e Visa' | 'Elo' | 'Amex e Hiper' | 'Banese Card';
}

export interface BusinessCardProps {
    data: {
        icon: string;
        info_icon: string;
        title: string;
        text: string;
        id: string;
        date?: string;
    }[]
    pageId?: string;
}