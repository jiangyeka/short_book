export const toKebab=(val:string)=>{
    return val.replace(/([A-Z])/g,'-$1').toLocaleLowerCase()
}

