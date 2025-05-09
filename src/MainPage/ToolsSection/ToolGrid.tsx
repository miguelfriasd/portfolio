import { ReactNode, Children } from "react";

interface ToolGridProps{
    title: string,
    children?: ReactNode,
    rowSize: number;
}

export default function ToolGrid({title, children, rowSize}: ToolGridProps){
    
    const rowList: ReactNode[][] = [];

    Children.forEach(children, (child, index) => {
        if(index === 0 || index % rowSize === 0){
            rowList.push([child]);
            return;
        }
        rowList[rowList.length - 1].push(child);
    })

    return( 
        <div className='flex flex-col items-center mb-5'>
            <h2 className='text-3xl font-sans leading-tight font-bold text-zinc-300 mb-10'>{title}</h2>

            {rowList.map(row => {
                return (
                    <div className="flex flex-wrap">
                        {...row}
                    </div>
                )
            })}
        </div>
    )
}
