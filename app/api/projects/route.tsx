import Work from '@/models/works'
import { connectToDB } from '@/utils/connectDB';

export const GET = async() => {
    try{
        await connectToDB();
        const works = await Work.find({});
        return new Response(JSON.stringify(works), {status: 200})
    }catch(error){
        return new Response("Failed to fetch all works", {status: 500})
    }
}