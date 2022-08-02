import { ReactNode } from "react";


interface InfoRowPropType{
    title: string
    content?: string | ReactNode
}


function InfoRow({ title , content }: InfoRowPropType) {
    return ( 
        <>
            <div className="more-elem">
                <p className="elem_title">
                    {
                        title
                    }
                </p>
                <div className="elem_content">
                    {
                        content
                    }
                </div>
            </div>
        </>
     );
}

export default InfoRow;