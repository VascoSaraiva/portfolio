export interface ButtonProps {
    title: string;
    handleClick: string;

}

export interface TitleSectionProps {
    title: string;
    text?: string;
}


export interface ProjectObject {
    _id: number;
    title: string;
    type: string[];
    features: string[];
    description: string;
    year: string;
    madeAt: string;
    link: string;
    thumbnail: {
        src: string;
        alt: string;
    };
    imgs: {
        src: string;
        alt: string;
    }[];
}


export interface AllProjectDataProps{
    data: ProjectObject[];
}

export interface ProjectDataProps{
    data: ProjectObject;
}

export interface ProjectFilterProps{
    clickedFilter: string;
    setClickedFilter: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProjectPageParams{
    params : {
        id : string;
    }
}