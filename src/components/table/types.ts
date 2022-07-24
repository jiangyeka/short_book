export interface TableOptions{
    label:string;
    prop?:string;
    width?:string|number;
    align?:'left'|'center'|'right';
    slot?:string;
    action?:boolean;
}

export interface LoadingOptions{
    loadingText:string;
    loadingSpinner?:string;
    loadingSvg?:string;
    loadingBackground?:string;
    laodingSvgBox?:string;
}