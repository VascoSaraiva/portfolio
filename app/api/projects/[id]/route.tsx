import Work from '@/models/works'
import { ProjectPageParams } from '@/types';
import { connectToDB } from '@/utils/connectDB';

export const GET = async(_request : any, { params } : ProjectPageParams) => {
    try{
        await connectToDB();
        const works = await Work.findById(params.id);
        return new Response(JSON.stringify(works), {status: 200})
    }catch(error){
        return new Response("Failed to fetch this work", {status: 500})
    }
}