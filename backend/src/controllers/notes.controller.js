import { Note } from "../model/notes.model.js"

const getAllnotes = async (req,res)=>{
    try{
        const notes = await Note.find();

        res.status(200).json({
            message: "Successfully ge the notes! ",
            notes
        })
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            error: error
        })
    }
}
const getnoteById = async (req,res)=>{
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(400).json({
                message: "No note found!"
            })
        }
        res.status(200).json({
            message: "Successfully ge the note! ",
            note
        })
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            error: error
        })
    }
}
const createnote = async (req,res)=>{
    try{
        const {title,content} = req.body;
        if(!title || !content){
            return res.status(400).json({
                message:"All Fields required!"
            })
        }

        const note = await Note.create({
            title,
            content
        })

        res.status(201).json({
            message:"Successfully note created!",
            note
        })
    }
    catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            error:err
        })
    }

}
const updatenote = async (req,res)=>{
    try{
        if(Object.keys(req.body).length===0){
            return res.status(400).json({
                message: "No Data Provide"
            })
        }

        const note = await Note.findByIdAndUpdate(req.params.id,req.body,{new:true});

        if(!note){
            return res.status(404).json({
                message:"Note not found"
            })
        }

        res.status(200).json({
            message:"Successfully Updated!",
            note
        })
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            error:err
        })
    }
}

const deletenote = async (req,res)=>{
    try{
        const deleted = await Note.findByIdAndDelete(req.params.id)

        if(!deleted){
            return res.status(400).json({
                message:"No note found"
            })
        }
        res.status(200).json({
            message: "Post deleted Successfully ",
        });

    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            error: error,
        })
    }
}

export{
    getAllnotes,
    getnoteById,
    createnote,
    updatenote,
    deletenote
}